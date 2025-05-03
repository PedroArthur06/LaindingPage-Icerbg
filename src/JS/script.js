document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const servico = document.getElementById("servico").value;

      const mensagem = `Olá! Vi seu perfil no Instagram e gostaria de saber mais sobre os serviços de ar-condicionado.%0A
Nome: ${nome}%0A
E-mail: ${email}%0A
Telefone: ${telefone}%0A
Serviço: ${servico}`;

      const url = `https://wa.me/65981325445?text=${mensagem}`;
      window.open(url, "_blank");
    });
  }
});


