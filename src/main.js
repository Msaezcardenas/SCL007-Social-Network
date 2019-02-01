//Para trabajar el DOM//
// console.log("Hola")

window.onload = initialize;

let formMesagge;
let refmessage;
let messageBackground;
//inicializa la conección entre base de datos y javascript
function initialize(){
    formMessage = document.getElementById("formMessage");
    formMessage.addEventListener("submit", sendDataToFirebase, false);
    messageBackground = document.getElementById("messageBackground");
    initializeFirebase();

    showMessageFromFirebase();

}
//mostrando mensaje de base de datos
function showMessageFromFirebase(){
    refmessage = firebase.database().ref().child("mensaje");
    refmessage.on("value",function(snap){
        let todosLosMensajes = "";
        document.getElementById("messageBackground").innerHTML ="";
        datos = snap.val();
       
        for(var key in datos){
            if(datos[key].Eliminado === 0){ 
             todosLosMensajes += "</br>" + datos[key].Nombre + " : " + datos[key].Mensaje+" <input type='button' value='X' onclick=updateDelete('"+key+"')>";
        }
        if(datos[key].Principal === 1){



        }
        }
      //  messageBackground.innerHTML = todosLosMensajes;
     document.getElementById("messageBackground").innerHTML += todosLosMensajes;
    })
}
//cambia estado del mensaje(actualiza si la persona borra)
function updateDelete(valor){
    refmessage = firebase.database().ref().child("mensaje").child(valor);
    console.log(refmessage);
    refmessage.update({
    Eliminado:1    
    });
}

//Envía datos a Firebase
function sendDataToFirebase(event){
    let email = "a@a.cl";
    event.preventDefault();
    refmessage.push({Mensaje: event.target.mensaje.value, Nombre:event.target.nombre.value, Eliminado:0,Principal:0,Correo:email,Like:0});
    
}
 //Parámetros para conexión de base de datos
function initializeFirebase(){
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