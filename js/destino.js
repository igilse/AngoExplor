document.addEventListener("DOMContentLoaded", function () {
    const filtro = document.getElementById("tipo-destino");
    const cards = document.querySelectorAll(".card");
  
    filtro.addEventListener("change", function () {
      const tipoSelecionado = filtro.value;
  
      cards.forEach(card => {
        if (tipoSelecionado === "todos" || card.getAttribute("data-tipo") === tipoSelecionado) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  