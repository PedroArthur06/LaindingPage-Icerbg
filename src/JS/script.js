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

  const swiper = new Swiper('.works.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 250,  // Aumenta a profundidade para destacar o centro
      modifier: 1.2,  // Ajusta o tamanho relativo dos slides
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});
