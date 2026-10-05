
     
    


function Slide(button){

    const targetID = button.dataset.target;
        const targetMenu = document.getElementById(targetID);
           

      targetMenu.scrollIntoView({
            behavior: "smooth",
                 inline: "center",
            block: "nearest"   // prevents vertical page jumping
            
            });

         targetMenu.style.paddingLeft="0.2rem";
         


}

export{Slide}