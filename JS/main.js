const btnGuardar = document.getElementById("btnGuardar");
const txtNombre = document.getElementById("txtNombre");
const alertValidaciones = document.getElementById("alertValidaciones");

btnGuardar.addEventListener("click", function(event){
  event.preventDefault();
  alertValidaciones.innerHTML = "";
  alertValidaciones.style.display = "none";

  // Validar que el nombre tenga al menos 3 caracteres o no sean solo números
  if (txtNombre.value.length < 3 || !isNaN(txtNombre.value)) {
    alertValidaciones.innerHTML = "El nombre no es correcto o es inválido"; // Muestra en el bloque de la alerta el mensaje
    alertValidaciones.style.display = "block";
    return false;
  } // if
  
  // Guarda en localStorage el nombre dado
  localStorage.setItem("nombre", txtNombre.value);
  alertValidaciones.style.display = "none"; // Oculta la alerta después de guardar
}); // btnGuardar
