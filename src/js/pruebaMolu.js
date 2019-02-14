// const saveUserIntoDatabase = () => {
//     const userId = firebase.auth().currentUser.uid;
//     const userEmail = firebase.auth().currentUser.email;
//     saveUser(userId, userEmail);
//   }
  
//   const saveRecipesIntoDatabase = () => {
//   const recipeTitle = titleRecipe.value;
//   const recipeImage = imgUrl;
//   const ownerName = firebase.auth().currentUser.email;
//   const insRecipe = insRecipes.value;
//   const recipeIngredients = idIngredients.value;
//   const recipeServes = idServes.value;
//   saveRecipe(recipeTitle, recipeImage, ownerName, insRecipe, recipeIngredients, recipeServes);
//   }
  
  const readRecipesFromDatabase = () => {
    readRecipes((recipe)=>{
        recipeContainer.innerHTML =
        `
        <br><br>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${recipe.val().image}" alt="Recipe Image" style="width:300px;height:300px;"><br>
              <h3 class="title-class">${recipe.val().title}</h3><br>
              <p>${recipe.val().owner}</p><br>
              <p>Porciones: ${recipe.val().serves}</p><br>
            </div>
            <div class="flip-card-back">
              <p>Ingredientes</p><br>
              <p>${recipe.val().Ingredients}</p><br>
              <p>Instrucciones</p>
              <p>${recipe.val().recipes}</p><br>
   
            </div>
          </div>
        </div>
        <br><br>
        `+recipeContainer.innerHTML;
    });
   }

   let newRecipeKey = "";
   const saveRecipe = (recipeTitle, recipeImage, ownerName, insRecipe, recipeIngredients, recipeServes, prepTime, recipeCost) => {
     newRecipeKey = firebase.database().ref('mensaje').child('recetas').push().key;
   
     firebase.database().ref(`recipe/${newRecipeKey}`).set({
       title : recipeTitle,
       image : recipeImage,
       owner : ownerName,
       recipes: insRecipe,
       Key: newRecipeKey,
       Ingredients: recipeIngredients,
       serves: recipeServes,
   
     });
   };