//Binary Search Program

let array = [10,17,18,24,28,29,32,44,47,50,52,59,63,71,75,78,82,88,92,97,99];

let key = 18;


function binarySearch(array, key) {
    let start = 0;
    let end = array.length - 1;
    let mid;
    while(start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if(array[mid] === key)
            return mid;
        if(array[mid] < key)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
}

let result = binarySearch(array,key);
if(result == -1)
    console.log('The element does not exist here');
else
    console.log('The element is at index ' + (result + 1)); 