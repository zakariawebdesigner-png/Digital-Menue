


import { CoffeeCards } from "./Menue-Elements.js"; 

function  MakeBigger(ContainerScrolling,event){
if(event.target.scrollLeft!==0)return;
let AllCards= ContainerScrolling.querySelectorAll(".CoffeeDiv");

AllCards.forEach(Card=>{
    

Card.classList.add("MakeCardBigger");

});


}




function  MakeSmaller(){

CoffeeCards.forEach(Card=>{

Card.classList.remove("MakeCardBigger");

});


    
}


export{MakeBigger,MakeSmaller}