/**
 * Navigation JavaScript - The Pole Room Mitcham
 * Handles sticky navigation and scroll spy
 */

(function() {
  'use strict';

  // ==================== SECTION NAVIGATION SCROLL SPY ====================

  const sectionNav = document.getElementById('sectionNav');
  const sectionLinks = document.querySelectorAll('.section-nav-link');
  const sections = [];

  // Build sections array from navigation links
  sectionLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) {
        sections.push({
          id: href.substring(1),
          element: section,
          link: link
        });
      }
    }
  });

  // Scroll spy function
  function updateActiveSection() {
    const scrollPosition = window.scrollY + 200; // Offset for headers

    let currentSection = null;

    sections.forEach(section => {
      const sectionTop = section.element.offsetTop;
      const sectionBottom = sectionTop + section.element.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section;
      }
    });

    // Update active link
    sectionLinks.forEach(link => link.classList.remove('active'));
    if (currentSection) {
      currentSection.link.classList.add('active');
      
      // Scroll the nav to show active link (for mobile)
      if (sectionNav) {
        const linkRect = currentSection.link.getBoundingClientRect();
        const navRect = sectionNav.getBoundingClientRect();
        
        if (linkRect.left < navRect.left || linkRect.right > navRect.right) {
          currentSection.link.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          });
        }
      }
    }
  }

  // Throttled scroll handler
  let scrollTimeout;
  function throttledScrollHandler() {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
      updateActiveSection();
      scrollTimeout = null;
    }, 100);
  }

  window.addEventListener('scroll', throttledScrollHandler, { passive: true });
  
  // Initial check
  updateActiveSection();

  // ==================== SECTION NAV STICKY STATE ====================

  const header = document.querySelector('.header');
  
  function updateStickyState() {
    if (!sectionNav || !header) return;
    
    const headerHeight = header.offsetHeight;
    
    if (window.scrollY > 100) {
      sectionNav.style.top = `${headerHeight}px`;
      sectionNav.classList.add('is-sticky');
    } else {
      sectionNav.classList.remove('is-sticky');
    }
  }

  window.addEventListener('scroll', updateStickyState, { passive: true });
  window.addEventListener('resize', updateStickyState, { passive: true });
  updateStickyState();

  // ==================== SMOOTH SCROLL WITH OFFSET ====================

  sectionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = header ? header.offsetHeight : 0;
        const navHeight = sectionNav ? sectionNav.offsetHeight : 0;
        const offset = headerHeight + navHeight + 20;
        
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update active state immediately
        sectionLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // ==================== HIDE/SHOW HEADER ON SCROLL ====================

  let lastScrollY = 0;
  let ticking = false;

  function handleHeaderVisibility() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      // Scrolling down & past threshold - hide header
      header.style.transform = 'translateY(-100%)';
      if (sectionNav) {
        sectionNav.style.top = '0';
      }
    } else {
      // Scrolling up - show header
      header.style.transform = 'translateY(0)';
      if (sectionNav) {
        sectionNav.style.top = `${header.offsetHeight}px`;
      }
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
  }

  // Uncomment below to enable hide-on-scroll behavior
  /*
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleHeaderVisibility);
      ticking = true;
    }
  }, { passive: true });
  */

  // ==================== MOBILE MENU ====================

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
      
      // Animate hamburger to X
      mobileMenuToggle.classList.toggle('is-active');
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        mobileMenuToggle.classList.remove('is-active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

})();
