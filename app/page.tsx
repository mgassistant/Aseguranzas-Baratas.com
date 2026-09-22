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

          <div className="heroPhoto" style={{backgroundImage: "linear-gradient(180deg,rgba(5,24,55,.05),rgba(5,24,55,.72)), url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABkRExYTEBkWFBYcGxkeJT4pJSIiJUw3Oi0+WlBfXllQV1ZkcJB6ZGqIbFZXfap+iJSZoaKhYXiwva+cu5CeoZr/2wBDARscHCUhJUkpKUmaZ1dnmpqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampr/wgARCAE7AjADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB7xYAAAAAAAAAAAABCYJAAJK10zK8HfwdMTMTvF0mXo+f6HPoHPplOmFZdnJvGkLEAAAAAAAAoKTEkJgAAAAAAAAAAARIEkTaSJIpnpnVeHu4emJG8akpHZydHPdN855dNqXpWM0sa647EAAFaslEIxN3N0EubQ1SMxQAAAAAAAAAAAAkiZsVsQABSl6VXg7+HphKd40JR1cuvPovj0cummeudjDokmQKWqWehGemZqUiMYg0tnpLjrlvZqCkFAAAAAAAAAACSFpIkiUCUSAAUppSqcPdw9OczE7zrMSR0YdvPfH2Z689s9Mi1okmsDPTPTUy1yk1pasuuO2Bbn6sinVSYm1BdnoZigAAAAAAABJEzJEkAAAASACtL0qvD3cPTnI3jYSuzj7Oe8dMnLpfHbE6LZzS1NLMtIGczFWnHoictK1FL1NM8tiq0ZNMkug3AAAAAABJEyEkAAAAAAJyg2Z2FL0qvD3cPTnI3jcSurl357iE8+mca4ptSK7kdPNnZ3R58S+hHAOzDzol7c+aTo24oPa28P1LN55pNmaNAoAAAAkiUkTICAAAAABiryKCszAt12l69InWacPb5e89DklPRY6azbq4d862ctc61pYkWjMoi5nCFmI0OfL0vNxutk2FaFvQ83rs9OjLWdL4JesSgEiEgSEgIAAAAAAAeb6XmLwWjsMZ1jOt9K4L6LDXfPzuW0Sx2Z92dcG3Rx7x0b459Oc6qY1pbOxbDfkVpmKIDXK8uuOrn0waWs5KdOFmXRh1anZG+lzzU3kuTKASBIEAAAAAAAAAOPs568Xv5e3G7wTVppnZ01zz1nhisx07U686jn3pVZ3068eK/cl4nYs469o8+e6pyT2ScU9VZqmaOXSY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')" }}><div className="quoteCard">
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
          </div></div>
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
