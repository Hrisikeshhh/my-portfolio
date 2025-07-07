 
//  type.js
 var typed = new Typed('#element', {
      strings: ['Project area.', 'For skill showcase.'],
      typeSpeed: 50,
    });
   
    //querrySelectors!! 
    let nav = document.querySelector("nav");
    let body = document.querySelector("body");
    let parent1 = document.querySelector("#parent1");
    let left = document.querySelector(".left")
    let changeTheme = document.querySelector("#change-theme");
    let Parent2 = document.querySelector("#parent2");

    // logics!!
     let currTheme = "dark";
    changeTheme.addEventListener("click",()=>{
        if(currTheme === "dark" ){
            currTheme = "light";
            body.style.backgroundColor ="rgb(247, 231, 230)";
            parent1.style.backgroundColor = "rgb(247, 231, 230)";
            parent1.style.border = "2px solid black"
            nav.style.backgroundColor = "rgb(245, 206, 203)";
            left.style.color = "black";
            changeTheme.style.color = "black";
            Parent2.style.backgroundColor = "rgb(247, 231, 230)";
            Parent2.style.border = " 2px solid black";
        }
        else
        {
           currTheme = "dark";
           body.style.backgroundColor ="rgb(0, 0, 33)";
            parent1.style.backgroundColor = "rgb(0, 0, 33)";
            parent1.style.border = "2px solid red"
            nav.style.backgroundColor = "rgb(2, 2, 61)";
            left.style.color = "white";
            changeTheme.style.color = "white";
            Parent2.style.backgroundColor = "rgb(0, 0, 33)";
            Parent2.style.border = "2px solid red";
        }
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


   