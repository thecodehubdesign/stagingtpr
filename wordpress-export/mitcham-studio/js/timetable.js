/**
 * Timetable JavaScript - The Pole Room Mitcham
 * Handles timetable functionality and class scheduling
 */

(function() {
  'use strict';

  // ==================== TIMETABLE DATA ====================

  const classTypes = [
    { name: 'Pole Beginner', level: 'beginner', category: 'pole', duration: 60, isBeginner: true },
    { name: 'Pole Beginner+', level: 'beginner', category: 'pole', duration: 60, isBeginner: true },
    { name: 'Pole Intermediate', level: 'intermediate', category: 'pole', duration: 60, isBeginner: false },
    { name: 'Pole Intermediate+', level: 'intermediate', category: 'pole', duration: 60, isBeginner: false },
    { name: 'Pole Advanced', level: 'advanced', category: 'pole', duration: 60, isBeginner: false },
    { name: 'Aerial Hoop Beginner', level: 'beginner', category: 'aerial', duration: 60, isBeginner: true },
    { name: 'Aerial Silks Beginner', level: 'beginner', category: 'aerial', duration: 60, isBeginner: true },
    { name: 'Flexibility', level: 'all-levels', category: 'flexibility', duration: 60, isBeginner: true },
    { name: 'Pole Flow', level: 'intermediate', category: 'dance', duration: 60, isBeginner: false },
    { name: 'Exotic Floor', level: 'all-levels', category: 'dance', duration: 60, isBeginner: true }
  ];

  const instructors = ['Derryn', 'Bianca', 'Alison', 'Gillian', 'Courtney', 'KP'];

  const timeSlots = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
    '12:00', '17:00', '18:00', '19:00', '20:00'
  ];

  // ==================== STATE ====================

  let currentDate = new Date();
  let selectedDate = new Date();
  let activeFilter = 'full'; // 'full' or 'beginner'

  // ==================== DOM ELEMENTS ====================

  const weekDaysContainer = document.getElementById('weekDays');
  const classesListContainer = document.getElementById('classesList');
  const prevWeekBtn = document.getElementById('prevWeek');
  const nextWeekBtn = document.getElementById('nextWeek');
  const timetableFilters = document.querySelectorAll('.timetable-filter');

  // ==================== HELPER FUNCTIONS ====================

  function formatDate(date) {
    return date.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric' });
  }

  function getWeekDays(startDate) {
    const days = [];
    const start = new Date(startDate);
    start.setDate(start.getDate() - start.getDay()); // Start from Sunday
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push(day);
    }
    return days;
  }

  function getLevelSuffix(level) {
    switch (level) {
      case 'beginner': return '(BEG)';
      case 'intermediate': return '(INTER)';
      case 'advanced': return '(ADV)';
      default: return '';
    }
  }

  function generateRandomClasses(date) {
    const classes = [];
    const dayOfWeek = date.getDay();
    
    // Different schedules for different days
    const dayTimeSlots = dayOfWeek === 0 || dayOfWeek === 6 
      ? ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00']
      : timeSlots;
    
    dayTimeSlots.forEach(time => {
      // Randomly decide if there's a class at this time
      if (Math.random() > 0.3) {
        const classType = classTypes[Math.floor(Math.random() * classTypes.length)];
        const instructor = instructors[Math.floor(Math.random() * instructors.length)];
        const spotsLeft = Math.floor(Math.random() * 10);
        const totalSpots = 10;
        
        classes.push({
          id: `${date.toISOString()}-${time}`,
          name: classType.name,
          time: time,
          instructor: instructor,
          level: classType.level,
          category: classType.category,
          duration: classType.duration,
          spotsLeft: spotsLeft,
          totalSpots: totalSpots,
          isBeginner: classType.isBeginner
        });
      }
    });
    
    return classes.sort((a, b) => a.time.localeCompare(b.time));
  }

  // ==================== RENDER FUNCTIONS ====================

  function renderWeekDays() {
    if (!weekDaysContainer) return;
    
    const days = getWeekDays(currentDate);
    weekDaysContainer.innerHTML = '';
    
    days.forEach(day => {
      const isSelected = day.toDateString() === selectedDate.toDateString();
      const isToday = day.toDateString() === new Date().toDateString();
      
      const dayBtn = document.createElement('div');
      dayBtn.className = `day-btn ${isSelected ? 'active' : ''} ${isToday ? 'today' : ''}`;
      dayBtn.innerHTML = `
        <span class="day-name">${day.toLocaleDateString('en-AU', { weekday: 'short' })}</span>
        <span class="day-date">${day.getDate()}</span>
      `;
      
      dayBtn.addEventListener('click', () => {
        selectedDate = new Date(day);
        renderWeekDays();
        renderClasses();
      });
      
      weekDaysContainer.appendChild(dayBtn);
    });
  }

  function renderClasses() {
    if (!classesListContainer) return;
    
    let classes = generateRandomClasses(selectedDate);
    
    // Apply filter
    if (activeFilter === 'beginner') {
      classes = classes.filter(c => c.isBeginner);
    }
    
    if (classes.length === 0) {
      classesListContainer.innerHTML = `
        <div class="no-classes">
          <p>No classes scheduled for this day.</p>
          <p>Try selecting a different day or filter.</p>
        </div>
      `;
      return;
    }
    
    classesListContainer.innerHTML = '';
    
    classes.forEach(classItem => {
      const spotsClass = classItem.spotsLeft === 0 ? 'full' : classItem.spotsLeft <= 3 ? 'low' : '';
      const levelSuffix = getLevelSuffix(classItem.level);
      
      const classRow = document.createElement('div');
      classRow.className = 'class-row';
      classRow.innerHTML = `
        <div class="class-row-info">
          <span class="class-row-time">${classItem.time}</span>
          <div>
            <span class="class-row-name">${classItem.name}</span>
            <span class="class-row-level">${levelSuffix}</span>
          </div>
        </div>
        <span class="class-row-instructor" data-instructor="${classItem.instructor}">${classItem.instructor}</span>
        <span class="class-row-spots ${spotsClass}">
          ${classItem.spotsLeft === 0 ? 'Full' : `${classItem.spotsLeft} spots left`}
        </span>
        <button class="btn btn-primary class-row-book neon-button" 
                ${classItem.spotsLeft === 0 ? 'disabled' : ''}>
          ${classItem.spotsLeft === 0 ? 'Waitlist' : 'Book Now'}
        </button>
      `;
      
      // Add click handler for instructor
      const instructorLink = classRow.querySelector('.class-row-instructor');
      instructorLink.addEventListener('click', () => {
        openInstructorModal(classItem.instructor);
      });
      
      // Add click handler for booking
      const bookBtn = classRow.querySelector('.class-row-book');
      bookBtn.addEventListener('click', () => {
        openBookingModal(classItem);
      });
      
      // Add expand/collapse for class details (optional)
      classRow.addEventListener('click', (e) => {
        if (e.target.closest('.class-row-instructor') || e.target.closest('.class-row-book')) {
          return;
        }
        classRow.classList.toggle('expanded');
      });
      
      classesListContainer.appendChild(classRow);
    });
  }

  function openInstructorModal(instructorName) {
    const instructorCard = document.querySelector(`.instructor-card[data-name="${instructorName}"]`);
    if (instructorCard) {
      instructorCard.click();
    }
  }

  function openBookingModal(classItem) {
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Store selected class info
      window.selectedClass = classItem;
    }
  }

  // ==================== EVENT LISTENERS ====================

  // Week navigation
  if (prevWeekBtn) {
    prevWeekBtn.addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() - 7);
      selectedDate.setDate(selectedDate.getDate() - 7);
      renderWeekDays();
      renderClasses();
    });
  }

  if (nextWeekBtn) {
    nextWeekBtn.addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() + 7);
      selectedDate.setDate(selectedDate.getDate() + 7);
      renderWeekDays();
      renderClasses();
    });
  }

  // Filter buttons
  timetableFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      activeFilter = filter.dataset.filter;
      timetableFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      renderClasses();
    });
  });

  // ==================== INITIALIZE ====================

  renderWeekDays();
  renderClasses();

})();
