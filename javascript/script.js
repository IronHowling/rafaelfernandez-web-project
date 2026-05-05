// 1. Select the core elements
const activateBtn = document.getElementById('activate-btn');
const operatorInput = document.getElementById('operator-name');
const greetingOutput = document.getElementById('greeting-output');
const portal = document.querySelector('.research-container');

// 2. The Core Function: This runs when triggered by click OR enter
function initializeSimulation() {
    const operatorName = operatorInput.value.trim();
    
    if (operatorName === "") {
        greetingOutput.innerHTML = "<span style='color: #ff3333;'>[ERROR] Operator designation required.</span>";
    } else {
        // We wrap the content in a way that triggers the CSS animation every time
        greetingOutput.innerHTML = `
            <p>
                <strong>Simulation Status:</strong> Initialized<br>
                <strong>Assigned Lead:</strong> ${operatorName}<br>
                <strong>Protocol:</strong> Ephemeral Agent transitioned to active monitoring.
            </p>
        `;
        operatorInput.value = ""; 
    }
}

// 3. Trigger 1: Mouse Click
activateBtn.addEventListener('click', initializeSimulation);

// 4. Trigger 2: Enter Key (The Fix)
operatorInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents the page from refreshing
        initializeSimulation();
    }
});

// 5. Trigger 3: 3D Isotropic Movement (Desktop Only)
const isMobile = window.matchMedia("(pointer: coarse)").matches;

if (!isMobile && portal) {
    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = (e.clientX - centerX) / centerX;
        const deltaY = (e.clientY - centerY) / centerY;

        const rotateY = deltaX * 5; 
        const rotateX = -deltaY * 5;

        portal.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    document.addEventListener('mouseleave', () => {
        portal.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    });
}