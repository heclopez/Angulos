// window.addEventListener("load",function(){
// 	document.getElementById("audiosd").addEventListener("click",sonarPajaros);
// });

// function sonarPajaros(){
// 	var sonido = document.createElement("iframe");
// 	sonido.setAttribute("src","../audio/definicion.mp3");
// 	document.body.appendChild(sonido);
// 	document.getElementById("play").removeEventListener("click",sonarPajaros);
// }


const audioarc = document.getElementById('audioar');
const audiodef =document.getElementById('audiosd');
const audiotip = document.getElementById('audiotip');
const audioes = document.getElementById('audioes');

audioarc.addEventListener("click",desArcos);
audiodef.addEventListener("click",desDefinicion);
audiotip.addEventListener("click",desTipos);
audioes.addEventListener("click",desEscalados);
function desDefinicion(){

	var sonido = new Audio("audio/definicion.mp3");
	sonido.play();
}

function desArcos(){
	var sonido = new Audio("audio/Arcos.mp3");
	sonido.play();	
}

function desTipos() {
	var sonido = new Audio("audio/Angulos.mp3");
	sonido.play();
}

function desEscalados() {
	var sonido = new Audio("audio/escalados.mp3");
	sonido.play();
}