let firstReveal = document.getElementById("question_1")

firstReveal.addEventListener("click", function(){
    firstReveal.parentElement.classList.remove("h-8", "overflow-hidden")
    firstReveal.parentElement.classList.add("h-fit")
})


let secondReveal = document.getElementById("question_2")

secondReveal.addEventListener("click", function(){
    secondReveal.parentElement.classList.remove("h-8", "overflow-hidden")
    secondReveal.parentElement.classList.add("h-fit")
})


let thirdReveal = document.getElementById("question_3")

thirdReveal.addEventListener("click", function(){
    thirdReveal.parentElement.classList.remove("h-8", "overflow-hidden")
    thirdReveal.parentElement.classList.add("h-fit")
})

