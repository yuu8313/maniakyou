document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: 1,
          translateY: 0,
          duration: 1000,
          easing: 'easeOutExpo'
        })
      }
    })
  }, {
    threshold: 0.1
  });
  timelineItems.forEach(item => observer.observe(item));
  setTimeout(showRandomPopup, 5000)
});

function showRandomPopup() {
  const popup = document.getElementById('mysteryPopup');
  const randomX = Math.random() * (window.innerWidth - 300);
  const randomY = Math.random() * (window.innerHeight - 200);
  popup.style.left = randomX + 'px';
  popup.style.top = randomY + 'px';
  popup.style.display = 'block';
  setTimeout(showRandomPopup, Math.random() * 20000 + 10000)
}

function closePopup() {
  document.getElementById('mysteryPopup').style.display = 'none'
}
