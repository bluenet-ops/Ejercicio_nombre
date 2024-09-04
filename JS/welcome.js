const alertMensaje = document.getElementById("alertMensaje");
const btnEliminar = document.getElementById("btnEliminar");

window.addEventListener("load", function(event){
  const nombre = localStorage.getItem("nombre");
  
  if (nombre != null) {
    alertMensaje.innerHTML = `Hola, ${nombre}, bienvenido/a de nuevo`; // Mostrar mensaje de bienvenida con el nombre
    alertMensaje.style.display = "block"; // Mostrar alerta de bienvenida solo si hay nombre
  } else {
    alert("Regresa a index para ingresar tu nombre"); // Mostrar alerta en navegador para mostrar mensaje
    location.href = "index.html"; // Regresa a la página principal
  }
}); // window load

btnEliminar.addEventListener("click", function(event){
  event.preventDefault();
  localStorage.removeItem("nombre");
  location.href = "index.html";
}); // btnEliminar
