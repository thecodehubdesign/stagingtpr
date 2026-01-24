/**
 * Carousel JavaScript - The Pole Room Mitcham
 * Handles all carousel/slider functionality
 */

(function() {
  'use strict';

  // ==================== CAROUSEL CLASS ====================
  
  class Carousel {
    constructor(containerSelector, options = {}) {
      this.container = document.querySelector(containerSelector);
      if (!this.container) return;

      this.options = {
        scrollAmount: options.scrollAmount || 320,
        loop: options.loop || false,
        autoplay: options.autoplay || false,
        autoplayInterval: options.autoplayInterval || 5000,
        ...options
      };

      this.prevBtn = options.prevBtn ? document.querySelector(options.prevBtn) : null;
      this.nextBtn = options.nextBtn ? document.querySelector(options.nextBtn) : null;
      
      this.init();
    }

    init() {
      this.setupNavigation();
      if (this.options.autoplay) {
        this.setupAutoplay();
      }
    }

    setupNavigation() {
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.scroll('left');
        });
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.scroll('right');
        });
      }

      // Keyboard navigation when focused
      this.container.setAttribute('tabindex', '0');
      this.container.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          this.scroll('left');
        } else if (e.key === 'ArrowRight') {
          this.scroll('right');
        }
      });
    }

    scroll(direction) {
      const amount = direction === 'left' ? -this.options.scrollAmount : this.options.scrollAmount;
      
      this.container.scrollBy({
        left: amount,
        behavior: 'smooth'
      });

      // Handle looping
      if (this.options.loop) {
        setTimeout(() => {
          if (direction === 'left' && this.container.scrollLeft <= 0) {
            this.container.scrollLeft = this.container.scrollWidth - this.container.clientWidth;
          } else if (direction === 'right' && 
                     this.container.scrollLeft >= this.container.scrollWidth - this.container.clientWidth - 10) {
            this.container.scrollLeft = 0;
          }
        }, 350);
      }
    }

    setupAutoplay() {
      this.autoplayTimer = setInterval(() => {
        this.scroll('right');
      }, this.options.autoplayInterval);

      // Pause on hover
      this.container.addEventListener('mouseenter', () => {
        clearInterval(this.autoplayTimer);
      });

      this.container.addEventListener('mouseleave', () => {
        this.autoplayTimer = setInterval(() => {
          this.scroll('right');
        }, this.options.autoplayInterval);
      });
    }

    destroy() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
      }
    }
  }

  // ==================== INITIALIZE CAROUSELS ====================

  // Testimonials Carousel
  new Carousel('.testimonials-carousel', {
    scrollAmount: 220,
    loop: true,
    prevBtn: '#testimonialsPrev',
    nextBtn: '#testimonialsNext'
  });

  // Classes Carousel
  new Carousel('.classes-carousel', {
    scrollAmount: 300,
    loop: true,
    prevBtn: '#classesPrev',
    nextBtn: '#classesNext'
  });

  // Instructors Carousel
  new Carousel('.instructors-carousel', {
    scrollAmount: 220,
    loop: true,
    prevBtn: '#instructorsPrev',
    nextBtn: '#instructorsNext'
  });

  // Gallery Carousel
  new Carousel('.gallery-carousel', {
    scrollAmount: 220,
    loop: true,
    prevBtn: '#galleryPrev',
    nextBtn: '#galleryNext'
  });

  // ==================== TESTIMONIALS CLICK TO PLAY ====================
  
  const testimonialCards = document.querySelectorAll('.testimonial-card[data-video]');
  const videoModal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoModalOverlay = document.getElementById('videoModalOverlay');

  testimonialCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoSrc = card.dataset.video;
      if (videoSrc && videoModal && modalVideo) {
        modalVideo.querySelector('source').src = videoSrc;
        modalVideo.load();
        videoModal.classList.add('active');
        modalVideo.play().catch(() => {});
      }
    });
  });

  function closeVideoModal() {
    if (videoModal && modalVideo) {
      videoModal.classList.remove('active');
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  }

  if (videoModalClose) {
    videoModalClose.addEventListener('click', closeVideoModal);
  }

  if (videoModalOverlay) {
    videoModalOverlay.addEventListener('click', closeVideoModal);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
    }
  });

})();
