let body = document.querySelector("body")
let header=document.createElement("header")
body.append(header)
let newdiv=document.createElement("div")
newdiv.className="container"
body.append(newdiv)
let nav=document.createElement("nav")
newdiv.append(nav)
let div1=document.createElement("div")
div1.className="title"
nav.append(div1)
let h4=document.createElement("h4")
h4.style.backgroundColor="red"
h4.textContent="Start Bootstrap"
div1.append(h4)
let ul=document.createElement("ul")
ul.className="list"
div1.append(ul)