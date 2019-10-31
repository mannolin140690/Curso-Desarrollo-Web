var contador=0;
var ini;
initLocation();

function cargador(){
    var lienzo=document.getElementById("lienzo");
    var lienzo1=lienzo.getContext('2d');

    lienzo1.fillStyle="rgba(0,0,200,0.6)";
    lienzo1.fillRect(45,70,150,100);
    
    lienzo1.beginPath();
    lienzo1.fillStyle="rgba(200,0,0,0.6)";
    lienzo1.strokeStyle="rgba(0,200,0,0.8)";
    lienzo1.moveTo(200,150);
    lienzo1.lineTo(300,150);
    lienzo1.lineTo(200,400);
    lienzo1.closePath();
    lienzo1.fill();
    lienzo1.stroke();

    lienzo1.fillStyle="rgba(100,100,255,0.6)";
    lienzo1.font='italic 30px sans-serif';
    lienzo1.fillText("Hola Mundo!",70,350);
    
    iniciaAnim();
}
function iniciaAnim(){
    ini= setInterval(dibujar,20);
}

function dibujar(){
    var elLienzo =retornarLienzo("miLienzo");
    if(elLienzo){
        elLienzo.shadowOffsetX=30;
        elLienzo.shadowOffsetY=30;
        elLienzo.shadowBlur=50* contador*0.5;
        elLienzo.shadowColor="rgba("+contador*0.25+",200,100,0.5)";
        elLienzo.fillStyle="rgba(200,"+contador*0.25+",100,0.8)";
        //elLienzo.fillRect(100,50,250,150);
        elLienzo.rotate(contador*Math.PI/180);
        elLienzo.strokeStyle = 'rgba(0, 255, 255, 0.4)';        
        elLienzo.fillRect(100,50,contador*0.25,150);
        elLienzo.scale(-1,1);
        


        contador++;
        console.log(contador);

        if(contador>=500 && contador>1000){
            elLienzo.lineJoin = "round";
            elLienzo.lineWidth = "cornerRadius";
            
            //alert('El contador ha llegado a 500');
        }
        else if(contador==1000){
            alert('Contador deteniendose en 1000');
            clearInterval(ini);
        }
    }
}

function retornarLienzo(x){
    var elCanvas=document.getElementById(x);
    if(elCanvas.getContext){
        var elLienzo=elCanvas.getContext('2d');
        return elLienzo;
    }
    else{
        return false;
    }
}


/*Mapas*/
function initLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(googleMapIt, gestionaErrores);
    }
    else{
        alert("Tu navegador no soporta geolocalizacion");
    }
}

function googleMapIt(p){
    var latitud= p.coords.latitude;
    var longitud= p.coords.longitude;

    var detalle = 'latitud:' + latitud + 'longitud: '+ longitud;
    console.log('Te encuentras en las coordenadas:_' + detalle);
    var map='https://maps.google.com/maps?&z=15&output=embed&ll='+latitud +','+longitud;

    document.getElementById('geoMap').src=map;
}

function gestionaErrores(err){
    if(err.code==0)
        alert("Error desconocido");
    if(err.code==1)
        alert("No has permitido compartir tu ubicacion");
    if(err.code==2)
        alert("No es posible leer tu ubicación, quizas no estas en un sitio seguro");
    if(err.code==3)
        alert("Timeout.. Tiempo de espera agotado");

}


