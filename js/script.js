// Toggle FAQ answers
        function toggleFAQ(num) {
            const faq = document.getElementById(faq${num});
            faq.classList.toggle('hidden');
        }

        // Show help modal
        function showHelpOptions() {
            document.getElementById('helpModal').classList.remove('hidden');
        }

        // Close help modal
        function closeHelpModal() {
            document.getElementById('helpModal').classList.add('hidden');
        }

        // Show safety plan section
        function showSafetyPlan() {
            document.getElementById('safetyPlan').classList.remove('hidden');
            document.getElementById('helpModal').classList.add('hidden');
            document.getElementById('safetyPlan').scrollIntoView({ behavior: 'smooth' });
        }

        // Emergency call functions
        function callEmergency() {
            if (confirm('Você será redirecionado para ligar para a polícia (190). Deseja continuar?')) {
                window.location.href = 'tel:190';
            }
        }

        function call180() {
            if (confirm('Você será redirecionado para ligar para a Central de Atendimento à Mulher (180). Deseja continuar?')) {
                window.location.href = 'tel:180';
            }
        }

        function call181() {
            if (confirm('Você será redirecionado para ligar para o Disque Denúncia (181). Deseja continuar?')) {
                window.location.href = 'tel:181';
            }
        }

        // Hide page content if safety exit is pressed quickly (double click)
        let lastClick = 0;
        document.querySelector('.safety-exit').addEventListener('click', function(e) {
            const now = new Date().getTime();
            if (now - lastClick < 300) { // Double click within 300ms
                document.body.innerHTML = '<div class="h-screen flex items-center justify-center bg-gray-100"><p class="text-gray-500">Você saiu do site com segurança.</p></div>';
            }
            lastClick = now;
        });