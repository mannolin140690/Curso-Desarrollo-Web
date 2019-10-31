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
