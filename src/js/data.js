//Para trabajar el DOM//

import {stateChanged} from './mainMolu.js';
window.onload = initialize;

let formMessage;
let refmessage;
let messageBackground;
//inicializa la conección entre base de datos y javascript
function initialize(){
    formMessage = document.getElementById("formMessage");
    formMessage.addEventListener("submit", sendDataToFirebase, false);
    messageBackground = document.getElementById("messageBackground");
    initializeFirebase();
    stateChanged();

    showMessageFromFirebase();

}
//mostrando mensaje de base de datos
function showMessageFromFirebase(){
    refmessage = firebase.database().ref().child("mensaje");
    refmessage.on("value",function(snap){
        let todosLosMensajes = "";
        document.getElementById("messageBackground").innerHTML ="";
        let datos = snap.val();
        //aqui se dibujan los padres
        for(var key in datos){
            if(datos[key].Eliminado === 0){
             todosLosMensajes += "</br>" + datos[key].Nombre + " : " + datos[key].Mensaje+" <input type='button' value='X' onclick=updateDelete('"+key+"')>" +" <input type='button' value='Like'  onclick=sumLike('"+key+"')>" + datos[key].Like +" <input type='button' value='Respuesta' onclick=answerMessage('"+key+"')>";
             //ahora que dibujamos los padres, dibujaremos a los hijos
             let refMessageChild=firebase.database().ref().child("mensaje").child(key);
             refMessageChild.on("value",function(snap){
                 let datoChild=snap.val();
                 for(var keyChild in datoChild){
                    if(datoChild[keyChild].Eliminado === 0){
                        todosLosMensajes += "</br>" + datoChild[keyChild].Nombre + " : " + datoChild[keyChild].Mensaje+" <input type='button' value='X' onclick=updateDeleteChild('"+key+"','"+keyChild+"')>";

                    }
               }
             });
            }
        }
      //  messageBackground.innerHTML = todosLosMensajes;
     document.getElementById("messageBackground").innerHTML += todosLosMensajes;
    })
}
//cambia estado del mensaje(actualiza si la persona borra)
function updateDelete(valor){
    if(confirm("Desea eliminar mensaje")){
        refmessage = firebase.database().ref().child("mensaje").child(valor);
        refmessage.update({
        Eliminado:1

        });
    }

}

//cambia estado del mensaje del mensaje hijo(actualiza si la persona borra)
function updateDeleteChild(valor,valorChild){
    if(confirm("Desea eliminar mensaje")){
        refmessage = firebase.database().ref().child("mensaje").child(valor).child(valorChild);
        refmessage.update({
        Eliminado:1
        });
    }
 }

function sumLike(keySum){
    let addLike = 0;
    refmessageLike = firebase.database().ref().child("mensaje").child(keySum);
    refmessageLike.on("value",function(snap){
        addLike = snap.val().Like;
    });
    refmessageLike.update({
    Like:addLike+1
    });

}
//usuario será el nombre y correo de usuaro registrado
function answerMessage(keyAnswer){
    let email = "a@a.cl";
    let messageAnswer = prompt("Respuesta");
    refmessageAnswer= firebase.database().ref().child("mensaje").child(keyAnswer);
    refmessageAnswer.push({Mensaje:messageAnswer, Nombre:'Usuario2', Eliminado:0,Principal:0,Correo:email,Like:0});
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
	firebase.initializeApp(config);}
