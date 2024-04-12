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