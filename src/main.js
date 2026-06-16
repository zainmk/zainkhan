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

const projectItems = [
  {
    name: 'localneighborhoodCNN',
    icon: 'LN',
    details: 'A from-scratch Java implementation of a convolutional neural network, built without any ML frameworks. Implements convolutional, pooling, and fully connected layers with forward and backward pass (backpropagation) manually. Demonstrates a grounded understanding of how spatial feature extraction and gradient descent work at the mathematical level.',
    stack: ['Java', 'CNN', 'Neural Networks', 'Backpropagation', 'Machine Learning'],
    githubURL: 'https://github.com/zainmk/localneighborhoodCNN',
    imageUrl: 'localCNN.png',
  },
  {
    name: 'sensoRAG',
    icon: 'SR',
    details: 'An AI-assisted tool for mechatronic system design — helps engineers select the right transducers by querying uploaded sensor datasheets using RAG (Retrieval-Augmented Generation). Surfaces relevant specs, operating ranges, and trade-offs in plain language, reducing the manual effort of cross-referencing datasheets during the design phase.',
    stack: ['Python', 'Flask', 'RAG', 'LLM', 'ChromaDB', 'Sensor Systems'],
    githubURL: 'https://github.com/zainmk/SensoRAG',
    imageUrl: 'sensorag.png',
    url: 'https://senso-rag.vercel.app/'
  },
  {
    name: 'addendar',
    icon: 'AD',
    details: 'A Chrome extension that uses an LLM to parse screenshots or highlighted text and extract event details to add directly to Google Calendar. Triggered via right-click context menu on any image or selected text — no copy-pasting required.',
    stack: ['JavaScript', 'Chrome Extension', 'Anthropic API', 'LLM', 'Computer Vision'],
    githubURL: 'https://github.com/zainmk/addendar',
    imageUrl: 'addendar.png',
  },
  {
    name: 'vectorize',
    icon: 'VE',
    details: 'A web app comparing semantic (vector) and keyword (BM25) search side-by-side on a movie dataset. Built to practically explore how embedding models encode meaning, and where each retrieval method outperforms the other — useful context for any system that needs intelligent search or retrieval.',
    stack: ['Python', 'FastAPI', 'Vector Embeddings', 'Semantic Search', 'ChromaDB', 'NLP'],
    githubURL: 'https://github.com/zainmk/vectorize',
    imageUrl: 'vectorize.png',
    url: 'https://vector1ze.vercel.app/'
  },
  {
    name: 'emaily',
    icon: 'EM',
    details: 'An automated daily briefing script that aggregates data from multiple APIs (calendar, weather, news) and uses an LLM to summarize and generate dynamic content, delivered via email on a scheduled CRON job through GitHub Actions. No manual intervention required after setup.',
    stack: ['Python', 'GitHub Actions', 'REST APIs', 'LLM', 'Automation', 'CI/CD'],
    githubURL: 'https://github.com/zainmk/emaily',
    imageUrl: 'emaily.png',
  },
  {
    name: 'mint',
    icon: 'MI',
    details: 'A browser-based financial tracker for credit card statements imported via .csv. Records are tagged using custom hotkeys; the full app state is exported and re-imported as a single .csv — functioning like a save file. All data stays in the browser via IndexedDB; no backend, no accounts.',
    stack: ['React', 'IndexedDB', 'Full Stack', 'Browser Storage', 'Data Management'],
    githubURL: 'https://github.com/zainmk/mint',
    imageUrl: 'mint.jpg',
    url: 'https://m1nt.vercel.app/'
  },
  {
    name: 'askBOX',
    icon: 'AS',
    details: 'A web app for submitting and tracking movie/series requests against a self-hosted Plex server. Validates titles against the IMDB database via the OMDB API and supports .ics export for upcoming episode release dates.',
    stack: ['React', 'FastAPI', 'Firebase', 'REST API', 'Full Stack'],
    githubURL: 'https://github.com/zainmk/askthebox',
    imageUrl: 'askbox.jpg',
    url: 'https://askthebox.vercel.app/'
  },
  {
    name: 'unicoder',
    icon: 'UN',
    details: 'Published Chrome extension for in-browser unicode and alias text expansion. Type "/" to trigger, hit Tab to replace — supports hex unicode input and multi-character aliases. Entirely local with no network calls.',
    stack: ['JavaScript', 'Chrome Extension', 'Browser APIs', 'Published'],
    githubURL: 'https://github.com/zainmk/unicoder',
    imageUrl: 'unicoder.png',
    url: 'https://chromewebstore.google.com/detail/unicoder/lnjibkhlchplofnkdfpfanahbcnifddg'
  },
  {
    name: 'pyTicTacToe',
    icon: 'PT',
    details: 'A Python TicTacToe game with a tkinter GUI, built to explore the minimax algorithm. On hard difficulty, the computer evaluates every possible game state recursively to maximize its outcome — making it unbeatable.',
    stack: ['Python', 'tkinter', 'Minimax', 'Game AI', 'GUI'],
    githubURL: 'https://github.com/zainmk/pyTicTacToe',
    imageUrl: 'pytictactoe.JPG',
  },
  {
    name: 'tetris',
    icon: 'TE',
    details: 'Classic Tetris, implemented in React.',
    stack: ['React', 'Game Development', 'JavaScript'],
    githubURL: 'https://github.com/zainmk/tetris',
    imageUrl: 'tetris.jpg',
    url: 'https://tetr1s.vercel.app/'
  },
]

