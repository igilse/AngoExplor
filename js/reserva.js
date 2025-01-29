document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reserva-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const destino = document.getElementById("destino").value;
      const data = document.getElementById("data").value;
      const pessoas = document.getElementById("pessoas").value;
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
  
      if (!destino || !data || !pessoas || !nome || !email) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      alert(`Reserva confirmada para ${nome} no destino selecionado!`);
      form.reset();
    });
  });
  