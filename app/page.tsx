import {
  BadgeDollarSign,
  Car,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Headphones,
  Phone,
  ShieldCheck,
  Sparkles,
  WalletCards
} from "lucide-react";

const phoneDisplay = "(323) 537-2083";
const phoneHref = "tel:+13235372083";
const quoteHref = "https://fastrakins.com";

const cards = [
  {
    icon: Car,
    title: "Seguro de auto",
    text: "Opciones para responsabilidad civil, cobertura completa y conductores con historial complicado."
  },
  {
    icon: FileCheck2,
    title: "SR-22",
    text: "Ayuda para cotizar y emitir un SR-22 cuando lo requiere el DMV o la corte."
  },
  {
    icon: WalletCards,
    title: "Pagos accesibles",
    text: "Revisamos opciones disponibles para encontrar una combinación competitiva de pago inicial y mensualidad."
  }
];

const reasons = [
  "Atención completamente en español",
  "Opciones para conductores con licencia, permiso o historial difícil",
  "Ayuda con SR-22 y reinstalación de licencia",
  "Cotizaciones con múltiples compañías disponibles",
  "Agentes licenciados listos para ayudarte"
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="/" className="brand" aria-label="Aseguranzas-Baratas.com">
          <span className="brandMark">AB</span>
          <span>
            <strong>Aseguranzas</strong>
            <em>Baratas.com</em>
          </span>
        </a>

        <nav className="navLinks" aria-label="Navegación principal">
          <a href="#coberturas">Coberturas</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#sr22">SR-22</a>
        </nav>

        <a className="phoneButton" href={phoneHref}>
          <Phone size={18} />
          {phoneDisplay}
        </a>
      </header>

      <section className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="heroInner">
          <div className="heroCopy">
            <div className="eyebrow">
              <Sparkles size={15} />
              SEGURO DE AUTO EN ESPAÑOL
            </div>
            <h1>
              Tu aseguranza no tiene que costar <span>de más.</span>
            </h1>
            <p className="heroLead">
              Comparamos opciones de seguro de auto en California para ayudarte a
              encontrar una póliza que se adapte a tu presupuesto y a tu situación.
            </p>

            <div className="heroActions">
              <a className="primaryCta" href={quoteHref}>
                Cotizar ahora
                <ChevronRight size={18} />
              </a>
              <a className="secondaryCta" href={phoneHref}>
                <Phone size={18} />
                Llamar {phoneDisplay}
              </a>
            </div>

            <div className="trustRow">
              <span><CheckCircle2 size={17} /> Atención en español</span>
              <span><CheckCircle2 size={17} /> Agentes licenciados</span>
              <span><CheckCircle2 size={17} /> Opciones SR-22</span>
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteCardTop">
              <span className="quoteIcon"><BadgeDollarSign size={27} /></span>
              <div>
                <small>COTIZA EN MINUTOS</small>
                <h2>Encuentra una opción económica</h2>
              </div>
            </div>

            <div className="priceVisual">
              <span>Seguro desde</span>
              <strong>tu mejor opción disponible</strong>
              <small>según elegibilidad, cobertura y compañía</small>
            </div>

            <div className="quoteSteps">
              <div><b>1</b><span>Dinos qué necesitas</span></div>
              <div><b>2</b><span>Comparamos opciones</span></div>
              <div><b>3</b><span>Elige y obtén cobertura</span></div>
            </div>

            <a className="cardCta" href={quoteHref}>
              Empezar mi cotización <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>Español</strong><span>Atención de principio a fin</span></div>
        <div><strong>California</strong><span>Especialistas en auto</span></div>
        <div><strong>SR-22</strong><span>Opciones disponibles</span></div>
        <div><strong>Rápido</strong><span>Cotización sin complicaciones</span></div>
      </section>

      <section className="section" id="coberturas">
        <div className="sectionHeading">
          <span>OPCIONES PARA DIFERENTES NECESIDADES</span>
          <h2>Seguro claro, sencillo y pensado para tu presupuesto.</h2>
          <p>
            Ya sea que necesitas lo mínimo requerido o protección más amplia,
            te ayudamos a revisar opciones sin complicarte.
          </p>
        </div>

        <div className="serviceGrid">
          {cards.map(({ icon: Icon, title, text }) => (
            <article className="serviceCard" key={title}>
              <span className="serviceIcon"><Icon size={25} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={quoteHref}>Cotizar <ChevronRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="splitSection" id="como-funciona">
        <div className="splitVisual">
          <div className="floatingBadge">
            <ShieldCheck size={27} />
            <span><strong>Compra con confianza</strong>Ayuda de un agente real</span>
          </div>
          <div className="visualCard">
            <span className="visualLabel">TU CAMINO A UNA PÓLIZA</span>
            <h3>Menos vueltas.<br />Más claridad.</h3>
            <div className="miniTimeline">
              <span>Información</span>
              <i />
              <span>Comparación</span>
              <i />
              <span>Cobertura</span>
            </div>
          </div>
        </div>

        <div className="splitCopy">
          <span className="kicker">¿POR QUÉ ASEGURANZAS-BARATAS.COM?</span>
          <h2>No se trata solo de pagar menos. Se trata de encontrar una opción que sí te funcione.</h2>
          <p>
            Nuestro objetivo es facilitarte el proceso y conectarte con opciones
            de cobertura disponibles según tu perfil.
          </p>

          <div className="reasonList">
            {reasons.map((reason) => (
              <div key={reason}><CheckCircle2 size={20} />{reason}</div>
            ))}
          </div>

          <a className="textCta" href={quoteHref}>
            Revisar mis opciones <ChevronRight size={17} />
          </a>
        </div>
      </section>

      <section className="sr22Section" id="sr22">
        <div className="sr22Content">
          <span className="kicker light">¿NECESITAS UN SR-22?</span>
          <h2>Te ayudamos a dar el siguiente paso.</h2>
          <p>
            Si el DMV te pidió un SR-22, podemos ayudarte a cotizar una póliza
            elegible y explicarte el proceso de manera sencilla.
          </p>
          <div className="sr22Actions">
            <a className="whiteCta" href={quoteHref}>Cotizar SR-22 <ChevronRight size={18} /></a>
            <a className="ghostCta" href={phoneHref}><Headphones size={18} /> Hablar con un agente</a>
          </div>
        </div>

        <div className="sr22Info">
          <ShieldCheck size={42} />
          <strong>Atención real en español</strong>
          <p>Sin formularios confusos. Un agente puede ayudarte a revisar tu situación.</p>
        </div>
      </section>

      <section className="section faqSection">
        <div className="sectionHeading left">
          <span>PREGUNTAS FRECUENTES</span>
          <h2>Lo básico, sin palabras complicadas.</h2>
        </div>
        <div className="faqGrid">
          <article>
            <h3>¿Qué necesito para cotizar?</h3>
            <p>Normalmente necesitaremos información del conductor, vehículo, domicilio y cobertura que buscas.</p>
          </article>
          <article>
            <h3>¿Puedo cotizar si necesito SR-22?</h3>
            <p>Sí. Podemos revisar opciones disponibles para conductores que requieren un SR-22.</p>
          </article>
          <article>
            <h3>¿Atienden en español?</h3>
            <p>Sí. Nuestro equipo puede ayudarte en español durante el proceso de cotización y compra.</p>
          </article>
          <article>
            <h3>¿Cuál será mi precio?</h3>
            <p>El costo depende de factores como historial, vehículo, cobertura, ubicación y elegibilidad con cada compañía.</p>
          </article>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <span>¿LISTO PARA REVISAR TUS OPCIONES?</span>
          <h2>Empieza tu cotización hoy.</h2>
        </div>
        <div className="finalActions">
          <a href={quoteHref} className="primaryCta">Cotizar ahora <ChevronRight size={18} /></a>
          <a href={phoneHref} className="finalPhone"><Phone size={18} /> {phoneDisplay}</a>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <span className="brandMark">AB</span>
          <div><strong>Aseguranzas-Baratas.com</strong><p>Una forma más sencilla de buscar seguro de auto.</p></div>
        </div>
        <p className="legal">
          Aseguranzas-Baratas.com es un sitio informativo y de generación de cotizaciones.
          Las coberturas, precios y elegibilidad dependen de la compañía, el solicitante y
          la póliza seleccionada. No todas las coberturas están disponibles en todas las situaciones.
        </p>
        <div className="footerBottom">
          <span>© {new Date().getFullYear()} Aseguranzas-Baratas.com</span>
          <span>California · Se habla español</span>
        </div>
      </footer>
    </main>
  );
}
