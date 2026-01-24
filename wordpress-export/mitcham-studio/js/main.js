/**
 * Main JavaScript - The Pole Room Mitcham
 * Core functionality and utilities
 */

(function() {
  'use strict';

  // ==================== UTILITIES ====================
  
  /**
   * Debounce function to limit function calls
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function for scroll events
   */
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // ==================== MOBILE MENU ====================
  
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }

  // ==================== SMOOTH SCROLL ====================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 140; // Account for sticky headers
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==================== SCROLL REVEAL ====================
  
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after revealing
        // revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ==================== HERO MEDIA CAROUSEL ====================
  
  const mediaDisplay = document.getElementById('mediaDisplay');
  const heroVideo = document.getElementById('heroVideo');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mediaPrev = document.getElementById('mediaPrev');
  const mediaNext = document.getElementById('mediaNext');
  
  let currentMediaIndex = 0;
  const mediaItems = [
    { type: 'video', src: 'https://player.vimeo.com/video/286796328?h=abc123&title=0&byline=0&portrait=0', caption: 'Take a Virtual Tour' },
    { type: 'image', src: 'images/hero/studio-1.jpg', caption: 'World-Class Equipment' },
    { type: 'image', src: 'images/hero/studio-2.jpg', caption: 'Beginner Friendly Classes' },
    { type: 'image', src: 'images/hero/studio-3.jpg', caption: 'Aerial Silks Program' },
    { type: 'image', src: 'images/hero/studio-4.jpg', caption: 'Small Class Sizes' },
    { type: 'image', src: 'images/hero/studio-5.jpg', caption: 'Performance Opportunities' },
    { type: 'image', src: 'images/hero/studio-6.jpg', caption: 'Beginner to Advanced' },
    { type: 'image', src: 'images/hero/studio-7.jpg', caption: 'Advanced Training' },
    { type: 'image', src: 'images/hero/studio-8.jpg', caption: 'Group Classes' },
    { type: 'image', src: 'images/hero/studio-9.jpg', caption: 'Make Amazing Friends' }
  ];

  function updateMedia(index) {
    currentMediaIndex = index;
    const item = mediaItems[index];
    
    if (item.type === 'video') {
      mediaDisplay.innerHTML = `
        <iframe 
          src="${item.src}" 
          width="100%" 
          height="100%" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen
        ></iframe>
      `;
    } else {
      mediaDisplay.innerHTML = `<img src="${item.src}" alt="${item.caption}">`;
    }
    
    // Update caption
    const caption = document.querySelector('.caption-text');
    if (caption) {
      caption.textContent = item.caption;
    }
    
    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      updateMedia(index);
    });
  });

  if (mediaPrev) {
    mediaPrev.addEventListener('click', () => {
      const newIndex = currentMediaIndex === 0 ? mediaItems.length - 1 : currentMediaIndex - 1;
      updateMedia(newIndex);
    });
  }

  if (mediaNext) {
    mediaNext.addEventListener('click', () => {
      const newIndex = currentMediaIndex === mediaItems.length - 1 ? 0 : currentMediaIndex + 1;
      updateMedia(newIndex);
    });
  }

  // ==================== INSTRUCTOR HOVER VIDEOS ====================
  
  const instructorCards = document.querySelectorAll('.instructor-card');
  
  instructorCards.forEach(card => {
    const video = card.querySelector('.instructor-video');
    
    if (video) {
      card.addEventListener('mouseenter', () => {
        video.playbackRate = 2;
        video.play().catch(() => {});
      });
      
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });

  // ==================== CLASS FILTER ====================
  
  const filterTabs = document.querySelectorAll('.filter-tab');
  const classCards = document.querySelectorAll('.class-card');
  
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      
      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Filter cards
      classCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'All' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==================== GOOGLE MAP ====================
  
  window.initMap = function() {
    const mapElement = document.getElementById('studioMap');
    if (!mapElement) return;

    const studioLocation = { lat: -37.8166, lng: 145.1977 }; // Mitcham coordinates
    
    const map = new google.maps.Map(mapElement, {
      center: studioLocation,
      zoom: 15,
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#1a1a2e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#1a1a2e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }]
        }
      ]
    });

    // Custom marker
    new google.maps.Marker({
      position: studioLocation,
      map: map,
      title: 'The Pole Room Mitcham',
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: '#ff00ff',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2
      }
    });
  };

  // ==================== FORM VALIDATION ====================
  
  const bookingForm = document.getElementById('bookingForm1');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Basic validation
      const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
      let isValid = true;
      
      requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
          input.classList.add('error');
          isValid = false;
        } else {
          input.classList.remove('error');
        }
      });
      
      // Email validation
      const emailInput = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
      }
      
      if (isValid) {
        // Store data and move to next step
        window.bookingData = data;
        goToBookingStep(2);
      }
    });
  }

  // ==================== BOOKING STEP NAVIGATION ====================
  
  window.goToBookingStep = function(step) {
    const steps = document.querySelectorAll('.booking-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    
    steps.forEach((s, i) => {
      s.classList.toggle('active', i === step - 1);
    });
    
    progressSteps.forEach((ps, i) => {
      ps.classList.remove('active', 'complete');
      if (i < step - 1) {
        ps.classList.add('complete');
      } else if (i === step - 1) {
        ps.classList.add('active');
      }
    });
  };

  // Step navigation buttons
  const backToStep1 = document.getElementById('backToStep1');
  const toStep3 = document.getElementById('toStep3');
  const backToStep2 = document.getElementById('backToStep2');
  const completeBooking = document.getElementById('completeBooking');
  const closeBooking = document.getElementById('closeBooking');

  if (backToStep1) backToStep1.addEventListener('click', () => goToBookingStep(1));
  if (toStep3) toStep3.addEventListener('click', () => goToBookingStep(3));
  if (backToStep2) backToStep2.addEventListener('click', () => goToBookingStep(2));
  if (completeBooking) {
    completeBooking.addEventListener('click', () => {
      // In production, submit form data to server here
      goToBookingStep(4); // Thank you step
    });
  }
  if (closeBooking) {
    closeBooking.addEventListener('click', () => {
      document.getElementById('bookingModal').classList.remove('active');
      goToBookingStep(1); // Reset for next time
    });
  }

  // Studio selection
  const studioOptions = document.querySelectorAll('.studio-option');
  studioOptions.forEach(option => {
    option.addEventListener('click', function() {
      studioOptions.forEach(o => o.classList.remove('selected'));
      this.classList.add('selected');
      this.querySelector('input').checked = true;
      
      // Update summary
      const studioName = this.querySelector('h3').textContent;
      const summaryStudio = document.getElementById('summaryStudio');
      if (summaryStudio) summaryStudio.textContent = studioName;
    });
  });

  // ==================== HEADER SCROLL EFFECT ====================
  
  const header = document.querySelector('.header');
  let lastScrollY = 0;

  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  }, 100);

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ==================== LAZY LOADING IMAGES ====================
  
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // ==================== TOUCH SWIPE FOR CAROUSELS ====================
  
  function addSwipeSupport(carousel) {
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    carousel.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    }, { passive: true });

    carousel.addEventListener('touchend', () => {
      isDown = false;
    });

    carousel.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    }, { passive: true });
  }

  // Add swipe support to all carousels
  document.querySelectorAll('.testimonials-carousel, .classes-carousel, .instructors-carousel, .gallery-carousel').forEach(carousel => {
    addSwipeSupport(carousel);
  });

  // ==================== CONSOLE LOG ====================
  console.log('%c🌟 The Pole Room Mitcham', 'font-size: 24px; font-weight: bold; color: #ff00ff;');
  console.log('%cBuilt with 💜 by The Pole Room Team', 'font-size: 12px; color: #888;');

})();
