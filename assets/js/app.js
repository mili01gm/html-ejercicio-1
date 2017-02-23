function Datos() {
    var nombre = document.getElementById("name");
    var apellido = document.getElementById("lastname");
    var dni = document.getElementById("id");
    var adress = document.getElementById("adress");
    var info = document.getElementById("info")

    info.innerHTML =
      "<ul>" + "<li>" + "Nombre: " + nombre.value + "</li>" +
               "<li>" + "Apellido: " + apellido.value + "</li>" +
               "<li>" + "DNI: " + dni.value + "</li>" +
               "<li>" + "Dirección: " + adress.value + "</li>" + "</ul>"

}
