let meGusta = 0;
let meGusta1 = 0;
let meGusta2 = 0;

function darMeGusta(){
    meGusta ++;
    alert("¡Gracias por tu voto!");
    document.getElementById("contador").textContent = meGusta;
    console.clear();
    if(meGusta % 5 ==0){
    console.log("Total de me gusta: " + meGusta)
    }
    else{
        console.clear();
    }
}
function darMeGusta1(){
    meGusta1 ++;
    alert("¡Gracias por tu voto!");
    document.getElementById("contador1").textContent = meGusta1;
    console.clear();
     if(meGusta1 % 5 ==0){
    console.log("Total de me gusta: " + meGusta1)
    }
    else{
        console.clear();
    }
}
function darMeGusta2(){
    meGusta2 ++;
    alert("¡Gracias por tu voto!");
    document.getElementById("contador2").textContent = meGusta2;
    console.clear();
     if(meGusta2 % 5 ==0){
    console.log("Total de me gusta: " + meGusta2)
    }
    else{
        console.clear();
    }
}

