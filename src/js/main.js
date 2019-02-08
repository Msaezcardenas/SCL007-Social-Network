import {saveUser} from './dataMolu.js' 

// Se declara función para registrar usuarios//
document.getElementById("signIn").addEventListener("click", signIn)
function signIn(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // codigo desde firebase para crear usuario nuevo//
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
        verficar()
    })

    // si la función no se cumple se  ejecutará un error//
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}
// Se declara función para ingresar una vez registrado//
document.getElementById("login").addEventListener("click", login)

function login (){
    let email2 = document.getElementById('email2').value;
    let password2 = document.getElementById('password2').value;

    firebase.auth().signInWithEmailAndPassword(email2, password2)

    .then(function(){
        console.log('Ingresado');
    })

    // si no se cumple alguna condición se ejecutara un error//
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      }); 
}

//Esta función monitorea si hay un nuevo registro de usuario o si hay una sesión abierta//
// se agrega export para utilizar la función en data.js

export const stateChanged = function (){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe usuario activo')
            aparece(user);
          // Si el usuario existes
          let displayName = user.displayName;

          let email = user.email;

          console.log('*****************');
          console.log(user.emailVerified)
          console.log('*****************');

          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
          saveUser(email, uid);
          // ...
        } else {
          // User is signed out.
          console.log('no existe usuario activo')
          // ...
        }
      });
}
//con esta línea declaro que al ejecutarse main.js se ejecutará automaticamente stateChanged//
//observador();

//Se declara función que aparecera cuando hay un usuario activo//
function aparece(user){
    let userDos = user;
    let contenido = document.getElementById('contenido');
    if(user.emailVerified){
        contenido.innerHTML = `
        <p>Bienvenido!</p>
        <button onclick="cerrar()">Cerrar sesión</button>
        `;
    }
}

//función para cerrar sesión//
function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...')
    })
    .catch(function(error){
        console.log(error)
    })
}

//función que envía email de verificación//
function verficar(){
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      // Email sent.
      console.log('Enviando correo...');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
}
//se crea funcion para registro usuario
document.getElementById("signIn").addEventListener("click", registerUser);
function registerUser(){
    document.getElementById("userLogin").style.display = "block";
    document.getElementById("userRegister").style.display = "block";

}
/*se agrega para mostrar el div del registro y ocultar el div del login*/
document.getElementById("registerNew").addEventListener("click",registerDiv);
function registerDiv(){
    document.getElementById("userLogin").style.display = "none";
    document.getElementById("userRegister").style.display = "block";
}
document.getElementById("login").addEventListener("click", showNavbar);
function showNavbar(){
    document.getElementsByClassName("navInicio").style.display = "block";
}
