const audiodef =document.getElementById('audiosd').addEventListener("click",desDefinicion);

function desDefinicion(){

	var sonido = new Audio("audio/definicion.mp3");
	sonido.play();
}