const githubIcon = `<svg class="github-icon" viewBox="0 0 16 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`

const projectMarkup = projectItems
  .map(
    (project, index) => `
    <article class="project-panel${project.url ? ' project-panel--clickable' : ''}" data-project-index="${index}">
      <div class="app-top">
        <div class="app-icon" aria-hidden="true">${project.icon}</div>
        <div class="app-info">
          <h3>${project.name}</h3>
        </div>
        ${project.url ? '<span class="live-badge">Live</span>' : ''}
      </div>

      <img class="project-image" src="${project.imageUrl}" alt="${project.name} screenshot">

      <div class="project-expanded">
        <p>${project.details}${project.githubURL ? ` <a class="github-link" href="${project.githubURL}" target="_blank" rel="noreferrer" aria-label="${project.name} on GitHub" title="View on GitHub">${githubIcon}</a>` : ''}</p>
      </div>
      <ul class="tag-list">
        ${project.stack.map((tech) => `<li>${tech}</li>`).join('')}
      </ul>
    </article>
  `
  )
  .join('')

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
            Mechatronics Engineer actively transitioning toward roles at the intersection of hardware systems and intelligent software.
            My background spans control systems, embedded hardware, and mechatronic design — and I'm building on that foundation with
            a growing depth in software development, AI integration, and full-stack engineering.
            The projects here reflect that bridge: practical tools built with an engineer's mindset.
          </p>
          <div class="socials">
            <a href="https://github.com/zainmk" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/zainmkhan" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:zain.mk@hotmail.com">Email</a>
            <a href="https://gctmaintenance.com/gct-team" target="_blank" rel="noopener noreferrer">GCT</a>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div class="profile-slot">
          <img src="${profileImage}" alt="Your profile photo" class="profile-image" />
        </div>
      </div>
    </header>

    <main>
      <section id="projects" class="projects-section">
        <div class="section-head">
          <h2>Projects</h2>
          <p> Feel free to explore my projects ~ let me know of any dead links!</p>
        </div>
        <div class=
        "project-stack">${projectMarkup}</div>
      </section>
      <hr style="margin:50px" />
       <section id="about" class="about-strip top-about">
        <h2> ABOUT ME </h2>
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
    if (projectItems[index].url) {
      window.open(projectItems[index].url, '_blank')
    }
  })
})