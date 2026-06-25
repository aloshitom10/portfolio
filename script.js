// ── Init AOS ──
AOS.init({ duration: 650, once: true, offset: 80 });

// ── Year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Navbar scroll ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ── Close mobile menu on link click ──
document.querySelectorAll('.nav-link, .btn-talk').forEach(link => {
  link.addEventListener('click', () => {
    const collapse = document.getElementById('navMenu');
    if (collapse.classList.contains('show')) {
      bootstrap.Collapse.getInstance(collapse)?.hide();
    }
  });
});

// ── Data ──
const SKILLS = [
  { name: 'Python',       category: 'Language',  icon: 'bi-filetype-py' },
  { name: 'Django',       category: 'Framework', icon: 'bi-layers-fill' },
  { name: 'JavaScript',   category: 'Language',  icon: 'bi-filetype-js' },
  { name: 'HTML & CSS',   category: 'Frontend',  icon: 'bi-filetype-html' },
  { name: 'Bootstrap',    category: 'Frontend',  icon: 'bi-bootstrap-fill' },
  { name: 'Java',         category: 'Language',  icon: 'bi-cup-hot-fill' },
  { name: 'SQL / SQLite', category: 'Database',  icon: 'bi-database-fill' },
  { name: 'Git',          category: 'Tools',     icon: 'bi-git' },
];

const FEATURED = [
  {
    title: 'ProjectFlow',
    desc:  'A modern Django-based project management system for organizing projects, tracking tasks, managing deadlines, and improving productivity.',
    tech:  ['Django', 'Python', 'SQLite', 'HTML/CSS'],
    live:  'https://projectflow-cpo2.onrender.com/',
    gh:    'https://github.com/aloshitom10/projectflow',
  },
  {
    title: 'Notes Management App',
    desc:  'Full-stack application for creating, editing, searching, and organizing personal notes by category.',
    tech:  ['Django', 'Python', 'SQLite', 'HTML/CSS'],
    live:  'https://notes-app-1-luwa.onrender.com',
    gh:    'https://github.com/aloshitom10/Notes-Management-App',
  },
];

const OTHER = [
  {
    title: 'Login Auth Page',
    desc:  'Secure authentication flow with user registration, login, logout, and a protected dashboard.',
    tech:  ['Django', 'Python', 'SQLite'],
    live:  null,
    gh:    'https://github.com/aloshitom10/login-auth_page',
  },
  {
    title: 'Todo App',
    desc:  'Task management app supporting full CRUD operations with deadline tracking.',
    tech:  ['Django', 'Python', 'SQLite'],
    live:  null,
    gh:    'https://github.com/aloshitom10/todo-app',
  },
  {
    title: 'Frontend Showcase',
    desc:  'Responsive frontend demonstrating modern CSS layouts and semantic HTML.',
    tech:  ['HTML', 'CSS'],
    live:  'https://html-css-task-zeta.vercel.app',
    gh:    'https://github.com/aloshitom10/html-css-task',
  },
  {
    title: 'Car Rental System',
    desc:  'Object-oriented application for managing vehicle rentals, inventory, and customer records.',
    tech:  ['Java'],
    live:  null,
    gh:    'https://github.com/aloshitom10/car-rental-system',
  },
  {
    title: 'SJCET Complaint Portal',
    desc:  'Campus utility tool allowing students to submit and track facility complaints.',
    tech:  ['JavaScript'],
    live:  null,
    gh:    'https://github.com/aloshitom10/sjcet-complaint-portal',
  },
];

// ── Render skills ──
const skillsGrid = document.getElementById('skills-grid');
SKILLS.forEach((s, i) => {
  const col = document.createElement('div');
  col.className = 'col';
  col.setAttribute('data-aos', 'fade-up');
  col.setAttribute('data-aos-delay', String(i * 60));
  col.innerHTML = `
    <div class="skill-card">
      <div class="skill-icon"><i class="bi ${s.icon}"></i></div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-cat">${s.category}</div>
    </div>`;
  skillsGrid.appendChild(col);
});

// ── Render featured projects ──
const featuredGrid = document.getElementById('featured-projects');
FEATURED.forEach((p, i) => {
  const tags = p.tech.map(t => `<span class="project-tag">${t}</span>`).join('');
  const liveLink = p.live
    ? `<a href="${p.live}" target="_blank" rel="noreferrer" class="project-link primary"><i class="bi bi-box-arrow-up-right"></i> Live Demo</a>`
    : '';
  const col = document.createElement('div');
  col.className = 'col-md-6';
  col.setAttribute('data-aos', 'fade-up');
  col.setAttribute('data-aos-delay', String(i * 100));
  col.innerHTML = `
    <div class="project-card">
      <div class="project-tags">${tags}</div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-links">
        ${liveLink}
        <a href="${p.gh}" target="_blank" rel="noreferrer" class="project-link">
          <i class="bi bi-github"></i> Source
        </a>
      </div>
    </div>`;
  featuredGrid.appendChild(col);
});

// ── Render other projects ──
const otherGrid = document.getElementById('other-projects');
OTHER.forEach((p, i) => {
  const tags = p.tech.map(t => `<span class="tag-sm">${t}</span>`).join('');
  const liveLink = p.live
    ? `<a href="${p.live}" target="_blank" rel="noreferrer" class="project-link primary" aria-label="Live Demo"><i class="bi bi-box-arrow-up-right"></i></a>`
    : '';
  const col = document.createElement('div');
  col.setAttribute('data-aos', 'fade-up');
  col.setAttribute('data-aos-delay', String(i * 80));
  col.innerHTML = `
    <div class="project-card-sm">
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="d-flex gap-2 flex-wrap mb-4">${tags}</div>
      <div class="project-links mt-auto">
        ${liveLink}
        <a href="${p.gh}" target="_blank" rel="noreferrer" class="project-link">
          <i class="bi bi-github"></i> GitHub
        </a>
      </div>
    </div>`;
  otherGrid.appendChild(col);
});