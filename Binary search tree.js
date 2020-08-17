
function search(arr, val) {

    let min = 0;
    let max = arr.length - 1

    while (min <= max) {

        let middle = Math.floor((min + max) / 2)

        let current_val = arr[middle]

        if (current_val < val) {
            min = middle + 1
        } else if (current_val > val) {
            max = middle - 1
        } else {
            return middle
        }
    }

    return -1;
}


//sorting
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const arr2 = [1, 2, 3, 7, 8, 9, 10, 11, 12, 18, 19, 20];

//unsorted
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


const result = search(arr3, 8);


console.log(result)

