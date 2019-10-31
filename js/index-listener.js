var contador=0;
var ini;

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

