// Mensagem ao enviar formulário de contato
const formulario = document.querySelector("form");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Mensagem enviada com sucesso!");

        formulario.reset();
    });
}

// Mensagem para agendamento de doações
const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
    if (botao.textContent.includes("Agendar")) {
        botao.addEventListener("click", function(event) {
            event.preventDefault();

            alert("Solicitação enviada com sucesso! Entraremos em contato.");
        });
    }
});

// Destaque da página atual no menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#FFD700";
        link.style.fontWeight = "bold";
    }
});