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
    name: 'sensoRAG',
    category: 'Web App',
    icon: 'SR',
    details: 'A web app demonstrating how RAG (Retrieval-Augmented Generation) can assist with transducer selection regarding a mechatronic "ask". The user can upload their own sensor data sheets, or preload the samples, and query to analyze the technical specs and explain via LLM in "natural language".',
    stack: ['Python', 'HTML', 'Flask', 'ChromaDB', 'FastEmbed'],
    githubURL: 'https://github.com/zainmk/SensoRAG',
    imageUrl: 'sensorag.png',
    url: 'https://senso-rag.vercel.app/'
  },
  {
    name: 'unicoder',
    category: 'Chrome Extension',
    icon: 'UN',
    details: 'Published Chrome extension allowing for unicode or "alias" text replacement via prompting with "/" and hitting the "Tab" key. Acccepts unicode in hex and custom aliases for multiple character replacement, all in browser. Completely local - no networks calls.',
    stack: ['HTML', 'CSS', 'JS', 'Chrome Extension'],
    githubURL: 'https://github.com/zainmk/unicoder',
    imageUrl: 'unicoder.png',
    url: 'https://chromewebstore.google.com/detail/unicoder/lnjibkhlchplofnkdfpfanahbcnifddg'
  },
  {
    name: 'addendar',
    category: 'Chrome Extension',
    icon: 'AD',
    details: 'A chrome extension that uses AI to parse screenshots/text-based information to quickly add to their Google Calendar. A conveniently quick user control, via a right click (context menu) directly on any highlighted text or image.',
    stack: ['HTML', 'CSS', 'JS', 'Chrome Extension', 'Anthropic API'],
    githubURL: 'https://github.com/zainmk/addendar',
    imageUrl: 'addendar.png',
  },
  {
    name: 'vectorize',
    category: 'Web App',
    icon: 'VE',
    details: 'A web app that allows for semantic ("contextual") and keyword (BM25) based search on a limited dataset of 30 movies. The app shows how "vectorizing" data can allow for these other kinds of search methods and be more effective.',
    stack: ['Python', 'HTML', 'FastAPI', 'ChromaDB', 'model2vec'],
    githubURL: 'https://github.com/zainmk/vectorize',
    imageUrl: 'vectorize.png',
    url: 'https://vector1ze.vercel.app/'
  },
  {
    name: 'emaily',
    category: 'Scripts (CRON)',
    icon: 'EM',
    details: 'A script that calls on relevant data via various APIs and puts it all together into a "dashboard" that is emailed on a routinely basis. Requires authentication/integration with Google Calendar as well as Claude Code API to summarize all the data collected and generate dynamic custom content',
    stack: ['Python', 'Github Actions'],
    githubURL: 'https://github.com/zainmk/emaily',
    imageUrl: 'emaily.png',
  },
  {
    name: 'askBOX',
    category: 'Web App',
    icon: 'AS',
    details:'A web application for users to make requests for movies/series titles (hosted via plex server). Allows .ics export for episode release dates.',
    stack: ['React JS', 'Fast API', 'Google Firebase', 'Vercel'],
    githubURL: 'https://github.com/zainmk/askthebox',
    imageUrl: 'askbox.jpg',
    url: 'https://askthebox.vercel.app/'
  },
  {
    name: 'tetris',
    category: 'Game',
    icon: 'TE',
    details:'Just a regular simple game of tetris.',
    stack: ['React JS', 'Vercel'],
    githubURL: 'https://github.com/zainmk/tetris',
    imageUrl: 'tetris.jpg',
    url: 'https://tetr1s.vercel.app/'
  },
  {
    name: 'mint',
    category: 'Web App',
    icon: 'MI',
    details: 'Web app to track financial credit card statements via .csv file imports. Records are then "tagged" accordingly by the user via custom assigned hotkeys. The "state" of the app is saved via an importable/exportable .csv file - mimicking a video game save file. Authentication is therefore tied to this file\'s ownership. The data is otherwise stored via IndexedDB for persistent storage across sessions.',
    stack: ['React JS', 'IndexedDB', 'Vercel'],
    githubURL: 'https://github.com/zainmk/mint',
    imageUrl: 'mint.jpg',
    url: 'https://m1nt.vercel.app/'
  },
  {
    name: 'pyTicTacToe',
    category: 'Game',
    icon: 'PT',
    details: 'A tkinter GUI based Python TicTacToe game. Goal of this project was to implement a UI via Python as well as experiment with the minimax algorithm. It allows a computer to compute the current "win" state of the game and work backwards in an effort to maximize this value. The algorithm is used by the "Computer" when the hard difficulty is selected; the computer becomes unbeatable.',
    stack: ['Python', 'tkinter', 'minimax'],
    githubURL: 'https://github.com/zainmk/pyTicTacToe',
    imageUrl: 'pytictactoe.JPG',
  },
  {
    name: 'localneighborhoodCNN',
    category: 'Neural Networks',
    icon: 'LN',
    details: 'A Java based implementation of a convolutional neural network. The goal of this project was to implement a CNN from scratch in Java. The CNN is designed to take in 2D data and perform convolution operations on it, allowing it to learn spatial hierarchies of features. The implementation includes layers such as convolutional layers, pooling layers, and fully connected layers. The network is trained using backpropagation and can be used for tasks such as image classification.',
    stack: ['Java', 'CNN'],
    githubURL: 'https://github.com/zainmk/localneighborhoodCNN',
    imageUrl: 'localCNN.png',
  },
]

const githubIcon = `<svg class="github-icon" viewBox="0 0 16 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`

const projectMarkup = projectItems
  .map(
    (project, index) => `
    <article class="project-panel${project.url ? ' project-panel--clickable' : ''}" data-project-index="${index}">
      <div class="app-top">
        <div class="app-icon" aria-hidden="true">${project.icon}</div>
        <div>
          <h3>${project.name}</h3>
          <p class="app-category">${project.category}</p>
        </div>
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
            Hello! Welcome to my porfolio page. 
            Here is where I try to showcase any major projects of significant interest to me and a little bit more about myself.
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
        <h2>PROOF I AM HUMAN ∎ </h2>
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