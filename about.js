document.addEventListener("DOMContentLoaded",()=>{


  var typed = new Typed('#element', {
      strings: ["About me."],
      typeSpeed: 50,
    });
   


let bar = document.querySelector("#Bar");
    let list = document.querySelector(".itemList");
   let remove = document.querySelector("#close");
    if(bar)
   {
    bar.addEventListener("click",()=>{
      list.classList.add("slider");
    })
   }
   
   if(remove)
   {
    remove.addEventListener("click",()=>{
      list.classList.remove("slider");
    })
   }

})



   