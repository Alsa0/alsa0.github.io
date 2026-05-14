// ============================================
// MAIN.JS — Logique du portfolio
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  renderProjects("all");
  initFilters();
  initScrollAnimations();
  initScrollTop();
  initContactForm();
  initProjectModal();
  initTypingEffect();
});

// --- NAVBAR scroll effect ---
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const links = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    updateActiveLink(links);
  });
  updateActiveLink(links);
}

function updateActiveLink(links) {
  const sections = document.querySelectorAll(".section, .hero");
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 200) {
      current = s.getAttribute("id");
    }
  });
  links.forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
}

// --- MOBILE MENU ---
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    const spans = toggle.querySelectorAll("span");
    if (menu.classList.contains("open")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      const spans = toggle.querySelectorAll("span");
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    });
  });
}

// --- RENDER PROJECTS ---
function renderProjects(filter) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  grid.innerHTML = "";

  filtered.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.transitionDelay = index * 0.1 + "s";

    const icons = {
      reseaux: "🌐",
      cloud: "☁️",
      securite: "🔒",
      voip: "📞",
      dev: "💻",
    };
    const icon = icons[project.category] || "💻";

    const imageHTML = project.image
      ? `<img src="${project.image}" alt="${project.title}" />`
      : `<div class="project-image-placeholder cat-${project.category}">${icon}</div>`;

    card.innerHTML = `
      <div class="project-image">
        ${project.featured ? '<span class="project-featured">★ Featured</span>' : ""}
        ${imageHTML}
        <div class="project-overlay">
          <a href="${project.liveUrl}" target="_blank" title="Voir le site">🔗</a>
          <a href="${project.githubUrl}" target="_blank" title="Code source">💻</a>
        </div>
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.client ? `<div class="project-client">🏢 ${project.client}</div>` : ""}
        <div class="project-tech">
          ${project.technologies.map((t) => `<span>${t}</span>`).join("")}
        </div>
      </div>
    `;

    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openModal(project));

    grid.appendChild(card);

    // Animate in
    requestAnimationFrame(() => {
      setTimeout(() => card.classList.add("visible"), 50 + index * 100);
    });
  });
}

// --- FILTER BUTTONS ---
function initFilters() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;

  // Render filter buttons
  bar.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat.key === "all" ? " active" : "");
    btn.textContent = cat.label;
    btn.dataset.filter = cat.key;
    btn.addEventListener("click", () => {
      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(cat.key);
    });
    bar.appendChild(btn);
  });
}

// --- SCROLL ANIMATIONS ---
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// --- SCROLL TO TOP ---
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- CONTACT FORM ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector(".form-submit");
    const original = btn.textContent;
    btn.textContent = "✓ Message envoye !";
    btn.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = "";
      form.reset();
    }, 2500);
  });
}

// --- PROJECT MODAL ---
function initProjectModal() {
  const modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.className = 'project-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close">✕</button>
      <div class="modal-icon"></div>
      <h2 class="modal-title"></h2>
      <span class="modal-category"></span>
      <p class="modal-desc"></p>
      <div class="modal-tech"></div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(project) {
  const modal = document.getElementById('project-modal');
  const icons = { reseaux: '🌐', cloud: '☁️', securite: '🔒', voip: '📞', dev: '💻' };

  modal.querySelector('.modal-icon').textContent = icons[project.category] || '💻';
  modal.querySelector('.modal-title').textContent = project.title;
  modal.querySelector('.modal-category').textContent = project.category.toUpperCase();
  modal.querySelector('.modal-desc').innerHTML = project.details || project.description;
  modal.querySelector('.modal-tech').innerHTML = project.technologies
    .map(t => `<span>${t}</span>`).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// --- TYPING EFFECT ---
function initTypingEffect() {
  const roles = [
    "Ingénieur Réseaux & Infrastructures",
    "Ingénieur Systèmes",
    "Ingénieur Cloud & Virtualisation",
    "Designer & Créatif",
  ];

  const el = document.getElementById('typed-text');
  if (!el) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 60;
  const deletingSpeed = 30;
  const pauseEnd = 2000;
  const pauseStart = 400;

  function type() {
    const current = roles[roleIndex];

    if (!isDeleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, pauseEnd);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, pauseStart);
        return;
      }
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  type();
}
