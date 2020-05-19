/*
0. Check if arg is a number
1. convert num to array
2. reverse num
3. add comma after 3 every num 
4. reverse the array back to origianal
5. convert it back to a single num
*/


const addComma = (num) => {
    
    if(isNaN(num)) return;
    console.log('Starting operation...');
    
    let numArray= num.split("");
    let reversedNumArray = numArray.slice().reverse();

    reversedNumArray.splice(3, 0, ',');

    for (let i = 7; i < reversedNumArray.length; i += 4){
        reversedNumArray.splice(i, 0, ',')
    }
    
    numArray = reversedNumArray.reverse().join("");
    console.log(numArray);
}


addComma('1234567896574764773737373');