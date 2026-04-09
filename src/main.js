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
    name: 'askBOX',
    category: 'Web App',
    icon: 'A',
    summary: 'An app built to make requests to the shared private cloud server, BOX. Streams are made via the PLEX app.',
    details:'A supporting web application for users to make requests for movies/series tiles. Makes use of the OMDB API to query search results against the IMDB database.',
    stack: ['React JS', 'Fast API', 'Google Firebase', 'Vercel'],
    url: 'https://askthebox.vercel.app/',
    githubUrl: 'https://github.com/zainmk/askBOX',
    imageUrl: 'askbox.jpg',
  },
  {
    name: 'tetris',
    category: 'Game',
    icon: 'T',
    summary: '',
    details:'Just a regular simple game of tetris. I wanted to create the game with as minimal "instructions" as possible and even to the point where there is no "character-based" text. The gaemplay is intuitive and can be picked up on - and the early losses of learning the game are inconsiquential to the performance later when learned.',
    stack: ['React JS', 'Vercel'],
    url: 'https://tetris-box.vercel.app',
    githubUrl: 'https://github.com/zainmk/tetris',
    imageUrl: 'tetris.jpg',
  },
  {
    name: 'mint',
    category: 'Web App',
    icon: 'M',
    summary: '',
    details: 'A simple web app to track financial credit card statements via .csv file imports. The app works entirely in your browser and as such, allows the user full control of their data. The .csv files the user collects via their financial institutions, then "tagged" accordingly by the user. At any point, the "state" of the app can be "saved" by the user (exported via .csv) and then imported directly again later. The data is otherwise stored via IndexedDB for persistent storage across sessions.',
    stack: ['React JS', 'IndexedDB', 'Vercel'],
    url: 'https://mint---box.vercel.app',
    githubUrl: 'https://github.com/zainmk/mint',
    imageUrl: 'mint.jpg',
  },
  {
    name: 'pyTicTacToe',
    category: 'Game',
    icon: 'P',
    summary: '',
    details: 'A tkinter GUI based Python TicTacToe game. Goal of this project was to implement a UI via Python as well as experiment with the minimax algorithm. Within game theory, it allows a computer to compute the current "win" state of the game and work backwards in an effort to maximize this value. The algorithm is used by the "Computer" when the hard difficulty is selected and the computer is therefore unbeatable.',
    stack: ['Python', 'tkinter', 'minimax'],
    url: 'https://github.com/zainmk/pyTicTacToe',
    githubUrl: 'https://github.com/zainmk/pyTicTacToe',
    imageUrl: 'pytictactoe.JPG',
  },
  {
    name: 'localneighborhoodCNN',
    category: 'Neural Networks',
    icon: 'NN',
    summary: '',
    details: 'A Java based implementation of a convolutional neural network. The goal of this project was to implement a CNN from scratch in Java. The CNN is designed to take in 2D data and perform convolution operations on it, allowing it to learn spatial hierarchies of features. The implementation includes layers such as convolutional layers, pooling layers, and fully connected layers. The network is trained using backpropagation and can be used for tasks such as image classification.',
    stack: ['Java', 'CNN'],
    url: 'https://github.com/zainmk/localneighborhoodCNN',
    githubUrl: 'https://github.com/zainmk/localneighborhoodCNN',
    imageUrl: 'localCNN.png',
  },
]

const projectMarkup = projectItems
  .map(
    (project, index) => `
    <article class="project-panel" data-project-index="${index}">
      <div class="app-top">
        <div class="app-icon" aria-hidden="true">${project.icon}</div>
        <div>
          <h3>${project.name}</h3>
          <p class="app-category">${project.category}</p>
        </div>
      </div>
      
      <img class="project-image" src="${project.imageUrl}" alt="${project.name} screenshot">
      
      <div class="project-expanded">
        <p>${project.details}</p>
        <div class="project-links">
          <a href="${project.url}" target="_blank" rel="noreferrer" title="View Live Site">
            <img src="/chain.ico" alt="Live Site" width="24" height="24">
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noreferrer" title="View on GitHub">
            <img src="/github.ico" alt="GitHub" width="24" height="24">
          </a>
        </div>
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
          <p>Hover over the projects to expand and view details.</p>
        </div>
        <div class=
        "project-stack">${projectMarkup}</div>
      </section>
      <hr style="margin:50px" />
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

  panel.addEventListener('click', () => {
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setActiveProject(index)
  })
})