/* ============================================
   App.js — Nav, Scroll Reveals, Counters, Typing
   ============================================ */
(function () {
  // ────────────────────────────────────────────
  // 0. CURSOR GLOW (desktop only)
  // ────────────────────────────────────────────
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow && !('ontouchstart' in window)) {
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
      cursorGlow.classList.add('active');
    }, { passive: true });
    document.addEventListener('mouseleave', () => {
      cursorGlow.classList.remove('active');
    });
  }

  // ────────────────────────────────────────────
  // 1. NAVIGATION
  // ────────────────────────────────────────────
  const nav = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  // Scroll — add .scrolled class
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ────────────────────────────────────────────
  // 2. SCROLL REVEAL (IntersectionObserver)
  // ────────────────────────────────────────────
  function initRevealObserver() {
    const revealElements = document.querySelectorAll('.reveal:not(.visible)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // Expose globally so publications.js can re-trigger after rendering
  window.initRevealObserver = initRevealObserver;
  initRevealObserver();

  // ────────────────────────────────────────────
  // 3. STAT COUNTER ANIMATION
  // ────────────────────────────────────────────
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    counters.forEach(counter => {
      if (counter.dataset.animated === 'true') return;
      counter.dataset.animated = 'true';

      const target = parseInt(counter.dataset.target, 10);
      const duration = 1500; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        counter.textContent = current + (target > 3 ? '+' : '');
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + (target > 3 ? '+' : '');
        }
      }

      requestAnimationFrame(update);
    });
  }

  // Trigger counters when stats section is in view
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  // ────────────────────────────────────────────
  // 4. TYPEWRITER EFFECT
  // ────────────────────────────────────────────
  const typedElement = document.getElementById('typed-text');
  if (typedElement) {
    const phrases = [
      'AI R&D Lead @ Realtime Robotics 🤖',
      'Reviewer @ ACL & CVPR Workshop 📝',
      'Computer Vision Enthusiast 🔭',
      'NLP & Multi-modal Learning 🧠',
      'Student @ VNUHCM 🎓',
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        charIndex--;
        typingSpeed = 30;
      } else {
        charIndex++;
        typingSpeed = 60;
      }

      typedElement.textContent = currentPhrase.substring(0, charIndex);

      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400; // Pause before next phrase
      }

      setTimeout(type, typingSpeed);
    }

    // Start typing after hero animation
    setTimeout(type, 1200);
  }

  // ────────────────────────────────────────────
  // 5. SMOOTH ANCHOR SCROLL
  // ────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
