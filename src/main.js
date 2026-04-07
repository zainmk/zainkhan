import './style.css'

const experienceItems = [
  {
    period: 'YYYY - Present',
    role: 'Your Role Title',
    company: 'Company Name',
    description:
      'Write 1-2 lines on your impact, responsibilities, and notable outcomes.',
    tech: ['Tech One', 'Tech Two', 'Tech Three'],
    link: '#',
  },
  {
    period: 'YYYY - YYYY',
    role: 'Previous Role',
    company: 'Company Name',
    description:
      'Describe the kinds of products you worked on and the value you delivered.',
    tech: ['Tech One', 'Tech Two', 'Tech Three'],
    link: '#',
  },
]

const projectItems = [
  {
    name: 'Project Name',
    summary:
      'Short project summary explaining what it does and why it is useful.',
    stack: ['JavaScript', 'CSS', 'API'],
    url: '#',
  },
  {
    name: 'Project Name',
    summary:
      'Another project summary. Keep this concise and focused on outcomes.',
    stack: ['React', 'Node.js', 'MongoDB'],
    url: '#',
  },
]

const experienceMarkup = experienceItems
  .map(
    (item) => `
    <article class="card">
      <p class="meta">${item.period}</p>
      <h3>${item.role} · ${item.company}</h3>
      <p>${item.description}</p>
      <ul class="tag-list">
        ${item.tech.map((t) => `<li>${t}</li>`).join('')}
      </ul>
      <a href="${item.link}" target="_blank" rel="noreferrer">Role details</a>
    </article>
  `
  )
  .join('')

const projectMarkup = projectItems
  .map(
    (project) => `
    <article class="card">
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <ul class="tag-list">
        ${project.stack.map((s) => `<li>${s}</li>`).join('')}
      </ul>
      <a href="${project.url}" target="_blank" rel="noreferrer">View project</a>
    </article>
  `
  )
  .join('')

document.querySelector('#app').innerHTML = `
  <div class="layout">
    <aside class="intro">
      <p class="eyebrow">Hello, I am</p>
      <h1>Your Name</h1>
      <h2>Frontend Developer</h2>
      <p class="intro-copy">
        I build thoughtful digital experiences. Replace this with your own short
        bio and the type of work you want to be hired for.
      </p>
      <nav class="section-nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="socials">
        <a href="#" target="_blank" rel="noreferrer">GitHub</a>
        <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noreferrer">Email</a>
      </div>
    </aside>

    <main class="content">
      <section id="about">
        <h2>About</h2>
        <p>
          Add your story here. Share what you are great at, what kinds of teams
          you have worked with, and what motivates your work.
        </p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div class="card-grid">${experienceMarkup}</div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div class="card-grid">${projectMarkup}</div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Want to collaborate? Replace this with your preferred contact line.
        </p>
        <a class="contact-link" href="mailto:you@example.com">you@example.com</a>
      </section>
    </main>
  </div>
`