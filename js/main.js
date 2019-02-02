function registrar(){
    let email = document.getElementById('email').value;
    let contrasena = document.getElementById('contrasena').value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(function(){
        verficar()
    })
    
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

function ingreso(){
    
    let email2 = document.getElementById('email2').value;
    let contrasena2 = document.getElementById('contrasena2').value;
    
    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe usuario activo')
            aparece(user);
          // User is signed in.
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
          // ...
        } else {
          // User is signed out.
          console.log('no existe usuario activo')
          // ...
        }
      });
}
observador();

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

function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...')
    })
    .catch(function(error){
        console.log(error)
    })
}

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