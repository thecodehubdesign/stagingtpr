/**
 * Modals JavaScript - The Pole Room Mitcham
 * Handles all modal/dialog functionality
 */

(function() {
  'use strict';

  // ==================== MODAL HELPER FUNCTIONS ====================

  function openModal(modal) {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ==================== BOOKING MODAL ====================

  const bookingModal = document.getElementById('bookingModal');
  const bookingModalClose = document.getElementById('bookingModalClose');
  const bookingModalOverlay = document.getElementById('bookingModalOverlay');

  // Booking trigger buttons
  const bookingTriggers = [
    '#openBookingBtn',
    '#heroBookBtn',
    '#timetableBookBtn',
    '#faqBookBtn',
    '#contactBookBtn'
  ];

  bookingTriggers.forEach(selector => {
    const btn = document.querySelector(selector);
    if (btn) {
      btn.addEventListener('click', () => openModal(bookingModal));
    }
  });

  if (bookingModalClose) {
    bookingModalClose.addEventListener('click', () => closeModal(bookingModal));
  }

  if (bookingModalOverlay) {
    bookingModalOverlay.addEventListener('click', () => closeModal(bookingModal));
  }

  // ==================== INSTRUCTOR MODAL ====================

  const instructorModal = document.getElementById('instructorModal');
  const instructorModalClose = document.getElementById('instructorModalClose');
  const instructorModalOverlay = document.getElementById('instructorModalOverlay');
  const instructorCards = document.querySelectorAll('.instructor-card');

  instructorCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.dataset.name;
      const role = card.dataset.role;
      const experience = card.dataset.experience;
      const specialties = card.dataset.specialties;
      const bio = card.dataset.bio;
      const imageSrc = card.querySelector('img').src;

      // Populate modal
      document.getElementById('instructorModalName').textContent = name;
      document.getElementById('instructorModalRole').textContent = role;
      document.getElementById('instructorModalExperience').textContent = `${experience} experience`;
      document.getElementById('instructorModalBio').textContent = bio;
      document.getElementById('instructorModalImage').src = imageSrc;

      // Create specialty badges
      const specialtiesContainer = document.getElementById('instructorModalSpecialties');
      specialtiesContainer.innerHTML = '';
      if (specialties) {
        specialties.split(', ').forEach(specialty => {
          const badge = document.createElement('span');
          badge.className = 'specialty-badge';
          badge.textContent = specialty;
          specialtiesContainer.appendChild(badge);
        });
      }

      openModal(instructorModal);
    });
  });

  if (instructorModalClose) {
    instructorModalClose.addEventListener('click', () => closeModal(instructorModal));
  }

  if (instructorModalOverlay) {
    instructorModalOverlay.addEventListener('click', () => closeModal(instructorModal));
  }

  // ==================== FAQ PANEL ====================

  const faqPanel = document.getElementById('faqPanel');
  const faqPanelClose = document.getElementById('faqPanelClose');
  const faqPanelOverlay = document.getElementById('faqPanelOverlay');
  const faqCards = document.querySelectorAll('.faq-card');

  // FAQ content data
  const faqContent = {
    1: {
      title: 'What should I wear to my first class?',
      content: `
        <p>We recommend wearing comfortable workout clothes that allow for movement. Here's what we suggest:</p>
        <h3>For Pole Classes</h3>
        <ul>
          <li>Short shorts or booty shorts (skin contact with the pole is important for grip)</li>
          <li>A tank top, sports bra, or fitted t-shirt</li>
          <li>Avoid lotions, oils, or moisturizers on class day as they affect grip</li>
        </ul>
        <h3>For Aerial Classes</h3>
        <ul>
          <li>Long leggings or fitted pants</li>
          <li>A fitted long-sleeve top (to protect from fabric burns)</li>
          <li>Sports bra</li>
        </ul>
        <h3>For All Classes</h3>
        <ul>
          <li>Bare feet (no shoes or socks needed)</li>
          <li>Remove all jewelry before class</li>
          <li>Tie long hair back</li>
        </ul>
        <p>Don't worry too much—our instructors will guide you if you need any adjustments!</p>
      `
    },
    2: {
      title: 'Do I need any prior experience?',
      content: `
        <p><strong>Absolutely not!</strong> Our beginner classes are designed specifically for people with no prior experience.</p>
        <h3>What to Expect as a Complete Beginner</h3>
        <ul>
          <li>Small class sizes (max 8-10 students) so you get personal attention</li>
          <li>Step-by-step instruction with progressions for all fitness levels</li>
          <li>A supportive, judgment-free environment</li>
          <li>Instructors who remember what it was like to start</li>
        </ul>
        <h3>Fitness Level</h3>
        <p>You don't need to be fit to start—you'll GET fit by coming! Our classes build strength progressively. Many students start with no upper body strength and develop incredible power over time.</p>
        <h3>Age & Body Type</h3>
        <p>We welcome students of all ages (16+), body types, and backgrounds. Pole and aerial fitness is for everyone!</p>
      `
    },
    3: {
      title: 'How do I book a class?',
      content: `
        <p>Booking is easy! Here are your options:</p>
        <h3>Online Booking</h3>
        <ol>
          <li>Download our app (The Pole Room) from the App Store or Google Play</li>
          <li>Create an account or log in</li>
          <li>Browse classes and select your preferred time</li>
          <li>Confirm your booking</li>
        </ol>
        <h3>First-Time Visitors</h3>
        <p>For your first class, we recommend booking a <strong>Free Trial</strong>:</p>
        <ul>
          <li>Click the "Book Free Trial" button on this page</li>
          <li>Fill out the short form</li>
          <li>Select your preferred studio and class time</li>
          <li>We'll send you a confirmation email</li>
        </ul>
        <h3>Phone Booking</h3>
        <p>Prefer to speak to someone? Call us at (03) 9567 8901 and we'll help you book over the phone.</p>
      `
    },
    4: {
      title: 'What are the different class levels?',
      content: `
        <p>Our classes are structured into clear levels so you always know what to expect:</p>
        <h3>Beginner (BEG)</h3>
        <p>Perfect for newcomers. Learn foundational moves, proper technique, and basic spins. No prerequisites.</p>
        <h3>Beginner Plus (BEG+)</h3>
        <p>Ready to advance from pure beginner. Introduces inversions and more complex spins. Requires: Comfortable with beginner moves.</p>
        <h3>Intermediate (INTER)</h3>
        <p>Building on foundations with more challenging tricks and combinations. Requires: Solid inversion skills.</p>
        <h3>Intermediate Plus (INTER+)</h3>
        <p>Advanced intermediate work including extended tricks and flow. Requires: Instructor approval.</p>
        <h3>Advanced (ADV)</h3>
        <p>Complex tricks, combinations, and choreography. Requires: Instructor approval and demonstrated intermediate+ skills.</p>
        <h3>All Levels</h3>
        <p>Classes designed for mixed abilities with modifications provided for different skill levels.</p>
      `
    }
  };

  faqCards.forEach(card => {
    card.addEventListener('click', () => {
      const faqId = card.dataset.faq;
      const faq = faqContent[faqId];
      
      if (faq) {
        document.getElementById('faqPanelTitle').textContent = faq.title;
        document.getElementById('faqPanelBody').innerHTML = faq.content;
        openModal(faqPanel);
      }
    });
  });

  if (faqPanelClose) {
    faqPanelClose.addEventListener('click', () => closeModal(faqPanel));
  }

  if (faqPanelOverlay) {
    faqPanelOverlay.addEventListener('click', () => closeModal(faqPanel));
  }

  // ==================== ESCAPE KEY TO CLOSE ALL MODALS ====================

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(bookingModal);
      closeModal(instructorModal);
      closeModal(faqPanel);
      closeModal(document.getElementById('reviewsPanel'));
    }
  });

})();
