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