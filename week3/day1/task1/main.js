let minus=document.querySelector(".minus")
let container=document.querySelector(".container")
let pilus=document.querySelector(".pilus")
let span=document.querySelector(".count")
let clear=document.querySelector(".clear")


let count=JSON.parse(localStorage.getItem("counter"))||0;
span.textContent=count
pilus.addEventListener("click",()=>{
    count++
    span.textContent=count
    localStorage.setItem("counter",JSON.stringify(count))
})
minus.addEventListener("click",()=>{
    count--
    span.textContent=count
    localStorage.setItem("counter",JSON.stringify(count))

})
clear.addEventListener("click",()=>{
    count=0
    span.textContent=count
    localStorage.setItem("counter",JSON.stringify(count))
})