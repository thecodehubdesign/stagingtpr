/**
 * Reviews Panel JavaScript - The Pole Room Mitcham
 * Handles floating reviews button and panel
 */

(function() {
  'use strict';

  // ==================== REVIEWS DATA ====================

  const reviews = [
    {
      id: 1,
      name: 'Alex M.',
      avatar: 'images/testimonials/alex.png',
      rating: 5,
      review: 'The best decision I ever made! The instructors are so supportive and the community is amazing. I\'ve gained so much confidence since starting.',
      date: '2 weeks ago',
      verified: true,
      tags: ['community', 'instructors']
    },
    {
      id: 2,
      name: 'Sarah K.',
      avatar: 'images/testimonials/sarah.png',
      rating: 5,
      review: 'I was nervous about trying pole for the first time but everyone made me feel so welcome. Now I\'m addicted! Highly recommend the beginner classes.',
      date: '1 month ago',
      verified: true,
      tags: ['classes', 'community']
    },
    {
      id: 3,
      name: 'Lauren T.',
      avatar: 'images/testimonials/lauren.png',
      rating: 5,
      review: 'Amazing studio with top-notch equipment. The instructors really know how to teach and make every class fun. Best workout I\'ve ever had!',
      date: '3 weeks ago',
      verified: true,
      tags: ['studio', 'instructors', 'classes']
    },
    {
      id: 4,
      name: 'Jessica R.',
      avatar: 'images/testimonials/courtney.png',
      rating: 5,
      review: 'Found my happy place here! The sense of community is incredible. Everyone supports each other and celebrates every small victory.',
      date: '2 months ago',
      verified: true,
      tags: ['community']
    },
    {
      id: 5,
      name: 'Michelle P.',
      avatar: 'images/testimonials/amber.png',
      rating: 5,
      review: 'The studio is beautiful and clean. Love the vibe here - it\'s empowering, fun, and challenging. Can\'t recommend it enough!',
      date: '1 week ago',
      verified: true,
      tags: ['studio']
    },
    {
      id: 6,
      name: 'Emma W.',
      avatar: 'images/testimonials/simone.png',
      rating: 5,
      review: 'Derryn and the team are amazing! They remember everyone\'s names and progress. The personalized attention makes such a difference.',
      date: '3 weeks ago',
      verified: true,
      tags: ['instructors']
    }
  ];

  // ==================== DOM ELEMENTS ====================

  const floatingBtn = document.getElementById('floatingReviewsBtn');
  const reviewsPanel = document.getElementById('reviewsPanel');
  const reviewsPanelClose = document.getElementById('reviewsPanelClose');
  const reviewsPanelOverlay = document.getElementById('reviewsPanelOverlay');
  const reviewsPanelList = document.getElementById('reviewsPanelList');
  const filterTags = document.querySelectorAll('.filter-tag');

  let activeFilter = 'All';

  // ==================== HELPER FUNCTIONS ====================

  function renderStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  function renderReviewCard(review) {
    return `
      <div class="review-card">
        <div class="review-stars">${renderStars(review.rating)}</div>
        <p class="review-text">"${review.review}"</p>
        <div class="review-author">
          <img src="${review.avatar}" alt="${review.name}" class="review-avatar">
          <div class="review-info">
            <span class="review-name">${review.name}</span>
            <span class="review-date">${review.date}</span>
          </div>
          ${review.verified ? `
            <span class="verified-badge">
              <img src="images/mindbody-symbol-black.svg" alt="Verified" class="verified-icon">
              Verified Review
            </span>
          ` : ''}
        </div>
      </div>
    `;
  }

  function renderReviews(filter = 'All') {
    if (!reviewsPanelList) return;

    let filteredReviews = reviews;
    
    if (filter !== 'All') {
      const filterLower = filter.toLowerCase();
      filteredReviews = reviews.filter(review => 
        review.tags.includes(filterLower)
      );
    }

    reviewsPanelList.innerHTML = filteredReviews.map(renderReviewCard).join('');
  }

  function openPanel() {
    if (reviewsPanel) {
      reviewsPanel.classList.add('active');
      document.body.style.overflow = 'hidden';
      renderReviews(activeFilter);
    }
  }

  function closePanel() {
    if (reviewsPanel) {
      reviewsPanel.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ==================== EVENT LISTENERS ====================

  if (floatingBtn) {
    floatingBtn.addEventListener('click', openPanel);
  }

  if (reviewsPanelClose) {
    reviewsPanelClose.addEventListener('click', closePanel);
  }

  if (reviewsPanelOverlay) {
    reviewsPanelOverlay.addEventListener('click', closePanel);
  }

  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      activeFilter = tag.textContent;
      filterTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      renderReviews(activeFilter);
    });
  });

  // ==================== SHOW MORE REVIEWS (Main Section) ====================

  const showMoreBtn = document.getElementById('showMoreReviews');
  const reviewsGrid = document.getElementById('reviewsGrid');
  let showingAll = false;

  if (showMoreBtn && reviewsGrid) {
    showMoreBtn.addEventListener('click', () => {
      if (showingAll) {
        // Hide extra reviews
        const allCards = reviewsGrid.querySelectorAll('.review-card');
        allCards.forEach((card, index) => {
          if (index >= 3) {
            card.remove();
          }
        });
        showMoreBtn.textContent = 'Show More Reviews';
        showingAll = false;
      } else {
        // Show more reviews
        const additionalReviews = reviews.slice(3);
        additionalReviews.forEach(review => {
          const cardHtml = renderReviewCard(review);
          reviewsGrid.insertAdjacentHTML('beforeend', cardHtml);
        });
        showMoreBtn.textContent = 'Show Less';
        showingAll = true;
      }
    });
  }

  // ==================== INITIALIZE ====================

  // Render initial reviews in panel
  renderReviews();

})();
