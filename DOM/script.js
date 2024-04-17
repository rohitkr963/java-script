let h2 =  document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + ("FROM APNA COLLEGE STUDENT");



let divs = document.querySelectorAll(".box");

let idx=1;

for(div of divs)
{
    div.innerText=`new unique value ${idx}`;
    idx++;

}


let div=document.querySelector("div")
console.log(div);

let id = div.getAttribute("id")
console.log(id)

let name = div.getAttribute("name")
console.log(name);

let para=document.querySelector("p")
console.log(para.getAttribute("class","newclass"));

let newBtn=document.createElement("button")
console.log(newBtn)



let newbtn=document.createElement("newbtn");
newbtn.innerText="click me";

newbtn.style.color="white";
newbtn.style.background="red";

