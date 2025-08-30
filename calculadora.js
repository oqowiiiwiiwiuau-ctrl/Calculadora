//calculadora con la programación orientada a objetos 
const uno=document.getElementById('btn-1');
const dos=document.getElementById('btn-2');
const tres=document.getElementById('btn-3');
const cuatro=document.getElementById('btn-4');
const cinco=document.getElementById('btn-5');
const seis=document.getElementById('btn-6');
const siete=document.getElementById('btn-7');
const ocho=document.getElementById('btn-8');
const nueve=document.getElementById('btn-9');
const cero=document.getElementById('btn-0');

let suma=document.getElementById('btn-plus');
let resta=document.getElementById('btn-minus');
let producto=document.getElementById('btn-multiply');
let division=document.getElementById('btn-divide');
let clear=document.getElementById('btn-clear');
let igual=document.getElementById('btn-equal');

const pantalla=document.getElementById('resultado');
let valor1='';
//Varibles globales---------------------------->
let primero=0;
let segundo=0;
//La función
uno.addEventListener('click',function(){
    valor1+=1;
    pantalla.value=valor1;
});
dos.addEventListener('click',function(){
    valor1+=2;
    pantalla.value=valor1;
});
tres.addEventListener('click',function(){
    valor1+=3;
    pantalla.value=valor1;
});
cuatro.addEventListener('click',function(){
    valor1+=4;
    pantalla.value=valor1;
});
cinco.addEventListener('click',function(){
    valor1+=5;
    pantalla.value=valor1;
});
seis.addEventListener('click',function(){
    valor1+=6;
    pantalla.value=valor1;
});
siete.addEventListener('click',function(){
    valor1+=7;
    pantalla.value=valor1;
});
ocho.addEventListener('click',function(){
    valor1+=8;
    pantalla.value=valor1;
});
nueve.addEventListener('click',function(){
    valor1+=9;
    pantalla.value=valor1;
});
cero.addEventListener('click',function(){
    valor1+=0;
    pantalla.value=valor1;
});

function suma_valor(x,y){
    return x+y;
}
function resta_valor(x,y){
    return x-y;
}
function producto_valor(x,y){
    return x*y;
}
function division_valor(x,y){
    if(y>0){
        return x/y;
    }else if(y===0){
        pantalla.value='SixtaxError';
    }
}
//Boleanos 
let bolean_suma=false;
let bolean_resta=false;
let bolean_producto=false;
let bolean_division=false;

//la función suma---------------
suma.addEventListener('click',function(){
    let agregar=parseInt(document.getElementById('resultado').value);
    primero=agregar;
    pantalla.value='';
    valor1='';
    agregar=0;
    bolean_suma=true;
});

resta.addEventListener('click',function(){
    let agregar=parseInt(document.getElementById('resultado').value);
    primero=agregar;
    pantalla.value='';
    valor1='';
    agregar=0;
    bolean_resta=true;
})

producto.addEventListener('click',function(){
    let agregar=parseInt(document.getElementById('resultado').value);
    primero=agregar;
    pantalla.value='';
    valor1='';
    agregar=0;
    bolean_producto=true;
})

division.addEventListener('click',function(){
    let agregar=parseInt(document.getElementById('resultado').value);
    primero=agregar;
    pantalla.value='';
    valor1='';
    agregar=0;
    bolean_division=true;
})
//Clear--->limpiar los valores globales
clear.addEventListener('click',function(){
    primero=0;
    segundo=0;
    pantalla.value='';
})

//la función igual-----------------
igual.addEventListener('click',function(){
    let agregar=parseInt(document.getElementById('resultado').value);
    segundo=agregar;
    //declaramos un valor para la suma
    if(bolean_suma==true){
        let sumatoria=suma_valor(primero,segundo);
        pantalla.value=sumatoria;
    }else if(bolean_resta==true){
        let resta_accion=resta_valor(primero,segundo);
        pantalla.value=resta_accion;
    }else if(bolean_producto==true){
        let producto_accion=producto_valor(primero,segundo);
        pantalla.value=producto_accion;
    }else if(bolean_division==true){
        let division_accion=division_valor(primero,segundo);
        pantalla.value=division_accion;
    }


    bolean_suma=false;
    bolean_resta=false;
    bolean_producto=false;
    bolean_division=false;  
});
