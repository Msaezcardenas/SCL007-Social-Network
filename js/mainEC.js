//PARA PROBAR VINCULOS. OK
// console.log("hola");




//PARA CUMPLIR CON REQUERIMIENTO "PERMITE EDITAR PUBLICACIÓN EN EL MISMO LUGAR (IN PLACE)"
document.getElementById("editarMensaje").addEventListener("click",
  (event) => {
    event.preventDefault();

    // PERMITE CAMBIAR EL ID ORIGINAL DADO EN INDEX.HTML POR EL ID DADO UNA VEZ CREADA LA PUBLICACIÓN
    let selectedContainer = document.getElementById('idArticle').id="numero de ID MURO FIREBASE";

    let newMessage = document.getElementById("numero de ID MURO FIREBASE");
    let editText =document.getElementById("editable").innerText;
    console.log(editText); //PARA COMPROBAR QUE LEE EL VALOR DEL PARRAFO ORIGINAL

    newMessage.innerHTML ="";

    newMessage.innerHTML +=`
     <div class="container">
       <div class="row">
         <div class="col-8">
           <h1>Mi muro</h1>
           <textarea name="editMensaje" id="editMensaje" cols="80" rows="8"> ${editText} </textarea>
           <button id="guardarMensaje">Guardar mensaje</button>
           <button id="privacidad">Privacidad</button>
           <button id="likes">Likes</button>
         </div>
         <div class="col-4">
         <img id="idImg" src="./assets/img/stock-vector-vegan-friendly-icon.jpg" alt="">
         </div>
       </div>`
  })
