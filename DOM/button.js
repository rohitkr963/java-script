let newbtn=document.createElement("newbtn");
newbtn.innerText="click me";

newbtn.style.color="white";
newbtn.style.background="red";
document.querySelector("body").prepend(newbtn);


let para = document.querySelector("p");


let btn1=document.querySelector("#btn1");
btn1.onclick = () =>
{
    console.log("button was clicked")
    let a =24;
    a++;
    console.log(a);
}

let div=document.querySelector("div");
div.onmouseover= () =>
{
    console.log("you are inside div");
}