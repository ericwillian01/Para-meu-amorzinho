// ABRIR CARTA
function abrirCarta(){
let carta = document.getElementById("carta");

if(carta.style.display === "block"){
carta.style.display = "none";
}else{
carta.style.display = "block";
}
}



// CONTADOR DE TEMPO JUNTOS
function atualizarContador(){

let inicio = new Date("2024-01-01 00:00:00"); // coloque a data que vocês começaram
let agora = new Date();

let diferenca = agora - inicio;

let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
let horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
let minutos = Math.floor((diferenca / (1000 * 60)) % 60);
let segundos = Math.floor((diferenca / 1000) % 60);

document.getElementById("contador").innerHTML =
dias + " dias " +
horas + " horas " +
minutos + " minutos " +
segundos + " segundos";

}

setInterval(atualizarContador,1000);



// SLIDER DE FOTOS AUTOMÁTICO
let index = 0;

function trocarFotos(){

let fotos = document.querySelectorAll(".slider img");

for(let i = 0; i < fotos.length; i++){
fotos[i].style.display = "none";
}

index++;

if(index > fotos.length){
index = 1;
}

fotos[index-1].style.display = "block";

setTimeout(trocarFotos,3000);

}

trocarFotos();



// CHUVA DE CORAÇÕES ❤️
function chuvaCoracoes(){

alert("Eu também te amo ❤️");

for(let i = 0; i < 80; i++){

let coracao = document.createElement("div");

coracao.innerHTML = "❤️";
coracao.style.position = "fixed";
coracao.style.top = "-10px";
coracao.style.left = Math.random() * 100 + "vw";
coracao.style.fontSize = (20 + Math.random() * 30) + "px";
coracao.style.animation = "cair 5s linear";
coracao.style.zIndex = "9999";

document.body.appendChild(coracao);

setTimeout(() => {
coracao.remove();
},5000);

}

}



// FUNDO ESTRELADO
let canvas = document.getElementById("stars");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrelas = [];

for(let i = 0; i < 150; i++){

estrelas.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
raio: Math.random() * 2
});

}

function desenharEstrelas(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "white";

for(let i = 0; i < estrelas.length; i++){

let e = estrelas[i];

ctx.beginPath();
ctx.arc(e.x, e.y, e.raio, 0, Math.PI * 2);
ctx.fill();

}

requestAnimationFrame(desenharEstrelas);

}

desenharEstrelas();



// AJUSTAR TELA
window.addEventListener("resize",function(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});
