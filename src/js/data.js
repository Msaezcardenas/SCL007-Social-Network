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
//mostrando mensaje de base de datos, ref=referencia
function showMessageFromFirebase(){
    refmessage = firebase.database().ref().child("mensaje");
    refmessage.on("value",function(snap){
        let todosLosMensajes = "";
        document.getElementById("messageBackground").innerHTML ="";
        datos = snap.val();
        //aqui se dibujan los padres
        for(var key in datos){
            if(datos[key].Eliminado === 0){
             todosLosMensajes += "<div class='divMuro'></br>" + datos[key].Nombre + " : " + datos[key].Mensaje+" <img src='imagenes/eliminar.png' class='imgMuroBorrar' onclick=updateDelete('"+key+"')>" +" <img src='imagenes/mgusta.jpg' class='imgMuro' onclick=sumLike('"+key+"')>" + datos[key].Like +" <img src='imagenes/comentar.png' class='imgMuro' onclick=answerMessage('"+key+"')>";
             //ahora que dibujamos los padres, dibujaremos a los hijos
             let refMessageChild=firebase.database().ref().child("mensaje").child(key);
             refMessageChild.on("value",function(snap){
                 let datoChild=snap.val();
                 for(var keyChild in datoChild){
                    if(datoChild[keyChild].Eliminado === 0){
                        todosLosMensajes += "</br><a class='aMuro'>" + datoChild[keyChild].Nombre + " : " + datoChild[keyChild].Mensaje+"</a> <img src='imagenes/eliminar.png' class='imgMuroBorrar' onclick=updateDeleteChild('"+key+"','"+keyChild+"')>";
                    }
               }
             });
             todosLosMensajes+="</div></br>";
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
    let messageAnswer = prompt("Respuesta");
    refmessageAnswer= firebase.database().ref().child("mensaje").child(keyAnswer);
    refmessageAnswer.push({Mensaje:messageAnswer, Nombre:'Usuario2', Eliminado:0,Principal:0});
}
//Envía datos a Firebase
function sendDataToFirebase(event){
    event.preventDefault();
    refmessage.push({Mensaje: event.target.mensaje.value, Nombre:event.target.nombre.value, Eliminado:0,Principal:0});

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
