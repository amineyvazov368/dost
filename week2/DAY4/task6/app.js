// body-ni seс
// create div ele
// classlari elave ele(classlist ve ya classname)
// yaratdigin divi body-e append ele
let body=document.querySelector("body");
let newdiv=document.createElement("div");
newdiv.classList.add("card","text-conter")
body.append(newdiv);
let div1=document.createElement("div")
div1.className="card-header";
newdiv.appendChild(div1)
let ul=document.createElement("ul");
ul.classList.add("nav","nav-pills","card-header-pills")
div1.appendChild(ul);

let li1=document.createElement("li")
li1.className="nav-item";
ul.appendChild(li1)
let a1=document.createElement("a")
a1.classList.add("nav-link" ,"active" )
a1.textContent="Active"
a1.setAttribute("href","#")
li1.appendChild(a1)
let li2=document.createElement("li")
li2.className="nav-item";
ul.appendChild(li2)
let a2=document.createElement("a")
a2.classList.add("nav-link" )
a2.textContent="Link"
a2.setAttribute("href","#")
li2.appendChild(a2)
let li3=document.createElement("li")
li3.className="nav-item";
ul.appendChild(li3)
let a3=document.createElement("a")
a3.classList.add("nav-link" ,"disabled" )
a3.textContent="Disabled"
a3.setAttribute("href","#")
li3.appendChild(a3)

let div2=document.createElement("div")
div2.className="card-body"
newdiv.appendChild(div2)
let h5=document.createElement("h5")
h5.className="card-title"
h5.textContent="Special title treatment"
div2.appendChild(h5)
let p=document.createElement("p")
p.className="card-text"
p.textContent="With supporting text below as a natural lead-in to additional content."
div2.appendChild(p)
let a4=document.createElement("a")
a4.setAttribute("aria-disabled","true")
a4.classList.add("btn","btn-primary")
a4.textContent="Go somewhere"
div2.appendChild(a4)