/* Location & Session Storage*/
function almacena(){
    var texto=document.getElementById("datos").value;
    localStorage.setItem("datos",texto);
}

function obtiene() {
    document.getElementById("datos").value=localStorage.getItem("datos");
}

function borrar(){
    localStorage.removeItem("datos");
    document.getElementById("datos").value="";
}

function almacena_session(){
    var texto_session=document.getElementById("datos_session").value;
    sessionStorage.setItem("datos",texto_session);
}

function obtiene_session() {
    document.getElementById("datos_session").value=sessionStorage.getItem("datos_session");
}

function borrar_session(){
    sessionStorage.removeItem("datos_session");
    document.getElementById("datos_session").value="";
}

/*Mapas*/
function googleMapIt(p){
    var latitud= p.coords.latitude;
    var longitud= p.coords.longitude;

    var detalle = 'latitud:' + latitud + 'longitud: '+ longitud;
    console.log('Te encuentras en las coordenadas:_' + detalle);
    var map='http://maps.google.com/maps?&z=15&output=embed&ll='+latitud +','+longitud;

    document.getElementById('geoMap').src=map;
}

function gestionaErrores(err){

}