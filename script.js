function abrirCarta(){

let carta=document.getElementById("carta")

if(carta.style.display==="block"){

carta.style.display="none"

}else{

carta.style.display="block"

}

}

// contador relacionamento

function atualizarContador(){

let inicio=new Date("2023-12-06")

let agora=new Date()

let diff=agora-inicio

let dias=Math.floor(diff/(1000*60*60*24))

let anos=Math.floor(dias/365)

let meses=Math.floor((dias%365)/30)

let diasRestantes=dias%30

document.getElementById("contador").innerHTML=

anos+" anos "+
meses+" meses "+
diasRestantes+" dias ❤️"

}

setInterval(atualizarContador,1000)

atualizarContador()

// carrossel fotos

let index=0

setInterval(()=>{

let slider=document.querySelector(".slider")

index++

if(index>=slider.children.length){

index=0

}

slider.scrollTo({

left:330*index,
behavior:"smooth"

})

},3000)

// chuva de corações

function chuvaCoracoes(){

for(let i=0;i<60;i++){

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.animationDuration=(Math.random()*3+2)+"s"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},5000)

}

}

// estrelas fundo

const canvas=document.getElementById("stars")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<200;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.3

})

}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(s=>{

s.y+=s.speed

if(s.y>canvas.height){

s.y=0

}

ctx.beginPath()

ctx.arc(s.x,s.y,s.size,0,Math.PI*2)

ctx.fill()

})

requestAnimationFrame(drawStars)

}

drawStars()
