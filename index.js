onBtn= document.getElementById("on-btn");
offBtn = document.getElementById("off-btn")

onBtn.addEventListener("click", function(){
 document.getElementById("red").style.background="red"
 document.getElementById("yellow").style.background="yellow"
 document.getElementById("blue").style.background= "blue"
 document.getElementById("green").style.background="green"
 document.getElementById("purple").style.background="red"
 document.getElementById("pink").style.background="blue"
 
 
})

offBtn.addEventListener("click", function(){
    document.getElementById("red").style.background=""
    document.getElementById("yellow").style.background=""
    document.getElementById("blue").style.background= ""
    document.getElementById("green").style.background=""
    document.getElementById("purple").style.background=""
    document.getElementById("pink").style.background=""
    
})
