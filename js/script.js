// Constants for DOM elements and class names
const CLASS_HIDDEN = 'hidden';
const SAFETY_EXIT_DOUBLE_CLICK_DELAY = 300; // ms

// Toggle FAQ answers with improved selector and error handling
function toggleFAQ(num) {
    const faq = document.getElementById(`faq-${num}`);
    if (faq) {
        faq.classList.toggle(CLASS_HIDDEN);
    } else {
        console.error(`FAQ element with ID 'faq-${num}' not found`);
    }
}

// Modal helper functions
const helpModal = document.getElementById('helpModal');
const safetyPlanSection = document.getElementById('safetyPlan');

function showHelpOptions() {
    if (helpModal) {
        helpModal.classList.remove(CLASS_HIDDEN);
    }
}

function closeHelpModal() {
    if (helpModal) {
        helpModal.classList.add(CLASS_HIDDEN);
    }
}

function showSafetyPlan() {
    if (helpModal) helpModal.classList.add(CLASS_HIDDEN);
    if (safetyPlanSection) {
        safetyPlanSection.classList.remove(CLASS_HIDDEN);
        safetyPlanSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Emergency call functions with reusable code
function makeEmergencyCall(serviceName, phoneNumber) {
    if (confirm(`Você será redirecionado para ligar para ${serviceName}. Deseja continuar?`)) {
        window.location.href = `tel:${phoneNumber}`;
    }
}

function callEmergency() {
    makeEmergencyCall('a polícia', '190');
}

function call180() {
    makeEmergencyCall('a Central de Atendimento à Mulher', '180');
}

function call181() {
    makeEmergencyCall('o Disque Denúncia', '181');
}

// Safety exit with improved implementation
function setupSafetyExit() {
    const safetyExitButton = document.querySelector('.safety-exit');
    if (!safetyExitButton) return;

    let lastClick = 0;
    
    safetyExitButton.addEventListener('click', function(e) {
        const now = Date.now();
        if (now - lastClick < SAFETY_EXIT_DOUBLE_CLICK_DELAY) {
            // Clear the page content safely
            document.body.innerHTML = `
                <div class="h-screen flex items-center justify-center bg-gray-100">
                    <p class="text-gray-500">Você saiu do site com segurança.</p>
                </div>
            `;
            // Remove any event listeners that might remain
            window.removeEventListener('click', () => {});
        }
        lastClick = now;
    });
}

// Initialize safety exit on DOM load
document.addEventListener('DOMContentLoaded', setupSafetyExit);
function toggleFAQ(id) {
    const faq = document.getElementById(`faq${id}`);
    const isVisible = !faq.classList.contains('hidden');

    // Opcional: esconder todos os outros FAQs abertos
    document.querySelectorAll('[id^="faq"]').forEach(el => {
      el.classList.add('hidden');
    });

    // Alternar visibilidade do selecionado
    if (!isVisible) {
      faq.classList.remove('hidden');
    }
  }