const title = document.querySelector('.title')
const text = 'Ich hab was für dich Mali ❤️'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});

// Generate Stars
function generateStars() {
  const starsContainer = document.querySelector('.stars-container');
  
  // Generate 100 twinkling stars
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'twinkling-star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 2 + 1) + 's';
    
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    starsContainer.appendChild(star);
  }
  
  // Generate 20 shooting stars
  for (let i = 0; i < 20; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = Math.random() * 100 + '%';
    shootingStar.style.top = Math.random() * 100 + '%';
    shootingStar.style.animationDelay = Math.random() * 10 + 's';
    shootingStar.style.animationDuration = (1 + Math.random() * 2) + 's';
    starsContainer.appendChild(shootingStar);
  }
}

// Initialize stars
generateStars();