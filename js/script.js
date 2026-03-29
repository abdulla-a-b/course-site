// Add click effect to cards
document.querySelectorAll('.course-card').forEach(card => {
  card.addEventListener('click', () => {
    if (card.querySelector('a').getAttribute('href') !== '#') {
      // You can add more JS here later
    }
  });
});

// Simple welcome alert (remove later if you don't want it)
console.log('%c✅ Course site loaded successfully!', 'color: #1a73e8; font-size: 16px;');
