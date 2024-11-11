document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: true
    });
  
    sr.reveal('.home-text', {});
    sr.reveal('.home-img', { delay: 400 });
    sr.reveal('.dos-text', { delay: 200 });
    sr.reveal('.parent-container > div', { interval: 200 });
    sr.reveal('.additional-section > div', { interval: 200 });
  });
  