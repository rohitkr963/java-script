let marks=[33,55,89,76,54,23];

let sum=0;

for(let val of marks)
{
    sum=sum+val;
}

let avg=sum/marks.length;

console.log(`the average marks of the student is ${avg}`);