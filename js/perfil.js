document.addEventListener("DOMContentLoaded", function () {
    const btnEditar = document.getElementById("editar-perfil");
    const btnSair = document.getElementById("logout");
  
    btnEditar.addEventListener("click", function () {
      alert("Funcionalidade de edição ainda será implementada!");
    });
  
    btnSair.addEventListener("click", function () {
      const confirmacao = confirm("Tem certeza que deseja sair?");
      if (confirmacao) {
        window.location.href = "login.html";
      }
    });
  });
  