let count =0;
const countvowel=(str) =>{
    
    for(const char of str)
    {
        if(char ==='a'|| char ==='e' || char ==='i'|| char ==='o' || char ==='u')
        {
            count++;
        }
    }
    console.log(count);
}

countvowel('skjadfaknvc');