function abrirCarta(){

let carta = document.getElementById("carta")

if(carta.style.display === "block"){
carta.style.display = "none"
}else{
carta.style.display = "block"
}

}

// contador relacionamento

function atualizarContador(){

let inicio = new Date("2024-01-01")

let hoje = new Date()

let diff = hoje - inicio

let dias = Math.floor(diff/(1000*60*60*24))

document.getElementById("contador").innerHTML =
dias + " dias juntos ❤️"

}

setInterval(atualizarContador,1000)

atualizarContador()

// corações caindo

function criarCoracao(){

const heart = document.createElement("div")

heart.className = "heart"

heart.innerHTML = "❤️"

heart.style.left = Math.random()*100+"vw"

heart.style.animationDuration = (Math.random()*3+2)+"s"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},5000)

}

setInterval(criarCoracao,300)

// estrelas animadas

const canvas = document.getElementById("stars")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let stars = []

for(let i=0;i<150;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2
})

}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(s=>{

ctx.beginPath()
ctx.arc(s.x,s.y,s.size,0,Math.PI*2)
ctx.fill()

})

requestAnimationFrame(drawStars)

}

drawStars()
