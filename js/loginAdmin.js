function mostrarImagen() {
    // Obtén el elemento de entrada de tipo archivo
    var inputFile = document.getElementById("inputGroupFile04");

    // Obtén la etiqueta de imagen donde se mostrará la vista previa
    var imgPreview = document.getElementById("imgPreview");

    // Verifica si se ha seleccionado un archivo
    if (inputFile.files && inputFile.files[0]) {
        // Crea un objeto URL para el archivo seleccionado
        var reader = new FileReader();

        // Define una función que se ejecutará cuando la lectura del archivo esté completa
        reader.onload = function (e) {
            // Establece la fuente de la imagen con la URL del archivo
            imgPreview.src = e.target.result;
        };

        // Lee el archivo como una URL de datos
        reader.readAsDataURL(inputFile.files[0]);
    }
    else {
        // Si no se selecciona ningún archivo, borra la vista previa
        imgPreview.src = "";
    }
}
// Obtén el elemento de entrada de tipo archivo
var inputFile = document.getElementById("inputGroupFile04");

// Agrega un evento 'change' al campo de entrada de tipo archivo
inputFile.addEventListener("change", function () {
    // Verifica si se ha seleccionado un archivo
    if (inputFile.files && inputFile.files[0]) {
        // Llama a la función para mostrar la vista previa
        mostrarImagen();
    }
});