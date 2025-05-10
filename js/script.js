// script.js - Adicione este código em um arquivo separado ou dentro de <script> no HTML

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const contactForm = document.querySelector('form');
    
    // Adiciona evento de submit
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio padrão
        
        // Validação da mensagem (campo obrigatório)
        const message = document.getElementById('mensagem').value.trim();
        if (message === '') {
            showAlert('Por favor, escreva sua mensagem', 'error');
            return;
        }
        
        // Simula envio (em produção, substitua por AJAX/Fetch)
        showAlert('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        
        // Reseta o formulário (opcional)
        contactForm.reset();
    });
    
    // Função para mostrar feedback visual
    function showAlert(message, type) {
        // Remove alertas anteriores
        const existingAlert = document.querySelector('.form-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Cria elemento de alerta
        const alertDiv = document.createElement('div');
        alertDiv.className = `form-alert ${type}`;
        alertDiv.textContent = message;
        
        // Estilos dinâmicos
        alertDiv.style.padding = '15px';
        alertDiv.style.margin = '20px 0';
        alertDiv.style.borderRadius = '5px';
        alertDiv.style.fontWeight = 'bold';
        
        if (type === 'error') {
            alertDiv.style.backgroundColor = '#ffebee';
            alertDiv.style.color = '#c62828';
            alertDiv.style.border = '1px solid #ef9a9a';
        } else {
            alertDiv.style.backgroundColor = '#e8f5e9';
            alertDiv.style.color = '#2e7d32';
            alertDiv.style.border = '1px solid #a5d6a7';
        }
        
        // Insere antes do formulário
        contactForm.parentNode.insertBefore(alertDiv, contactForm);
        
        // Remove automaticamente após 5 segundos
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
    
    // Validação básica de e-mail em tempo real (opcional)
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email !== '' && !validateEmail(email)) {
                this.style.borderColor = '#c62828';
                showAlert('Por favor, insira um e-mail válido', 'error');
            } else {
                this.style.borderColor = '#ddd';
            }
        });
    }
    
    // Função auxiliar para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});