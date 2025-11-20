import './style.css'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#opiniones' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contact' },
  { label: 'Footer', href: '#footer' },
]

const valueProps = [
  {
    symbol: '*',
    title: 'CONVERTIMOS VISITAS EN CLIENTES',
    copy: 'Creamos landings optimizadas para captar leads, aumentar ventas y guiar al usuario hacia la acción ideal.',
  },
  {
    symbol: '*',
    title: 'DISEÑO CLARO, MODERNO Y ENFOCADO EN RESULTADOS',
    copy: 'Combinamos estética, estrategia y copywriting para comunicar tu valor de forma simple, atractiva y efectiva.',
  },
  {
    symbol: '*',
    title: 'PROCESOS RÁPIDOS, ORDENADOS Y 100% PERSONALIZADOS',
    copy: 'Trabajamos con sistemas y flujos de trabajo que aceleran entregas y aseguran una experiencia fluida de inicio a fin.',
  },
]

const statementPanels = [
  {
    label: 'Testimonio Uno.',
    heading: 'Martín Escalante',
    copy: 'Antes de empezar el proyecto sentía que mi marca estaba estancada. Tenía ideas, pero no sabía cómo organizarlas ni comunicar mi valor. El proceso fue súper claro y humano: entendieron exactamente qué quería transmitir y lo transformaron en una identidad visual increíble. Hoy recibo mensajes de clientes diciendo ‘ahora sí te veo profesional’. Definitivamente fue un antes y un después para mi negocio.',
    avatar: {
      src: 'https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Creative strategist portrait',
    },
  },
  {
    label: 'Testimonio 2.',
    heading: 'Sofía Delgado',
    copy: 'Siempre tuve miles de proyectos dando vueltas, pero nada realmente conectado entre sí. Con la landing recién creada siento que, por primera vez, mi marca refleja quién soy: moderna, creativa y profesional. El equipo me ayudó a ordenar procesos, automatizar mensajes y diseñar un sitio que convierte sin sentirme abrumada. Mis consultas crecieron desde la primera semana.',
    avatar: {
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      alt: 'Operations lead portrait',
    },
  },
  {
    label: 'Testimonio tres.',
    heading: 'Lara Rivas',
    copy: 'Necesitaba una presentación digital que estuviera al nivel de mis servicios. El resultado superó mis expectativas: elegante, estratégica y enfocada en resultados. Ahora cada reunión empieza con un ‘me encantó tu landing’. Además, aumenté mi tasa de cierre porque la página comunica exactamente el valor que ofrezco. Sin dudas, una inversión que volvería a hacer.',
    avatar: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
      alt: 'Launch director portrait',
    },
  },
]

const galleryItems = [
  {
    alt: 'Minimal keyboard and mouse',
    src: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Landing-Page-Examples-1.png',
  },
  {
    alt: 'Desktop workstation setup',
    src: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Stripe-Landing-Page-Design-1.png',
  },
  {
    alt: 'Cozy creative studio corner',
    src: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Sign-Up-Landing-Page.png',
  },
  {
    alt: 'Laptop on modern desk',
    src: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/TransferWise-Landing-Page-Example.png',
  },
]

const preguntasFrecuentes = [
  {
    label: 'Nuetros metodos de pago',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lectus eu massa lacinia porttitor in eget felis.',
  },
  {
    label: 'Como trabajamos con nuestros clientes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut erat vitae elit viverra dapibus et vitae arcu.',
  },
]

