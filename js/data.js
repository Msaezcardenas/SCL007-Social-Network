
//Para trabajar el DOM//
// console.log("Hola")

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

    showMessageFromFirebase();

}
//mostrando mensaje de base de datos, ref=referencia
function showMessageFromFirebase(){
    refmessage = firebase.database().ref().child("mensaje");
    refmessage.on("value",function(snap){
        let todosLosMensajes = "";
        document.getElementById("messageBackground").innerHTML ="";
        let datos = snap.val();
        //aqui se dibujan los padres
        for(var key in datos){
            if(datos[key].Eliminado === 0){
             todosLosMensajes += "<div class='divMuro'></br>" + datos[key].Nombre + " : " + datos[key].Mensaje+" <img src='imagenes/eliminar.png' class='imgMuroBorrar' onclick=updateDelete('"+key+"')>" +" <img src='imagenes/palta.png' class='imgMuro' onclick=sumLike('"+key+"')>" + datos[key].Like +" <img src='imagenes/comm.png' class='imgMuro' onclick=answerMessage('"+key+"')>";
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
    console.log("dfdfdf");
    let addLike = 0;
    refmessageLike = firebase.database().ref().child("mensaje").child(keySum);
    refmessageLike.on("value",function(snap){
        addLike = snap.val().Like;
    });
    refmessageLike.update({
    Like:addLike+1
    });

}
//para que el modal se cierre
window.onclick = function(event) {
    let modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // evento listener para el modal
  let span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
  document.getElementById("btnModal").addEventListener("click", cerrarModal)
  function cerrarModal(){
    let modal = document.getElementById("myModal");
    let usuario=document.getElementById("nameResponse").value;
    let mensaje=document.getElementById("mesageResponse").value;
    if(usuario != "" && usuario != null && mensaje != "" && mensaje != null)
    {
        console.log(mensaje);
        console.log(usuario);   
        refmessageAnswer= firebase.database().ref().child("mensaje").child(keyAnswerMessage);
        refmessageAnswer.push({Mensaje:mensaje, Nombre:usuario, Eliminado:0,Principal:0,Like:0});
        keyAnswerMessage="";
    }
    else
    {
        modal.style.display = "none";
        alert("El mensaje o el usuario no puede estar en blanco");
    }
    modal.style.display = "none";
  }
//usuario será el nombre y correo de usuaro registrado
let keyAnswerMessage;
function answerMessage(keyAnswer){
    //let messageAnswer = prompt("Respuesta");
    keyAnswerMessage=keyAnswer;
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
}
//Envía datos a Firebase
function sendDataToFirebase(event){
    event.preventDefault();
    if(event.target.mensaje.value != null && event.target.mensaje.value != "" && event.target.nombre.value != "" && event.target.nombre.value!= null){
        refmessage.push({Mensaje: event.target.mensaje.value, Nombre:event.target.nombre.value, Eliminado:0,Principal:0,Like:0});
    }
    else
    {
        alert("Mensaje y/o Usuario no puede estar en balnco");
    }
    

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