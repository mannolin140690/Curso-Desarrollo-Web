var esfera;
var w;
var h;

probandoOrientacion();

function probandoOrientacion(){
    if(!window.requestAnimationFrame){
        window.requestAnimationFrame=(function(){
            return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback, element){
                window.setTimeout(callback,1000/60);
            }
        })();
    }
}

function detonaEsfera(){
    esfera=document.getElementById("esfera");
    w=innerWidth;
    h=innerHeight;

    esfera.style.left =(w/2)-50 +"px";
    esfera.style.top =(h/2)-50 +"px";

    esfera.velocity={x:0, y:0};
    esfera.position={x:0, y:0};
    
    if(window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation",function(event){
            esfera.velocity.y=Math.round(event.beta);
            esfera.velocity.x=Math.round(event.gamma);
        });
    }
    else    
        alert("Dispositivo no soporta orientación");
    
    update();
}

function update(){
    
    var mueveX=esfera.velocity.x;
    var mueveY=esfera.velocity.y;

    esfera.position.x+=esfera.velocity.x;
    esfera.position.y+=esfera.velocity.y;
    
    if(esfera.position.x> (w-100) && esfera.velocity.x>0){
        esfera.position.x=w-100;
    }

    if(esfera.position.x< 0 && esfera.velocity.x<0){
        esfera.position.x=0;
    }

    if(esfera.position.y> (h-100) && esfera.velocity.y>0){
        esfera.position.y=h-100;
    }

    if(esfera.position.y< 0 && esfera.velocity.y<0){
        esfera.position.y=0;
    }

    esfera.style.top=esfera.position.y+"px";
    esfera.style.left=esfera.position.x+"px";

    esfera.style.width=mueveX*10 +"px";
    esfera.style.height=mueveY*10 +"px";
    //esfera.style.boxShadow=mueveX+"px " +mueveY+"px 30px black";

    esfera.style.transform= "scale(1,0.7)";
    
    requestAnimationFrame(update);
}