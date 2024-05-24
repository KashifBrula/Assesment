//Question# 01

const sortArray = (inputArr) => {
    for (let i = 0; i < inputArr.length - 1; i++) {
        for (let j = 0; j < inputArr.length - 1; j++) {
            if (inputArr[j] < inputArr[j + 1]) {
                let temp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = temp;
            }
        }
    }
    return inputArr;
}

const tempArr = [3, 2, 7, 4, 6, 9];
console.log("Sorted Array:", sortArray(tempArr));

// Question# 02

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(`madam is pallindrome:${isPalindrome("madam")}`);
console.log(`doctor is pallindrome:${isPalindrome("doctor")}`);

// Question# 03


const sumOfNum = (array) => {
    let tempNum = 0;
    let tempNum1 = 0;
    for (let num of array) {
        if (num > tempNum) {
            tempNum1 = tempNum;
            tempNum = num
        } else if (num > tempNum1) {
            tempNum1 = num
        }
    }
    return tempNum + tempNum1
}

const array = [3, 7, 1, 5, 11, 19];
console.log(sumOfNum(array));

// Question# 04

function findNumber(array) {
    let maxNum = 0;
    for (let num of array) {
        if (num > maxNum) {
            maxNum = num
        }
    }

    const tempArr = [];
    for (let i = 0; i <= maxNum; i++) {
        tempArr.push(i)
    }

    const numArr = [];
    for (let num of tempArr) {
        if (!array.includes(num)) {
            numArr.push(num)
        }
    }
    return numArr
}
const input = [3, 4, 9, 1, 7, 3, 2, 6];
console.log(findNumber(input));


// Question# 05

function findRepeated(array) {
    const numCount = array.reduce((acc, currVal) => {

        if (acc[currVal]) {
            acc[currVal]++
        } else {
            acc[currVal] = 1
        }
        return acc
    }, {})

    let maxVal = 0;
    let maxCount = 0;

    for (let val in numCount) {
        if (numCount[val] > maxCount) {
            maxVal = val;
            maxCount = numCount[val]
        }
    }
    return `${maxVal} is repeated ${maxCount} times.`;
}
const repeatedArr = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
console.log(findRepeated(repeatedArr));

// Question# 06

function rotateRight(array) {
    const tempVal = array.pop();
    array.unshift(tempVal);

    return array;
}

const myArray = [3, 8, 9, 7, 6];
console.log(rotateRight(myArray)); 
