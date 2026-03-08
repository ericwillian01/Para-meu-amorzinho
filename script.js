// abrir carta

function abrirCarta(){

let carta = document.getElementById("carta");

if(carta.style.display === "block"){
carta.style.display = "none";
}else{
carta.style.display = "block";
}

}


// contador relacionamento

const inicio = new Date("2023-12-06 00:00:00");

function atualizarContador(){

const agora = new Date();
const diff = agora - inicio;

const dias = Math.floor(diff / (1000*60*60*24));
const horas = Math.floor((diff/(1000*60*60)) % 24);
const minutos = Math.floor((diff/(1000*60)) % 60);
const segundos = Math.floor((diff/1000) % 60);

document.getElementById("contador").innerHTML =
dias+" dias "+
horas+" horas "+
minutos+" minutos "+
segundos+" segundos ❤️";

}

setInterval(atualizarContador,1000);


// slider fotos

let index = 0;
const fotos = document.querySelectorAll(".slider img");

setInterval(()=>{

fotos.forEach(f=>f.style.display="none");

index++;

if(index>=fotos.length){
index=0;
}

fotos[index].style.display="block";

},3000);


// botão eu te amo

function chuvaCoracoes(){

// mensagem

let msg = document.createElement("div");

msg.innerHTML = "Eu também te amo ❤️";

msg.style.position = "fixed";
msg.style.top = "50%";
msg.style.left = "50%";
msg.style.transform = "translate(-50%,-50%)";
msg.style.fontSize = "40px";
msg.style.fontWeight = "bold";
msg.style.textShadow = "0 0 20px red";
msg.style.zIndex = "1000";

document.body.appendChild(msg);

setTimeout(()=>{
msg.remove();
},4000);


// emojis

let emojis = ["🥰","❤️","🫶🏻"];

for(let i=0;i<40;i++){

let emoji = document.createElement("div");

emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

emoji.style.position = "fixed";
emoji.style.top = "-10px";
emoji.style.left = Math.random()*100+"vw";
emoji.style.fontSize = "25px";
emoji.style.animation = "cair 5s linear";

document.body.appendChild(emoji);

setTimeout(()=>{
emoji.remove();
},5000);

}

}


// fundo estrelado

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrelas=[];

for(let i=0;i<200;i++){

estrelas.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
});

}

function desenhar(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

estrelas.forEach(e=>{

ctx.beginPath();
ctx.arc(e.x,e.y,e.r,0,Math.PI*2);
ctx.fill();

e.y += 0.2;

if(e.y > canvas.height){
e.y = 0;
}

});

requestAnimationFrame(desenhar);

}

desenhar();
// estrela cadente

function estrelaCadente(){

let estrela = {
x: Math.random() * canvas.width,
y: 0,
tamanho: 2 + Math.random()*2,
velocidadeX: 6,
velocidadeY: 6
};

function animar(){

ctx.beginPath();
ctx.arc(estrela.x, estrela.y, estrela.tamanho, 0, Math.PI*2);
ctx.fillStyle="white";
ctx.fill();

estrela.x += estrela.velocidadeX;
estrela.y += estrela.velocidadeY;

if(estrela.x < canvas.width && estrela.y < canvas.height){
requestAnimationFrame(animar);
}

}

animar();

}

// aparecer estrela aleatoriamente

setInterval(()=>{

if(Math.random() < 0.4){
estrelaCadente();
}

},4000);
