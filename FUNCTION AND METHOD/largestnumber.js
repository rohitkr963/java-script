let arr = [2,3,4,5,9,6];

let newarr=arr.reduce((prev,curr) => {

    return prev < curr ? prev : curr;
})

console.log(newarr)
