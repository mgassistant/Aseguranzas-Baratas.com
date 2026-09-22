"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, ShieldCheck, CheckCircle2 } from "lucide-react";

const QUOTE_ENDPOINT = "/api/quote";

type FormState = {
  name: string;
  email: string;
  phone: string;
  zip: string;
  vehicle: string;
  sr22: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  vehicle: "",
  sr22: "",
};

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // Refs mirror form state so unload handlers read the latest values.
  const dataRef = useRef<FormState>(EMPTY);
  const partialSentRef = useRef(false);
  const submittedRef = useRef(false);

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  function update<K extends keyof FormState>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function hasContact(d: FormState): boolean {
    const nameOk = d.name.trim().length >= 2;
    const emailOk = d.email.includes("@");
    const phoneOk = d.phone.replace(/\D/g, "").length >= 10;
    return nameOk && (emailOk || phoneOk);
  }

  // Fire a partial lead once, when contact info is present. Uses sendBeacon
  // on unload (fetch is killed on unload) and keepalive fetch in-page.
  function firePartial(useBeacon: boolean) {
    if (partialSentRef.current || submittedRef.current) return;
    const d = dataRef.current;
    if (!hasContact(d)) return;
    partialSentRef.current = true;

    const payload = JSON.stringify({
      ...d,
      phone: d.phone.replace(/\D/g, ""),
      partial: true,
      lead_status: "partial",
      state: "CA",
    });

    try {
      if (useBeacon && typeof navigator !== "undefined" && navigator.sendBeacon) {
        const blob = new Blob([payload], { type: "application/json" });
        navigator.sendBeacon(QUOTE_ENDPOINT, blob);
        return;
      }
    } catch {
      /* fall through to fetch */
    }

    fetch(QUOTE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {
      /* fail-open */
    });
  }

  // Abandonment fallback: pagehide + visibilitychange(hidden).
  useEffect(() => {
    const onPageHide = () => firePartial(true);
    const onVisibility = () => {
      if (document.visibilityState === "hidden") firePartial(true);
    };
    window.addEventListener("pagehide", onPageHide);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", onPageHide);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  async function verifyEmail(email: string): Promise<boolean> {
    try {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const json = (await res.json()) as { ok?: boolean };
      return json.ok !== false; // fail-open: only block a definitive false
    } catch {
      return true; // fail-open on network error
    }
  }

  function nextStep() {
    setError("");
    if (step === 0) {
      if (data.name.trim().length < 2) {
        setError("Por favor ingrese su nombre.");
        return;
      }
      if (data.phone.replace(/\D/g, "").length < 10) {
        setError("Por favor ingrese un número de teléfono válido.");
        return;
      }
    }
    // Fire partial on step advance once contact info is present.
    firePartial(false);
    setStep((s) => s + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    submittedRef.current = true;

    if (data.name.trim().length < 2) {
      setError("Por favor ingrese su nombre.");
      submittedRef.current = false;
      return;
    }
    if (data.phone.replace(/\D/g, "").length < 10) {
      setError("Por favor ingrese un número de teléfono válido.");
      submittedRef.current = false;
      return;
    }
    if (!data.email.includes("@") || !data.email.includes(".")) {
      setError("Por favor ingrese un correo electrónico válido para poder contactarlo.");
      submittedRef.current = false;
      return;
    }

    setSubmitting(true);

    // ZeroBounce verification before the real submit.
    const emailOk = await verifyEmail(data.email);
    if (!emailOk) {
      setError("Por favor ingrese un correo electrónico válido para poder contactarlo.");
      setSubmitting(false);
      submittedRef.current = false;
      return;
    }

    try {
      await fetch(QUOTE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          phone: data.phone.replace(/\D/g, ""),
          lead_status: "complete",
          state: "CA",
        }),
      });
    } catch {
      /* fail-open — still show success so we never lose the lead visually */
    }

    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="quoteCard">
        <div className="quoteCardTop">
          <span className="quoteIcon">
            <CheckCircle2 size={27} />
          </span>
          <div>
            <small>¡GRACIAS!</small>
            <h2>Recibimos tu solicitud</h2>
          </div>
        </div>
        <p style={{ margin: "8px 0 4px", color: "#3a4a63" }}>
          Un agente licenciado te contactará en español para ayudarte a revisar
          tus opciones de seguro de auto.
        </p>
      </div>
    );
  }

  return (
    <form className="quoteCard" onSubmit={handleSubmit} noValidate>
      <div className="quoteCardTop">
        <span className="quoteIcon">
          <ShieldCheck size={27} />
        </span>
        <div>
          <small>COTIZA EN MINUTOS</small>
          <h2>Encuentra una opción económica</h2>
        </div>
      </div>

      {step === 0 && (
        <div className="quoteFields">
          <label>
            <span>Nombre</span>
            <input
              type="text"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </label>
          <label>
            <span>Teléfono</span>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              onBlur={() => firePartial(false)}
              placeholder="(000) 000-0000"
              autoComplete="tel"
            />
          </label>
        </div>
      )}

      {step === 1 && (
        <div className="quoteFields">
          <label>
            <span>Correo electrónico</span>
            <input
              type="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => firePartial(false)}
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
            />
          </label>
          <label>
            <span>Código postal (ZIP)</span>
            <input
              type="text"
              value={data.zip}
              onChange={(e) => update("zip", e.target.value)}
              placeholder="90001"
              autoComplete="postal-code"
            />
          </label>
          <label>
            <span>Vehículo (opcional)</span>
            <input
              type="text"
              value={data.vehicle}
              onChange={(e) => update("vehicle", e.target.value)}
              placeholder="Ej. Honda Civic 2018"
            />
          </label>
          <label>
            <span>¿Necesitas SR-22?</span>
            <select value={data.sr22} onChange={(e) => update("sr22", e.target.value)}>
              <option value="">Selecciona una opción</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
              <option value="no_seguro">No estoy seguro</option>
            </select>
          </label>
        </div>
      )}

      {error && (
        <p className="quoteError" role="alert" style={{ color: "#c0261b", fontSize: 14, margin: "6px 0" }}>
          {error}
        </p>
      )}

      {step === 0 ? (
        <button type="button" className="cardCta" onClick={nextStep}>
          Continuar <ChevronRight size={18} />
        </button>
      ) : (
        <button type="submit" className="cardCta" disabled={submitting}>
          {submitting ? "Enviando…" : "Obtener mi cotización"} <ChevronRight size={18} />
        </button>
      )}

      <div className="quoteSteps">
        <div>
          <b>1</b>
          <span>Dinos qué necesitas</span>
        </div>
        <div>
          <b>2</b>
          <span>Comparamos opciones</span>
        </div>
        <div>
          <b>3</b>
          <span>Elige y obtén cobertura</span>
        </div>
      </div>
    </form>
  );
}
