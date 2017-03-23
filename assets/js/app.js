function Mostrar(name,lastname,id,home){
    this.name = name;
    this.lastname = lastname;
    this.id = id;
    this.home = home;

    this.muestra = function(){
      return "<ul>"+"<li>"+"Nombre: " + this.name + "</li>"+
             "<li>"+"Apellido: " + this.lastname + "</li>" +
             "<li>"+"DNI: " + this.id + "</li>" +
             "<li>"+"Dirección: " + this.home + "</li>" + "</ul>"
    };
}

window.addEventListener('load', function(){
  var enviar = document.getElementById("enviar");
  enviar.addEventListener('click',function(e){
    e.preventDefault();
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var dni = document.getElementById("id").value;
    var adress = document.getElementById("adress").value;
    var pattern = /([A-Z]{1}[a-zá-ú]{1,}\s?)/;
    var info = document.getElementById('info');

    var datos = new Mostrar (nombre,apellido,dni,adress);

    if(nombre == "" || apellido == "" || dni < 8 || adress == ""){
      alert("Debe completar todos los campos");}
    else if(!pattern.test(nombre)){
      alert("Ingrese un nombre válido con la primera letra mayúscula");}
    else if(!pattern.test(apellido)){
      alert("Ingrese un apellido válido con la primera letra mayúscula");}
    else if(!pattern.test(adress)){
      alert("Ingrese una dirección con la primera letra en mayúscula");}
    else{ info.innerHTML = datos.muestra();}

  });


});