const footerSocials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"
        ></path>
      </svg>
    `,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"
        ></path>
      </svg>
    `,
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"
        ></path>
      </svg>
    `,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
        ></path>
      </svg>
    `,
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"
        ></path>
      </svg>
    `,
  },
]

const contactEmail = 'hello@modernstudio.com'
const formSubmitEndpoint = 'https://formsubmit.co/thiagocasti123@gmail.com'
const formSuccessRedirect =
  typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : ''
const defaultFormSubject = 'Nuevo mensaje desde la landing'

const year = new Date().getFullYear()

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="top-bar">
      <div class="brand-cluster">
        <a class="brand" href="#home">
          <span class="brand-name">Eden Strader</span>
          <span class="brand-tagline">Creative Studio</span>
        </a>
        <button
          class="ghost-button"
          type="button"
          aria-label="Abrir menú de navegación"
          aria-expanded="false"
          aria-controls="site-nav"
        >
          ☰
        </button>
      </div>
      <nav class="primary-nav" id="site-nav">
        ${navLinks
          .map((link) => `<a href="${link.href}" class="nav-link">${link.label}</a>`)
          .join('')}
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="hero-media" role="img" aria-label="Creative portrait background"></div>
        <div class="hero-content">
          <p class="eyebrow">Creative Coaching Studio</p>
          <h1>Potenciá tu comunicación con una landing page</h1>
          <p class="hero-copy">
            El servicio web que hace que llegues a más personas en menos días
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#contact">Empieza tu proyecto aqui.</a>
          </div>
        </div>
      </section>

      <section class="value-grid" id="servicios">
        ${valueProps
          .map(
            (card) => `
              <article class="value-card">
                <span class="symbol">${card.symbol}</span>
                <h3>${card.title}</h3>
                <p>${card.copy}</p>
              </article>
            `,
          )
          .join('')}
      </section>

      <section class="gallery" id="gallery">
        <header class="gallery-headline">
          <p class="eyebrow">Galería</p>
          <h2>Algunos de nuestros trabajos</h2>
        </header>
        <div class="gallery-grid">
          ${galleryItems
            .map(
              (item) => `
                <figure class="gallery-card">
                  <button
                    type="button"
                    class="gallery-trigger"
                    data-src="${item.src}"
                    data-alt="${item.alt}"
                    aria-label="Ver ${item.alt}"
                  >
                    <img src="${item.src}" alt="${item.alt}" loading="lazy" />
                  </button>
                </figure>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="statement" id="opiniones">
        <div class="statement-content">
          <header>
            <p class="eyebrow">Testimonios</p>
            <h2>Opiniones de nuestros clientes.</h2>
          </header>
          <div class="statement-tabs">
            ${statementPanels
              .map(
                (panel, index) => `
                <article class="statement-panel">
                  <header>
                    <span class="panel-label">${panel.label}</span>
                    <span class="panel-index">${String(index + 1).padStart(2, '0')}</span>
                  </header>
                  ${
                    panel.avatar
                      ? `<img class="panel-avatar" src="${panel.avatar.src}" alt="${panel.avatar.alt}" loading="lazy" />`
                      : ''
                  }
                  <h3>${panel.heading}</h3>
                  <p>${panel.copy}</p>
                </article>
              `,
            )
              .join('')}
          </div>
        </div>
      </section>

      <section class="cta-strips" id="preguntas">
      <h2>Preguntas Frecuentes</h2>
        ${preguntasFrecuentes
          .map(
            (cta, index) => `
              <details class="cta-strip">
                <summary>
                  <span>${cta.label}</span>
                  <span class="cta-icon">${'→'}</span>
                </summary>
                <div class="cta-body">
                  <p>${cta.description}</p>
                </div>
              </details>
            `,
          )
          .join('')}
      </section>

      <section class="contact-panel" id="contact">
        <div class="contact-intro">
          <p class="eyebrow">Trabajemos juntos</p>
          <h2>Trabajemos juntos</h2>
          <p>
            Dejanos tu mensaje con lo que estás creando. Respondemos con una hoja de ruta que honra
            tu visión, respeta tu energía y alinea el proyecto con objetivos reales.
          </p>
          <p>
            Preferís hablar directo? Tocá el botón de WhatsApp y seguimos la conversación por ahí.
          </p>
        </div>
        <form class="contact-form" action="${formSubmitEndpoint}" method="POST">
          <input type="hidden" name="_subject" value="${defaultFormSubject}" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="${formSuccessRedirect}" />
          <label class="field">
            <span>Nombre</span>
            <input type="text" name="name" placeholder="Tu nombre completo" required />
          </label>
          <label class="field">
            <span>Email</span>
            <input type="email" name="email" placeholder="hola@tuestudio.com" required />
          </label>
          <label class="field">
            <span>Mensaje</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Contanos qué necesitás, tiempos y cualquier detalle clave."
              required
            ></textarea>
          </label>
          <button type="submit" class="button primary submit-button">Enviar</button>
        </form>
      </section>
    </main>

    <footer class="site-footer" id="footer">
      <div class="footer-top">
        <div class="footer-brand">
          <p class="footer-logo">Eden<span>Strader</span></p>
          <p class="footer-tagline">Creative Studio</p>
        </div>
        <div class="footer-socials">
          ${footerSocials
            .map(
              (network) => `
                <a
                  class="social-icon"
                  href="${network.href}"
                  target="_blank"
                  rel="noopener"
                  aria-label="${network.label}"
                >
                  ${network.icon}
                </a>
              `,
            )
            .join('')}
        </div>
        <div class="footer-contact">
          <p>Contactanos</p>
          <a href="mailto:${contactEmail}">${contactEmail}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Diseño y desarrollo por Puentestudio</p>
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
    <div class="gallery-lightbox" aria-hidden="true">
      <button class="lightbox-close" type="button" aria-label="Cerrar imagen">×</button>
      <img src="" alt="" />
    </div>
    <a
      class="floating-whatsapp"
      href="https://wa.me/5491166443729"
      target="_blank"
      rel="noopener"
      aria-label="Abrir chat de WhatsApp"
    >
      <img src="WhatsApp.svg" alt="WhatsApp" />
    </a>
  </div>
`

const navMenu = document.querySelector('.primary-nav')
const menuButton = document.querySelector('.ghost-button')

if (menuButton && navMenu) {
  const toggleNav = () => {
    const isOpen = navMenu.classList.toggle('nav-open')
    menuButton.setAttribute('aria-expanded', String(isOpen))
  }

  menuButton.addEventListener('click', toggleNav)

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('nav-open')) {
        toggleNav()
      }
    })
  })
}

const contactForm = document.querySelector('.contact-form')
const subjectField = contactForm?.querySelector('input[name="_subject"]')
const nameField = contactForm?.querySelector('input[name="name"]')

if (contactForm && subjectField && nameField) {
  contactForm.addEventListener('submit', () => {
    const trimmedName = nameField.value.trim()
    subjectField.value = trimmedName || defaultFormSubject
  })
}

const lightbox = document.querySelector('.gallery-lightbox')
const lightboxImage = lightbox?.querySelector('img')

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return
  lightbox.classList.remove('is-open')
  lightbox.setAttribute('aria-hidden', 'true')
  lightboxImage.src = ''
  lightboxImage.alt = ''
  document.body.classList.remove('no-scroll')
}

document.querySelectorAll('.gallery-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return
    lightboxImage.src = trigger.dataset.src || ''
    lightboxImage.alt = trigger.dataset.alt || ''
    lightbox.classList.add('is-open')
    lightbox.setAttribute('aria-hidden', 'false')
    document.body.classList.add('no-scroll')
  })
})

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target.classList.contains('lightbox-close')) {
    closeLightbox()
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox?.classList.contains('is-open')) {
    closeLightbox()
  }
})
