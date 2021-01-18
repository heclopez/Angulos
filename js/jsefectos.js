var ventana = document.getElementById('overlay');
var emergente = document.getElementById('popup');
const btnabrir = document.getElementById('btncreditos').addEventListener('click',abrirVentanaEmergente);
function abrirVentanaEmergente(){
	ventana.classList.add('active');
	emergente.classList.add('active');
}


const btncerrar = document.getElementById('cerrar').addEventListener('click',cerrarVentanaEmergente);
function cerrarVentanaEmergente(){
	ventana.classList.remove('active');
	emergente.classList-remove('active');
}