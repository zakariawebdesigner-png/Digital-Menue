import { MakeBigger,MakeSmaller } from "./Ui/Cards-Transition.js";
import { container } from "./Ui/Menue-Elements.js";
import { Slide } from "./Ui/Sliding-Carousel.js";
import { buttons } from "./Ui/Menue-Elements.js";




window.addEventListener("click",()=>{
      MakeSmaller();
});


document.addEventListener("scroll",(event)=>{

   

    let ContainerScrolling = event.target;

    MakeBigger(ContainerScrolling,event);

  

},true);



buttons.forEach(button => {

    button.addEventListener("click", () => {

      Slide(button);

    });

});




let Menues = container.querySelectorAll(".Menue1,.Menue2,.Menue3,.Menue4,.Menue5,.Menue6");


Menues.forEach(menue => {

  let Cards = menue.querySelectorAll(".CoffeeDiv");

  let CardsLength = Cards.length;

  if(CardsLength % 2 != 0){

    let LastCard = Cards[CardsLength-1];

    LastCard.style.gridColumn = "1 / -1";

    LastCard.style.justifySelf = "center";

  }

});