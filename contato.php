<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitização e validação dos dados recebidos
    $nome = htmlspecialchars(trim($_POST['nome']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $mensagem = htmlspecialchars(trim($_POST['mensagem']));

    // Verifica se os campos obrigatórios foram preenchidos
    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo "Por favor, preencha todos os campos obrigatórios.";
        exit;
    }

    // Configuração do e-mail
    $to = "seuemail@dominio.com"; // Substitua pelo seu e-mail
    $subject = "Novo contato do site";
    $body = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";
    $headers = "From: $email";

    // Envio do e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem. Tente novamente mais tarde.";
    }
}
?>