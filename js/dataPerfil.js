//graceUser, funcion para calcular la grasa corporal
document.getElementById("calc").addEventListener("click",GrasaCorporal);
function GrasaCorporal(){
    let heightUsers = document.getElementById("heightUsers").value;
    heightUsers=String(heightUsers).replace(',','.'); 
    let weightUsers = document.getElementById("weightUsers").value;
    let ageUser=document.getElementById("ageUser").value;
    let generoUser=document.getElementById("genero").value;
    heightUsers=parseFloat(heightUsers)*parseFloat(heightUsers);
    let imc=(parseFloat(weightUsers)/parseFloat(heightUsers)).toFixed(2);
    let grase=0;
    let levelActivity=document.getElementById("activity").value;
    if(generoUser==="1"){//femenino  formula 1.2+imc+0,23+edad-5.4
        grase=(1.2*parseFloat(imc))+(0.23*parseInt(ageUser))-5.4;
    }
    else{//masculino formula 1.2 *imc+0.23*edad-10.8-5.4
        grase=(1.2*parseFloat(imc))+(0.23*parseInt(ageUser))-10.8-5.4;
    }
    //calculos de grasa magra
    let masaMagra=weightUsers-grase;
    //requerimiento energético total
    let requestEnergyTotal=(370+21.6*(weightUsers*(1-(grase/100))))*levelActivity;
    //mostramos los resultados
    document.getElementById("imcUsers").innerHTML=imc+"%";
    document.getElementById("grasaUser").innerHTML=grase.toFixed(2)+"%";
    document.getElementById("magraUser").innerHTML=masaMagra.toFixed(2);
    document.getElementById("retUser").innerHTML=parseInt(requestEnergyTotal)  + "Kcal/día";
}
//suma de proteínas en tabla nutricional
document.getElementById("calcTable").addEventListener("click",totalCalories);
function totalCalories(){
    console.log("hola");
    let sumQuantFruit=document.getElementById("quantFruit").value;
    let sumQuantProtein=document.getElementById("proteinFruit").innerHTML;
    let sumQuantGrease=document.getElementById("greaseFruit").innerHTML;
    let sumQuantcarbohydrate=document.getElementById("carbohydrateFruit").innerHTML;
    let sumTotalFruit= (sumQuantFruit*sumQuantProtein)+(sumQuantFruit*sumQuantGrease)+(sumQuantFruit*sumQuantcarbohydrate);
    let sumQuantVegetables=document.getElementById("quantVegetables").value;
    let sumTotalVegetables= (sumQuantVegetables*sumQuantProtein)+(sumQuantVegetables*sumQuantGrease)+(sumQuantVegetables*sumQuantcarbohydrate);
    let sumquantWhiteCereals=document.getElementById("quantWhiteCereals").value;
    let sumTotalWhiteCereals= (sumquantWhiteCereals*sumQuantProtein)+(sumquantWhiteCereals*sumQuantGrease)+(sumquantWhiteCereals*sumQuantcarbohydrate);
    let sumquantquantHighCereals=document.getElementById("quantHighCereals").value;
    let sumTotalHighCereals= (sumquantquantHighCereals*sumQuantProtein)+(sumquantquantHighCereals*sumQuantGrease)+(sumquantquantHighCereals*sumQuantcarbohydrate);
    let sumquantBread=document.getElementById("quantBread").value;
    let sumTotalBread= (sumquantBread*sumQuantProtein)+(sumquantBread*sumQuantGrease)+(sumquantBread*sumQuantcarbohydrate);
    let sumquantMoldBread=document.getElementById("quantMoldBread").value;
    let sumTotalMoldBread= (sumquantMoldBread*sumQuantProtein)+(sumquantMoldBread*sumQuantGrease)+(sumquantMoldBread*sumQuantcarbohydrate);
    let sumquantPotatoes=document.getElementById("quantPotatoes").value;
    let sumTotalPotatoes= (sumquantPotatoes*sumQuantProtein)+(sumquantPotatoes*sumQuantGrease)+(sumquantPotatoes*sumQuantcarbohydrate);
    let sumquantDriedFruitsSeeds=document.getElementById("quantDriedFruitsSeeds").value;
    let sumTotalDriedFruitsSeeds= (sumquantDriedFruitsSeeds*sumQuantProtein)+(sumquantDriedFruitsSeeds*sumQuantGrease)+(sumquantDriedFruitsSeeds*sumQuantcarbohydrate);
    let sumquantDriedFruits=document.getElementById("quantDriedFruits").value;
    let sumTotalDriedFruits= (sumquantDriedFruits*sumQuantProtein)+(sumquantDriedFruits*sumQuantGrease)+(sumquantDriedFruits*sumQuantcarbohydrate);
    let sumquantAvocado=document.getElementById("quantAvocado").value;
    let sumTotalAvocado= (sumquantAvocado*sumQuantProtein)+(sumquantAvocado*sumQuantGrease)+(sumquantAvocado*sumQuantcarbohydrate);
    let sumquantOils=document.getElementById("quantOils").value;
    let sumTotalOils= (sumquantOils*sumQuantProtein)+(sumquantOils*sumQuantGrease)+(sumquantOils*sumQuantcarbohydrate);
    let sumquantMilk=document.getElementById("quantMilk").value;
    let sumTotalMilk= (sumquantMilk*sumQuantProtein)+(sumquantMilk*sumQuantGrease)+(sumquantMilk*sumQuantcarbohydrate);
    let sumquantSoyDrink=document.getElementById("quantSoyDrink").value;
    let sumTotalSoyDrink= (sumquantSoyDrink*sumQuantProtein)+(sumquantSoyDrink*sumQuantGrease)+(sumquantSoyDrink*sumQuantcarbohydrate);
    let sumquantSoyYogurt=document.getElementById("quantSoyYogurt").value;
    let sumTotalSoyYogurt= (sumquantSoyYogurt*sumQuantProtein)+(sumquantSoyYogurt*sumQuantGrease)+(sumquantSoyYogurt*sumQuantcarbohydrate);
    let sumquantSoyMeat=document.getElementById("quantSoyMeat").value;
    let sumTotalSoyMeat= (sumquantSoyMeat*sumQuantProtein)+(sumquantSoyMeat*sumQuantGrease)+(sumquantSoyMeat*sumQuantcarbohydrate);
    let sumquantSoyBurger=document.getElementById("quantSoyBurger").value;
    let sumTotalSoyBurger= (sumquantSoyBurger*sumQuantProtein)+(sumquantSoyBurger*sumQuantGrease)+(sumquantSoyBurger*sumQuantcarbohydrate);
    let sumquantTofu=document.getElementById("quantTofu").value;
    let sumTotalTofu= (sumquantTofu*sumQuantProtein)+(sumquantTofu*sumQuantGrease)+(sumquantTofu*sumQuantcarbohydrate);


    document.getElementById("total").innerHTML= sumTotalFruit+sumTotalVegetables+sumTotalWhiteCereals+sumTotalHighCereals+sumTotalBread+sumTotalMoldBread+sumTotalPotatoes
    +sumTotalDriedFruitsSeeds+sumTotalDriedFruits+sumTotalAvocado+sumTotalOils+sumTotalMilk+sumTotalSoyDrink+sumTotalSoyYogurt+sumTotalSoyMeat+sumTotalSoyBurger+sumTotalTofu + " Calorías";

    //a document falta la suma de todos los alimentos despues de la fruta
}