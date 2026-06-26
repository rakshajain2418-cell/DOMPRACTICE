let wrapper = document.querySelector(".wrapper")
let red = document.querySelector(".red")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let input = document.getElementById("input")
let btn = document.getElementById("btn")
let mytext = document.querySelector(".mytext")


red.addEventListener("click", ()=>{
    wrapper.style.backgroundColor="red"
})

yellow.addEventListener("click", ()=>{
    wrapper.style.backgroundColor="yellow"
})

green.addEventListener("click", ()=>{
    wrapper.style.backgroundColor="green"
})

blue.addEventListener("click", ()=>{
    wrapper.style.backgroundColor="blue"
})

btn.addEventListener("click", ()=>{
   let value = input.value;
   mytext.textContent=value;
   input.value = ""
})