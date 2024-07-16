document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const progressBar = bar.querySelector('.progress-bar');
        const value = bar.getAttribute('data-value');
        let width = 0;
        
        const interval = setInterval(() => {
            if (width >= value) {
                clearInterval(interval);
                if (width == 100) {
                    progressBar.classList.add('completed');
                } else {
                    progressBar.classList.add('incomplete');
                }
            } else {
                width++;
                progressBar.style.width = width + '%';
                progressBar.querySelector('p').textContent = width + '%';
            }
        }, 20); // Adjust the interval speed as needed
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle-container');
  
    circles.forEach(container => {
      const circle = container.querySelector('.circle');
      const value = container.getAttribute('data-value');
      let percentage = 0;
  
      const interval = setInterval(() => {
        if (percentage >= value) {
          clearInterval(interval);
          if (percentage == 100) {
            circle.classList.add('completed');
          } else {
            circle.classList.add('incomplete');
          }
        } else {
          percentage++;
          circle.style.background = `conic-gradient(${percentage == 100 ? 'rgba(0, 128, 0, 0.090)' : 'rgba(0, 123, 255, 0.090)'} ${percentage * 3.6}deg, var(--secondary-color) 0deg)`;
          circle.setAttribute('data-value', percentage);
        }
      }, 20); // Adjust the interval speed as needed
    });
  });