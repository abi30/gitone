var allCars=JSON.parse(cars);

// console.log(allCars);
for(let i= 0; i<allCars.length;i++){


    // create card div
var carContainer=document.createElement("div");
carContainer.setAttribute("id","carContainer"+[i]);
document.getElementById("container").appendChild(carContainer);

// create cardmini div


var cardMini = document.createElement("div");
cardMini.setAttribute("id","cardMini"+[i]);
document.getElementById("carContainer"+[i]).appendChild(cardMini);

var imgMini= document.createElement("img");
imgMini.setAttribute("src",allCars[i].image);
document.getElementById("cardMini"+[i]).appendChild(imgMini);

// var imgMiniText=document.createElement("P");
// var imgMiniTextNode=document.createTextNode(allCars[i].carBrand);
// imgMiniText.appendChild(imgMiniTextNode);
// document.getElementById("cardMini"+[i]).appendChild(imgMiniText);


var imgMiniText = document.createElement("p");
var imgMiniTextNode = document.createTextNode(allCars[i].carBrand);
imgMiniText.appendChild(imgMiniTextNode);
document.getElementById("cardMini" + [i]).appendChild(imgMiniText);


// create cardmaxi div

var cardMaxi = document.createElement("div");
cardMaxi.setAttribute("id","cardMaxi"+[i]);
document.getElementById("carContainer"+[i]).appendChild(cardMaxi);

var imgMaxi= document.createElement("img");
imgMaxi.setAttribute("src",allCars[i].image);
document.getElementById("cardMaxi"+[i]).appendChild(imgMaxi);


var textContainer=document.createElement("p");
textContainer.setAttribute("id","textContainer"+[i]);
document.getElementById("cardMaxi"+[i]).appendChild(textContainer);


var imgMaxiText=document.createElement("p");
var imgMaxiTextNode=document.createTextNode(allCars[i].carBrand);
// imgMaxiText.setAttribute()
imgMiniText.appendChild(imgMaxiTextNode);
document.getElementById("textContainer"+[i]).appendChild(imgMaxiText);


var imgMaxiDetailText=document.createElement("p");
var imgMaxiDetailTextNode=document.createTextNode("Production Year:"+allCars[i].productionYear);
imgMaxiDetailText.appendChild(imgMaxiDetailTextNode);
document.getElementById("textContainer"+[i]).appendChild(imgMaxiDetailText);

var imgMaxiPrice=document.createElement("p");
var imgMaxiPriceNode=document.createTextNode("$"+allCars[i].price);
imgMaxiPrice.appendChild(imgMaxiPriceNode);
document.getElementById("textContainer"+[i]).appendChild(imgMaxiPrice);

}

let cardMinis=document.querySelectorAll("[id*=cardMini]");
let cardMaxis=document.querySelectorAll("[id*=cardMaxi]");
let cardContainers=document.querySelectorAll("[id*=cardContainer]");

// console.log(cardMinis);

for(let i =0;i < cardMinis.length;i++){
cardMinis[i].addEventListener("click",()=>{

    cardMaxis[i].style.display="flex";
    cardContainers[i].setAttribute("style","width:100%;");
    cardMinis[i].style.display="none";
});

cardMaxis[i].addEventListener("click",()=>{
    cardMinis[i].style.display="block";
    cardContainers[i].setAttribute("style",  "width: auto;");
    cardMaxis[i].style.display="none";
});


}

