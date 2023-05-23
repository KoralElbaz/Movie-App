const findFirstOne = (arr) => {
    let left = 0;
    let right = arr.length -1 ;
    let result = -1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);

        if(arr[mid] === 1){
            result = mid;
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return result;
} 

const arr = [1, 1, 0, 1, 1, 1, 1];
const index = findFirstOne(arr);
console.log(index);  // Output: 3