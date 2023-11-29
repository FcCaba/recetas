const nombreReceta=document.getElementById("inputNomRec")
const ingredientesReceta=document.getElementById("inputIngre")
const preparacionReceta=document.getElementById("inputPrepa")
const dificultadReceta=document.getElementById("difi")
const calificacionReceta=document.getElementById("califi")
const fechaReceta=document.getElementById("inputFecha")
const imagenReceta=document.getElementById("inputImg");
$("#inputImg").change(function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      $("#imagenMostrada").attr("src", e.target.result).show();
    };
    reader.readAsDataURL(file);
  }
});
$("#datosReceta").click(function () {
    $("tbody").append(`
    <tr>
      <th scope="row">1</th>
      <td>${nombreReceta.value}</td>
      <td>
        <div class="row justify-content-center align-items-center g-2" data-bs-spy="scroll">
          <div class="col-12">
            <h6>Ingredientes:</h6>
            <p>${ingredientesReceta.value}</p>
          </div>
          <div class="col">
            <h6>Preparacion</h6>
            ${preparacionReceta.value}
            cupiditate!
          </div>
        </div>
      </td>
      <td>
        <span class="badge bg-success">${dificultadReceta.value}</span><br>
        <span class="badge bg-success">${calificacionReceta.value}</span>
      </td>
      <td>${fechaReceta.value}</td>
      <td>
        <img src=${imagenReceta.src}
          class="img-fluid align-content-center" alt="image desc" style="width: 15em;">
      </td>
    </tr>
  `);
});

// ---ListaUsuatio------------

const nombreUsuario=document.getElementById('nombreUsuario');
const ApellidoUsuario=document.getElementById('ApellidoUsuario');
const emailUsuario=document.getElementById('emailUsuario');
const inputPassword4=document.getElementById('inputPassword4');
const DireccionUsuario=document.getElementById('DireccionUsuario');
const TelefonoUsuario=document.getElementById('TelefonoUsuario');
const tipoUsuario=document.getElementById('TipoUsuario');

$("#agregarUsuario").click(function () { 
  if (
    nombreUsuario.value.trim() !== '' &&
    ApellidoUsuario.value.trim() !== '' &&
    emailUsuario.value.trim() !== '' &&
    inputPassword4.value.trim() !== '' &&
    DireccionUsuario.value.trim() !== '' &&
    TelefonoUsuario.value.trim() !== '' &&
    tipoUsuario.value.trim() !== ''
  ) {
    $("#listaU").append(
      '<tr>' +
      '<th scope="row">1</th>' +
      '<td>' + nombreUsuario.value + '</td>' +
      '<td>' + ApellidoUsuario.value + '</td>' +
      '<td>' + emailUsuario.value + '</td>' +
      '<td>' + DireccionUsuario.value + '</td>' +
      '<td>' + tipoUsuario.value + '</td>' +
      '<td>' + TelefonoUsuario.value + '</td>' +
      '</tr>'
    );
  } else {
    alert("Llene todos los campos vacíos");
  }
});

// ---ListaUsuatioFIN------------
