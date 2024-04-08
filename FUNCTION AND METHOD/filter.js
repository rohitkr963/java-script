let arr = [3,2,5,6,7];

let newArray=arr.filter((val) =>
{
    return val%2===0;
});

console.log(newArray)