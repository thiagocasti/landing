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
      src: 'public/portrait-man-laughing.jpg',
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

const footerColumns = [
  {
    title: 'Studio',
    links: [
      { label: 'Creative Intensives', href: '#servicios' },
      { label: 'Systems Lab', href: '#gallery' },
      { label: 'Press Kit', href: '#opiniones' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Journal', href: '#journal' },
      { label: 'Guides', href: '#preguntas' },
      { label: 'Speaking', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'hello@modernstudio.com', href: 'mailto:hello@modernstudio.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Pinterest', href: 'https://pinterest.com' },
    ],
  },
]

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
        <form
          class="contact-form"
          action="https://formsubmit.co/"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Nuevo mensaje desde la landing" />
          <input type="hidden" name="_captcha" value="false" />
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
          <p class="eyebrow">Eden Strader Studio</p>
          <h3>Creamos una marca en cada uno de nuestros clientes que nos hace inolvidables.</h3>
        </div>
        <div class="footer-menu">
          ${footerColumns
            .map(
              (column) => `
                <div class="footer-column">
                  <h4>${column.title}</h4>
                  <ul>
                    ${column.links
                      .map((link) => `<li><a href="${link.href}">${link.label}</a></li>`)
                      .join('')}
                  </ul>
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${year} Eden Strader Studio. Built for the modern creative.</p>
        <a href="mailto:hello@modernstudio.com" class="text-link">hello@modernstudio.com</a>
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
