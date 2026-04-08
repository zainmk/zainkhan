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
    icon: 'ASK',
    summary: 'An app built to make requests to the shared private cloud server, BOX. Streams are made via the PLEX app.',
    details:
      'A supporting web application for users to make requests for movies/series tiles. Makes use of the OMDB API to query search results against the IMDB database.',
    stack: ['React JS', 'Fast API', 'Google Firebase', 'Vercel'],
    url: 'https://askthebox.vercel.app/',
    githubUrl: 'https://github.com/zainmk/askBOX',
    imageUrl: 'askbox.jpg',
  },
  {
    name: 'tetris',
    category: 'Game',
    icon: 'TET',
    summary: 'a very simple and minimalistic tetris game. purpose is that with minimal ui, can you play an entire game',
    details:
      'a simple game dedicated entirely to the frontend. No synchronized state required as the "game" entirely exists within the React "state".',
    stack: ['React', 'Vercel'],
    url: 'https://tetris-boxx.vercel.app',
    githubUrl: 'https://github.com/zainmk/tetris',
    imageUrl: 'tetris.jpg',
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
      <hr style="margin:30px" />
       <section id="about" class="about-strip top-about">
        <h2>About Me</h2>
        <p>
          some of my hobbies/interests include motorbikes, hiking, reading, philosophy, neuroscience, gaming, AI, etc...
        </p>
        <p>
          books/movies I'd recommend ; interstellar, inception (all the nolan's), iRobot
        </p>
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
  panel.addEventListener('click', () => {
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setActiveProject(index)
  })
})