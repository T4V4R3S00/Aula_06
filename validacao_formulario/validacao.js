const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
    const erro = document.getElementById("erro");

    let mensagemErro = "";

    if (nome.trim() === "") {
        mensagemErro = "O nome não pode estar vazio.";
    }
    else if (!email.includes("@")) {
        mensagemErro = "O email deve conter '@'.";
    }
    else if (idade <= 0) {
        mensagemErro = "A idade deve ser maior que 0.";
    }

    if (mensagemErro !== "") {
        event.preventDefault();
        erro.textContent = mensagemErro;
    } else {
        erro.textContent = "Formulário enviado com sucesso!";
    }
});