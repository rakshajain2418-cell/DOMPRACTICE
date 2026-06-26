const wrapper = document.querySelector(".wrapper")
const btn = document.getElementById("btn")
console.log(10);

// btn.addEventListener("click", ()=>{
//     let r = Math.floor(Math.random() * 255) + 1;
//     let g = Math.floor(Math.random() * 255) + 1;
//     let b = Math.floor(Math.random() * 255) + 1;
//     wrapper.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })

setInterval(() => {
     let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    wrapper.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}, 1000);