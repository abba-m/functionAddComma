/*
0. Check if arg is a number
1. convert num to array
2. reverse num
3. add comma after every 3 nums
4. reverse the array back to origianal
5. convert it back to a single num
*/

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', (e) => addComma(e.target.value));

const addComma = (num) => {
    
    if(isNaN(num)) return output.innerText = "Enter a number";
    //console.log('Starting operation...');
    
    let numArray= num.split("");

    //Checks
    if (numArray[0] == 0) numArray.shift();
    

    let reversedNumArray = numArray.slice().reverse();

    if (reversedNumArray.length > 3) reversedNumArray.splice(3, 0, ',');

    for (let i = 7; i < reversedNumArray.length; i += 4){
        reversedNumArray.splice(i, 0, ',')
    }
    
    numArray = reversedNumArray.reverse().join("");
    output.innerText = numArray;
}

