document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. BACKGROUND SYMBOL GENERATOR ---
    const bgContainer = document.getElementById('bg-symbols');
    
    // The characters we want to pull from
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()<>{}[]/?';
    const amountOfSymbols = 120; // Change this to add more or fewer symbols

    for (let i = 0; i < amountOfSymbols; i++) {
        const span = document.createElement('span');
        
        // Pick a random character
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.className = 'bg-char';

        // Pick a random position on the screen (0% to 100%)
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        // Pick a random rotation (0 to 360 degrees) and random size (0.5x to 2.5x)
        const rotation = Math.floor(Math.random() * 360);
        const scale = Math.random() * 2 + 0.5; 

        // Apply styles
        span.style.top = `${top}vh`;
        span.style.left = `${left}vw`;
        span.style.transform = `rotate(${rotation}deg) scale(${scale})`;

        bgContainer.appendChild(span);
    }

    // --- 2. HELP MODAL LOGIC ---
    const helpBtn = document.getElementById('help-btn');
    const helpModal = document.getElementById('help-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Open Modal
    helpBtn.addEventListener('click', () => {
        helpModal.classList.add('active');
    });

    // Close Modal when clicking the close button
    closeModalBtn.addEventListener('click', () => {
        helpModal.classList.remove('active');
    });

    // Close Modal when clicking outside the box (on the dark background)
    helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) {
            helpModal.classList.remove('active');
        }
    });
});
