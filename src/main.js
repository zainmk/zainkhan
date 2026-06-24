import './style.css'
import profileImage from './assets/profilepic.jpg'

import profile2 from './assets/about/2.jpg'
import profile3 from './assets/about/3.jpg'
import profile4 from './assets/about/4.jpg'
import profile5 from './assets/about/5.jpg'
import profile6 from './assets/about/6.jpg'
import profile7 from './assets/about/7.jpg'


// 'ABOUT ME' IMAGESs
const aboutGalleryImages = [
  { src: profile2, alt: 'Profile Image 2' },
  { src: profile3, alt: 'Profile Image 3' },
  { src: profile4, alt: 'Profile Image 4' },
  { src: profile5, alt: 'Profile Image 5' },
  { src: profile6, alt: 'Profile Image 6' },
  { src: profile7, alt: 'Profile Image 7' },

]

const systemsProjects = [
  {
    name: 'KalmanNET',
    icon: 'KN',
    featured: true,
    details: 'A 3D drone state estimation simulation implementing the KalmanNET architecture — where a neural network dynamically learns the process noise covariance matrix (Q) rather than requiring it to be hand-tuned. Fuses data from four sensor modalities (IMU, GPS, barometer, magnetometer) and renders the estimated trajectory against the true simulated path in real time, making filter convergence and correction behaviour directly observable.',
    stack: ['Python', 'Flask', 'Kalman Filter', 'KalmanNET', 'Sensor Fusion', 'State Estimation', 'Edge AI'],
    githubURL: 'https://github.com/zainmk/kalmanNET',
    imageUrl: 'kalmanNET.png',
  },
  {
    name: 'localneighborhoodCNN',
    icon: 'LN',
    details: 'A convolutional neural network built from scratch in Java, with no ML frameworks. Implements the full forward pass — convolutional layers, pooling, and fully-connected classification — and trains via manually coded backpropagation. Every weight update, gradient calculation, and layer operation is written explicitly, stripping away abstraction to build a first-principles understanding of how CNNs learn spatial features.',
    stack: ['Java', 'CNN', 'Neural Networks', 'Backpropagation', 'Machine Learning', 'Model Architecture', 'Edge Inference'],
    githubURL: 'https://github.com/zainmk/localneighborhoodCNN',
    imageUrl: 'localCNN.png',
  },
  {
    name: 'sensoRAG',
    icon: 'SR',
    details: 'An AI-assisted tool for mechatronic system design that reduces the manual effort of transducer selection. Engineers upload sensor datasheets (or preload samples), then query in natural language — Claude retrieves and reasons over the relevant chunks, surfacing operating ranges, specs, and trade-offs in plain language. Built on a RAG pipeline with ChromaDB for vector storage and FastEmbed for embeddings.',
    stack: ['Python', 'Flask', 'RAG', 'Claude API', 'ChromaDB', 'Sensor Systems', 'Embedded Systems'],
    githubURL: 'https://github.com/zainmk/SensoRAG',
    imageUrl: 'sensorag.png',
    url: 'https://senso-rag.vercel.app/'
  },
  {
    name: 'vectorize',
    icon: 'VE',
    details: 'A web app that runs semantic (vector cosine similarity) and keyword (BM25) search side-by-side on the same query against a 30-movie dataset. Demonstrates concretely where each method wins: semantic search handles contextual and paraphrased queries; BM25 wins on exact-term matches. Built to practically understand how embedding models encode meaning and where vector retrieval outperforms traditional search.',
    stack: ['Python', 'FastAPI', 'Vector Embeddings', 'BM25', 'ChromaDB', 'NLP'],
    githubURL: 'https://github.com/zainmk/vectorize',
    imageUrl: 'vectorize.png',
    url: 'https://vector1ze.vercel.app/'
  },
  {
    name: 'pyTicTacToe',
    icon: 'PT',
    details: 'A Python TicTacToe game with a tkinter GUI, built to implement and understand the minimax algorithm. On hard difficulty, the AI exhaustively evaluates every possible future game state — scoring terminal states by win, loss, or draw — and selects the move that maximises its guaranteed outcome regardless of the opponent\'s play, making it theoretically unbeatable.',
    stack: ['Python', 'tkinter', 'Minimax', 'Adversarial Search', 'GUI'],
    githubURL: 'https://github.com/zainmk/pyTicTacToe',
    imageUrl: 'pytictactoe.JPG',
  },
]

