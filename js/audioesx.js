const audioes = document.getElementById('audioes').addEventListener("click",desEscalados);
function desEscalados() {
	var sonido = new Audio("audio/escalados.mp3");
	// sonido.pause();
	sonido.play();
}