window.addEventListener('load', preloadImages);
const list = document.getElementById('listainicial');
const listl = document.getElementById('listaleft');
const listr = document.getElementById('listarigth');
const btreiniciar = document.getElementById('reiniciar');
const btverificar = document.getElementById('validar');
// Sortable.create(list,{
// 	animation: 150,
// 	chosenClass: "seleccionado",
// 	ghostClass: "fant",
// 	dragClass: "drag"
// });

// new Sortable(list,{
// 	animation: 150,
// 	chosenClass: "seleccionado",
// 	ghostClass: "fant",
// 	dragClass: "drag"
// })
btreiniciar.addEventListener('click',newLoadSide);
var ventana = document.getElementById('overlay');
var emergente = document.getElementById('emergente');
var pnlaviso = document.getElementById('felicitacion');
var pmensaje = document.getElementById('mesage');
var imagenes = new Array();

function preloadImages(){
    var nimagenes = ['ang.png','ang2.png','ang3.png','ang4.png','ang5.png','ang6.png',
    'ang7.png','angulo.png','angulo1.png','angulo2.png','angulo3.png','angulo4.png', 'circ.png',
    'circ1.png','circ2.png','circ3.png','circ5.png','circ6.png',
    'circulo.png','circulo1.png','circulo2.png','circulo3.png','circulo4.png',
    'circulo5.png','circulo6.png','circulo7.png'];
    var path = './images/drag/';
    var total = nimagenes.length;
    var i;
    for(i=0;i<total;i++){
        var nImages = new Image();
        nImages.src = path+nimagenes[i];
        imagenes.push(nImages);
    }
    newLoadSide();
    newSrta();
}

function newLoadSide(){
    var seleccionados = new Array();
    var selec;
    var i;
    for(i=0;i<6;i++){
        selec = Math.floor(Math.random()*26);
        seleccionados.push(selec);
    }
    var j = 1;
    var path = 'imagen';
    for(i=0;i<seleccionados.length;i++){
        document.getElementById(path+j).src=imagenes[seleccionados[i]].src;
        if(seleccionados[i]>=0 && seleccionados[i]<7 && seleccionados[i]!=1) document.getElementById(path+j).setAttribute("name","fangulo");
        else if (seleccionados[i]>=7 && seleccionados[i]<12) document.getElementById(path+j).setAttribute("name","angulo");
        else if (seleccionados[i]>=12 && seleccionados[i]<18) document.getElementById(path+j).setAttribute("name","fcirculo");
        else if (seleccionados[i]>=18)document.getElementById(path+j).setAttribute("name","circulo");
        j++;
    }
    Regresarvalores();
}

function newSrta(){
    new Sortable(list, {
            group: 'shared', // set both lists to same group
            animation: 150,
            chosenClass: "seleccionado",
            ghostClass: "fant",
            dragClass: "drag"
        });

    new Sortable(listl, {
            group: 'shared', // set both lists to same group
            animation: 150,
            chosenClass: "seleccionado",
            ghostClass: "fant",
            dragClass: "drag"
            // refreshPositions 
        });

    new Sortable(listr, {

            group: 'shared', // set both lists to same group
            animation: 150,
            chosenClass: "seleccionado",
            ghostClass: "fant",
            dragClass: "drag"
        });
}

btverificar.addEventListener('click',revisar);
function revisar(){
    var j =1;
    var path = 'imagen';
    var i;
    var estado = new Array();
    var nolist = document.querySelectorAll('.obje');
    // console.log(nolist.length);
    // console.log("Entro a muchos");
    for(i=0;i<nolist.length;i++){
        // console.log("Entro a muchos");
        // console.log("entro a las puras imagenes");
        // var ubicado=nolist[i].firstChild
        var hijos = nolist[i].childNodes;
        var ubicado = hijos[1];
        var par = nolist[i].parentNode;
        console.log(par);   
        console.log(ubicado);
        if((ubicado.name == 'fangulo' || ubicado.name == 'circulo') && (par.name=='grupoerror'))estado.push(true);
        else {
            if(ubicado.name =="angulo" && par.name=="grupoan") estado.push(true);
            else{
                if(ubicado.name =="fcirculo" && par.name=="grupocir") estado.push(true);
                else estado.push(false);
            }
        }
        console.log(estado[i]);
    }
    console.log(nolist.length);
    console.log(estado);
    ValidadEnPantall(estado);

}

function ValidadEnPantall(estadoss){
    var i ;
    var ac = 'Aciertos';
    // for(i=0;estadoss.length;i++){
    //     document.write(estadoss[i]);
    // }
    document.getElementById('aviso').innerHTML = ac;
    var docs = document.querySelectorAll('#int');;
    var aciertos = 0;
    for(i=0;i<estadoss.length;i++){
        if(estadoss[i] == true){
            aciertos++;
            docs[i].classList.add('confirmado');
        }else docs[i].classList.add('eror');
        // docs.classList.add('confirmado');
    }
    mensajesF(aciertos);
    ventana.classList.add('active');
    emergente.classList.add('active');
}

function Regresarvalores(){
    var ac = "";
    document.getElementById('aviso').innerHTML = ac;
    var docs = document.querySelectorAll('#int');;
    for(i=0;i<6;i++){
        docs[i].classList.remove('confirmado');
        docs[i].classList.remove('eror');
    }
}   

const btncerrar = document.getElementById('cerrar').addEventListener('click',cerrarVentanaEmergente);
function cerrarVentanaEmergente(){
    ventana.classList.remove('active');
    emergente.classList.remove('active');
}

function mensajesF(acietos){
    var vfelicitaciones = ['¡Felicidades.!','¡Excelente!','¡Buen trabajo!','Perfecto'];
    var mfeli = ['Fue sencillo. Puedes aprender más temas continúa','Eres un PRO, nada te detiene','Sigue así, aprendiendo ',]
    var vmedios = ['¡Casi lo logras.!','¡Puedes mejorar.!','¡Puedes dar más.!'];
    var mmedios =['Cerca, vamos a mejorara más.','Vamos de nuevo, puedes mejorar','Vamos por todo','Si puedo mejorar, comó de que no'];
    var ventu = ['¡Un poco más.!','¡Si puedes!','¡No te rindas!','Un intento más'];
    var sec;
    if(acietos==6){
        sec = Math.floor(Math.random()*4);
        pnlaviso.innerHTML = vfelicitaciones[sec];
        sec = Math.floor(Math.random()*3);
        pmensaje.innerHTML = mfeli[sec];
    }else{ 
        if(acietos >=3){
            sec = Math.floor(Math.random()*3);
            pnlaviso.innerHTML = vmedios[sec];
            sec = Math.floor(Math.random()*4);
            pmensaje.innerHTML = mmedios[sec];
        }else{
            sec = Math.floor(Math.random()*4);
            pnlaviso.innerHTML = ventu[sec];
            sec = Math.floor(Math.random()*4);
            pmensaje.innerHTML = mmedios[sec];
        }
    }
    
}
// <script type="text/javascript" src="jquery-3.5.1.min.js"></script>