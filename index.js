let firstReveal = document.getElementById("question_1")
let reveal1 = true
let reveal2 = true
let reveal3 = true
firstReveal.addEventListener("click", function(){
  
    if(reveal1){
        firstReveal.parentElement.classList.remove("h-8", "overflow-hidden")
        firstReveal.parentElement.classList.add("h-fit")
        reveal1 = false
    }
    else{
        firstReveal.parentElement.classList.add("h-8", "overflow-hidden")
        firstReveal.parentElement.classList.remove("h-fit")
        reveal1 = true
    }
})


let secondReveal = document.getElementById("question_2")

secondReveal.addEventListener("click", function(){
    if(reveal2){
        secondReveal.parentElement.classList.remove("h-8", "overflow-hidden")
        secondReveal.parentElement.classList.add("h-fit")
        reveal2 = false
    }
    else{
        secondReveal.parentElement.classList.add("h-8", "overflow-hidden")
        secondReveal.parentElement.classList.remove                                                                                                                                                                                                                                                                                                                                                                                                                                                               ("h-fit")
        reveal2 = true
    }
})


let thirdReveal = document.getElementById("question_3")

thirdReveal.addEventListener("click", function(){
    if(reveal3){
    thirdReveal.parentElement.classList.remove("h-8", "overflow-hidden")
    thirdReveal.parentElement.classList.add("h-fit")
    reveal3 = false
    }
    else
    {
    thirdReveal.parentElement.classList.add("h-8", "overflow-hidden")
    thirdReveal.parentElement.classList.remove("h-fit")
    reveal3 = true
    }
})
