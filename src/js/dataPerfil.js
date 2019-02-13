
//graceUser
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
    document.getElementById("total").innerHTML=sumTotalFruit;
    //a document falta la suma de todos los alimentos despues de la fruta
}