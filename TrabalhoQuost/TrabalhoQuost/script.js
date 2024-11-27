// Função de cadastro
function register() {
    // Obtém os valores dos campos de cadastro
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Verificar se os campos estão preenchidos
    if (email === "" || password === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    // Se tudo estiver ok, podemos fazer um "cadastro" simples
    alert("Cadastro realizado com sucesso! Agora você pode fazer login.");
    window.location.href = "index.html"; // Redirecionar para a página de login após o cadastro
}
