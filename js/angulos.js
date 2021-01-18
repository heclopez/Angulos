const audiotip = document.getElementById('audiotip').addEventListener("click",desTipos);
function desTipos() {
	var sonido = new Audio("audio/Angulos.mp3");
	sonido.play();
}