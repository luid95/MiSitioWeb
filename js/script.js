// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el formulario y el cuerpo de la tabla
  const form = document.getElementById('contact-form');
  const tableBody = document.querySelector('table tbody');

  // Maneja el evento 'submit' del formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previene la recarga de la página

    // Obtiene los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const color = document.getElementById('color').value;

    // Crea una nueva fila para la tabla
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${nombre}</td>
      <td>${edad}</td>
      <td>${color}</td>
    `;

    // Agrega la nueva fila al cuerpo de la tabla
    tableBody.appendChild(newRow);

    // Limpia los campos del formulario
    form.reset();

    // Muestra un mensaje en la consola (opcional)
    console.log('Datos agregados a la tabla:', { nombre, edad, color });
  });
});
