let item=[500,200,895,762,541,235];

let i=0;

for(let val of item)
{
    let offer=val/10;
    item[i]=item[i]-offer;
    console.log(`value after offer = ${item[i]}`)
    i++;
}


