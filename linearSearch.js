//Linear search


let array = [10,17,18,24,28,29,32,38,44,47,50,52,59,63,75,78,82,88,92,99];
let key = 47;

function linearSearch(array, key) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === key)
            return i;
    }
    return -1;  // if element not found
}

let res = linearSearch(array, key);
if(res === -1)
    console.log( 'The element is not found');
else
    console.log('The element found at position ' + res);