document.addEventListener(("DOMContentLoaded"),()=>{

 
    var typed = new Typed('#element', {
      strings: [' a frontend developer', 'know Html /Css and JavaScript'],
      typeSpeed: 50,
      backspeed:30,
      backDelay:1000,
      loop:false,

      preStringTyped: function (arrayPos, self)
      {
        if(arrayPos === 1)
      {
        document.querySelector("#am").innerText = "";
      }
      }
    });

   let btn = document.querySelector("#gitHub");

   btn.addEventListener("click",()=>{
    window.location.href = 'https://github.com/Hrisikeshhh';
   })    



   let downloadBtn = document.querySelector("#btnDownload");
    
   downloadBtn.addEventListener("click",()=>{
    const link = document.createElement("a");
    link.href = "projects/img/Hrisikesh.resume.docx";
    link.download = "projects/img/Hrisikesh.resume.docx";

    document.body.appendChild(link);
    
     link.click();
     alert("Download started");
     document.body.removeChild(link);
     })

    //  new script//
    
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
