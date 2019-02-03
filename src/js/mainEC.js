

//PARA CUMPLIR CON REQUERIMIENTO "PERMITE EDITAR PUBLICACIÓN EN EL MISMO LUGAR (IN PLACE)"
let originalId="idArticle";
document.getElementById("editarMensaje").addEventListener("click",
  (event) => {
    event.preventDefault();

   let newId="numeroID"+1;

    // PERMITE CAMBIAR EL ID ORIGINAL DADO EN INDEX.HTML POR EL ID DADO UNA VEZ CREADA LA PUBLICACIÓN
    let selectedContainer = document.getElementById(originalId).id=newId;
    console.log(newId);
     let newMessage = document.getElementById(newId);
    let editText =document.getElementById("editable").innerText;
    console.log(editText); //PARA COMPROBAR QUE LEE EL VALOR DEL PARRAFO ORIGINAL


    document.getElementById("buttonHidden").style.display = 'none';

    newMessage.innerHTML ="";

    newMessage.innerHTML +=`
     <div class="container">
       <div class="row">
         <div class="col-8">
           <h1>Mi muro</h1>
           <textarea name="editMensaje" id="editMensaje" cols="50" rows="8"> ${editText} </textarea>
           <button id="guardarMensaje">Guardar mensaje</button>
           <button id="privacidad">Privacidad</button>
           <button id="likes">Likes</button>

       </div>`
       originalId=newId;


   document.getElementById("guardarMensaje").addEventListener("click",
    (event) => {
      event.preventDefault();

      let editMensaje =document.getElementById("editMensaje").value;
      console.log(editMensaje);//PARA COMPROBAR QUE LEE EL VALOR DEL NUEVO PARRAFO

      document.getElementById("buttonHidden").style.display = 'block';
      newMessage.innerHTML ="";

      newMessage.innerHTML +=`
       <div class="container">
         <div class="row">
           <div id ="textoyboton" class="col-8">
             <h1>Mi muro</h1>
              <p id="editable">${editMensaje}</p>
              </div>
           <div class="col-4">
           <img id="idImg" src="./assets/img/stock-vector-vegan-friendly-icon.jpg" alt="">
           </div>
         </div>

         `
    })
  })