const softwareProjects = [
  {
    name: 'autoadgen',
    icon: 'AG',
    details: 'A weekly automated pipeline that generates contextual banner ads grounded in real Shopify inventory and live pricing — not generic copy. Claude writes three ad concepts per run (constrained against invented prices), Playwright renders them into publication-ready PNGs composited with Pexels photography and current product data, and a GitHub Environments approval gate runs before anything publishes. Replaces ~4–7 hrs/week of manual design work at ~$0.02–$0.05/run.',
    stack: ['Python', 'GitHub Actions', 'Claude API', 'Shopify GraphQL API', 'Playwright', 'Pexels API', 'Automation'],
    githubURL: 'https://github.com/zainmk/autoadgen',
    imageUrl: 'autoadgen.png',
  },
  {
    name: 'mint',
    icon: 'MI',
    featured: true,
    details: 'A personal finance tracker that inverts conventional web architecture — the user\'s machine is the database. Bank transaction CSVs are imported directly, tagged via custom-assigned hotkeys, and visualised through spending charts and calendar heatmaps. State is managed through a dual-layer strategy: a human-readable mint-data.json written to your filesystem via the File System Access API, backed by IndexedDB for instant in-browser loads. No accounts, no backend, no cloud — and since the save folder is user-selected, pointing it at a NAS mounted as a network drive gives private cloud access across devices without involving any third-party service.',
    stack: ['React 19', 'File System Access API', 'IndexedDB', 'Full Stack', 'Local-First'],
    githubURL: 'https://github.com/zainmk/mint',
    imageUrl: 'mint.png',
    url: 'https://m1nt.vercel.app/'
  },
  {
    name: 'addendar',
    icon: 'AD',
    details: 'A Chrome extension that uses Claude to parse screenshots or highlighted text and extract structured event details — title, date, and time — then adds the event directly to Google Calendar. Triggered via right-click context menu on any image or selected text. The structured extraction step avoids the ambiguity of passing raw unformatted content directly to the Calendar API.',
    stack: ['JavaScript', 'Chrome Extension', 'Claude API', 'LLM', 'Google Calendar API'],
    githubURL: 'https://github.com/zainmk/addendar',
    imageUrl: 'addendar.png',
  },
  {
    name: 'emaily',
    icon: 'EM',
    details: 'An automated personal briefing pipeline that aggregates data from OpenWeatherMap, the NASA API, and Gmail — then uses an LLM to synthesise it into a formatted daily digest delivered by email on a scheduled CRON job via GitHub Actions. Completely hands-off after setup: the pipeline handles authentication, API calls, LLM summarisation, and delivery autonomously.',
    stack: ['Python', 'GitHub Actions', 'OpenWeatherMap API', 'NASA API', 'Gmail API', 'LLM'],
    githubURL: 'https://github.com/zainmk/emaily',
    imageUrl: 'emaily.png',
  },
  {
    name: 'askBOX',
    icon: 'AS',
    details: 'A web app in active use for submitting and tracking movie and series requests against a self-hosted Plex server. Titles are validated against the IMDB database via the OMDB API before submission, preventing duplicates and bad entries. Supports .ics calendar export for upcoming episode release dates. Built with a React frontend, FastAPI backend, and Firebase for real-time state sync.',
    stack: ['React', 'FastAPI', 'Firebase', 'OMDB API', 'REST API'],
    githubURL: 'https://github.com/zainmk/askthebox',
    imageUrl: 'askbox.jpg',
    url: 'https://askthebox.vercel.app/'
  },
  {
    name: 'unicoder',
    icon: 'UN',
    details: 'A published Chrome extension for fast in-browser unicode and text alias expansion. Type "/" to trigger, then Tab to replace — supports hex unicode input and multi-character string aliases configured entirely in-browser. Completely local: no network calls, no permissions beyond the active tab, no data collection.',
    stack: ['JavaScript', 'Chrome Extension', 'Browser APIs', 'Published'],
    githubURL: 'https://github.com/zainmk/unicoder',
    imageUrl: 'unicoder.png',
    url: 'https://chromewebstore.google.com/detail/unicoder/lnjibkhlchplofnkdfpfanahbcnifddg'
  },
  {
    name: 'tetris',
    icon: 'TE',
    details: 'Classic Tetris in React — piece generation, rotation, collision detection, line clearing, and progressive speed scaling.',
    stack: ['React', 'Game Development', 'JavaScript'],
    githubURL: 'https://github.com/zainmk/tetris',
    imageUrl: 'tetris.jpg',
    url: 'https://tetr1s.vercel.app/'
  },
]

const allProjects = [...systemsProjects, ...softwareProjects]

const githubIcon = `<svg class="github-icon" viewBox="0 0 16 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`

function renderCard(project, index) {
  const classes = [
    'project-panel',
    project.featured ? 'project-panel--featured' : '',
    (project.url || project.githubURL) ? 'project-panel--clickable' : '',
  ].filter(Boolean).join(' ')

  return `
    <article class="${classes}" data-project-index="${index}">
      <div class="app-top">
        <div class="app-icon" aria-hidden="true">${project.icon}</div>
        <div class="app-info">
          <h3>${project.name}</h3>
        </div>
        ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
        ${project.url ? '<span class="live-badge">Live</span>' : ''}
      </div>

      <img class="project-image" src="${project.imageUrl}" alt="${project.name} screenshot">

      <div class="project-expanded">
        <p>${project.details}</p>
        ${project.githubURL ? `<a class="github-link" href="${project.githubURL}" target="_blank" rel="noreferrer" aria-label="${project.name} on GitHub" title="View on GitHub">${githubIcon} GitHub</a>` : ''}
      </div>
      <ul class="tag-list">
        ${project.stack.map((tech) => `<li>${tech}</li>`).join('')}
      </ul>
    </article>
  `
}

