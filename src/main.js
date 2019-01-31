//Para trabajar el DOM//
// console.log("Hola")

window.onload = inicializar;
let formulario;
let refMensajes;
let fondoMensajes;

function inicializar(){
    formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", enviarDatosAFirebase, false);
    fondoMensajes = document.getElementById("fondoMensajes");

    inicializarFirebase();

    mostrarMensajesDeFirebase();

}

function mostrarMensajesDeFirebase(){
    refMensajes = firebase.database().ref().child("mensaje");
    refMensajes.on("value",function(snap){
        let todosLosMensajes = "";
        document.getElementById("fondoMensajes").innerHTML ="";
        datos = snap.val();
        for(var key in datos){
            todosLosMensajes += "</br>" + datos[key].Nombre + " : " + datos[key].Mensaje;
        }
      //  fondoMensajes.innerHTML = todosLosMensajes;
        document.getElementById("fondoMensajes").innerHTML += todosLosMensajes;
    })
}


function enviarDatosAFirebase(event){
    event.preventDefault();
    refMensajes.push({Mensaje: event.target.mensaje.value, Nombre:event.target.nombre.value});
    document.getElementsByName("nombre").value="";
    document.getElementsByName("mensaje").value="";
}
function inicializarFirebase(){
  // Initialize Firebase
	let config = {
		apiKey: 'AIzaSyB-jbfNQ2raBjBe0Y8iDER0k1VVQIYx01M',
		authDomain: 'social-network-a15f8.firebaseapp.com',
		databaseURL: 'https://social-network-a15f8.firebaseio.com',
        projectId: 'social-network-a15f8',
        storageBucket: 'social-network-a15f8.appspot.com',
        messagingSenderId: '994003009333'
	};
	// eslint-disable-next-line no-undef
	firebase.initializeApp(config);
}