const systemsMarkup = systemsProjects.map((p, i) => renderCard(p, i)).join('')
const softwareMarkup = softwareProjects.map((p, i) => renderCard(p, systemsProjects.length + i)).join('')

const aboutGalleryMarkup = aboutGalleryImages
  .map((image) => `<img src="${image.src}" alt="${image.alt}" class="about-gallery-image" />`)
  .join('')

document.querySelector('#app').innerHTML = `
<div class="store-layout">
    <header class="store-header">
      <div class="header-grid">
        <div>
          <p class="eyebrow">Hello World!</p>
          <h1>Zain Khan</h1>
          <p class="store-subtitle">
            Mechatronics Engineer | Software Developer | Human Being (!AI)
          </p>
          <p class="store-copy">
            Mechatronics Engineering graduate pivoting toward embedded AI and edge systems — specifically at the intersection
            of classical control theory (Kalman filtering, sensor fusion) and learned models that must operate within real hardware constraints.
            Interested in the engineering discipline of making intelligence fit the device: quantization, pruning, efficient architectures,
            and the tradeoffs that define deployment on systems that can't afford to be wrong or slow.
            The work here bridges both sides of that problem space.
          </p>
          <div class="socials">
            <a href="https://github.com/zainmk" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 16 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/zainmkhan" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:zain.mk@hotmail.com">
              <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Email
            </a>
            <a href="https://gctmaintenance.com/gct-team" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-2.18c.07-.44.18-.87.18-1.33C18 2.54 15.96.5 13.5.5c-1.32 0-2.5.56-3.36 1.46L9 3.17 7.86 1.96C7 1.06 5.82.5 4.5.5 2.04.5 0 2.54 0 4.67c0 .46.11.89.18 1.33H0v2h20v-2zm-9.5 0h-5C4.35 6 3 4.85 3 3.67 3 2.5 4.1 1.5 5.5 1.5c.83 0 1.6.4 2.13 1.03L9 3.83l1.5-1.5V6h0zm7 0h-5V3.33l1.37-1.3C14.4 1.4 15.17 1 16 1c1.4 0 2.5 1 2.5 2.17C18.5 4.35 18.65 6 17.5 6zM1 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9H1v11zm6-7h10v2H7v-2zm0 4h7v2H7v-2z"/></svg>
              GCT
            </a>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-5 6h8v2H8v-2zm0-4h8v2H8v-2zm0-4h3v2H8V7z"/></svg>
              Resume
            </a>
          </div>
        </div>
        <div class="profile-slot">
          <img src="${profileImage}" alt="Your profile photo" class="profile-image" />
        </div>
      </div>
    </header>

    <main>
      <section id="systems" class="projects-section">
        <div class="section-head">
          <h2>Systems &amp; ML</h2>
          <p>Engineering and machine learning work — control theory, neural networks, and intelligent systems.</p>
        </div>
        <div class="project-stack">${systemsMarkup}</div>
      </section>

      <div class="section-divider"></div>

      <section id="software" class="projects-section">
        <div class="section-head section-head--secondary">
          <h2>Software &amp; Tools</h2>
          <p>Full-stack and tooling work demonstrating software depth.</p>
        </div>
        <div class="project-stack software-stack">${softwareMarkup}</div>
      </section>
      <div class="section-divider"></div>
      <section id="about" class="about-strip top-about">
        <h2>About Me</h2>
        <div class="about-gallery" aria-label="About image slideshow">
          <div class="about-gallery-track">
            ${aboutGalleryMarkup}
            ${aboutGalleryMarkup}
          </div>
        </div>
      </section>
    </main>
  </div>
`

const projectPanels = Array.from(document.querySelectorAll('.project-panel'))

function setActiveProject(activeIndex) {
  projectPanels.forEach((panel, panelIndex) => {
    panel.classList.toggle('is-active', panelIndex === activeIndex)
  })
}

projectPanels.forEach((panel, index) => {
  panel.addEventListener('mouseenter', () => setActiveProject(index))
  panel.addEventListener('focusin', () => setActiveProject(index))

  panel.addEventListener('mouseleave', () => {
    if (!panel.matches(':focus-within')) {
      setActiveProject(undefined)
    }
  })

  panel.addEventListener('focusout', (event) => {
    const nextFocusedElement = event.relatedTarget
    if (!panel.contains(nextFocusedElement) && !panel.matches(':hover')) {
      setActiveProject(undefined)
    }
  })

  const githubLink = panel.querySelector('.github-link')
  if (githubLink) {
    githubLink.addEventListener('click', (event) => event.stopPropagation())
  }

  panel.addEventListener('click', () => {
    const target = allProjects[index].url || allProjects[index].githubURL
    if (target) window.open(target, '_blank')
  })
})