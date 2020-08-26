// Write a program that would print all the numbers from 1 to 255
function Print255() {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
}
// Print255();

// Write a program that would print all the odd numbers from 1 to 1000
function OnlyOdd() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

// OnlyOdd();

// Write a program that would print the sum of all the odd numbers from 1 to 5000
function PrintSum() {
  let sum = 0;
  for (let i = 0; i <= 5000; i++) {
    sum += i;
  }
  console.log(sum);
  // return sum
}
// console.log(PrintSum());
// PrintSum();

function IterateArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const dog = [3, 2, 5, 6, 7, 2, 10, 456, 3];
// IterateArray(dog);

// This is a function that tells if a linked list has a loop or not
function HasLoop() {
  if (this.isEmpty() || this.head.next == null) {
    return false;
  }

  const walker = this.head;
  const runner = walker.next;

  while (runner != null && runner.next != null) {
    if (walker == runner) {
      return true;
    }
    walker = walker.next;
    runner = runner.next.next;
  }
  return false;
}
// Write a function that takes in an array and will return the highest number in that array.
function FindMax(arr) {
  var Max = arr[0];

  if (arr.length == 0) {
    console.log("This array is empty");
    return;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > Max) {
      Max = arr[i];
    }
  }
  return Max;
}
// console.log(FindMax(dog));

// Write a fucntion that takes in an array and returns the average of the values in the array.
function FindAverage(arr) {
  var sum = 0;
  var avg = 0;

  if (arr.length == 0) {
    console.log("This array is empty so the average is 0");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  avg = sum / arr.length;
  return avg;
}
const cat = [];
// console.log(FindAverage(cat));

// Write a function that takes in a number, identifies the odd numbers and creates a new array with all of the odd numbers.

function HowOdd(num) {
  var OddArray = [];

  for (let i = 0; i <= num; i++) {
    if (i % 2 != 0) {
      OddArray.push(i);
    }
  }
  // console.log(OddArray);
  return OddArray;
}

// HowOdd(255);

// Write a program that takes an array and returns the number of values in that array whose value is greater than y.

function HowGreat(arr, num) {
  var y = num;
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      sum += 1;
    }
  }
  console.log(sum);
  return sum;
}
// const testArr = [1, 3, -1, 5, -9, 7, 10, 5, 25, -8];
// HowGreat(testArr, 2)

// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that squares each value in the array.

function Squared(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
  return arr;
}
// Squared(testArr);

// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0.
function NoNegatives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
  return arr;
}
// NoNegatives(testArr);

// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, minimum value in the array as well as the average values in the array.

function MaxMinAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var avg = 0;
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;
  // console.log(avg, max, min)
  return [avg, min, max];
}
// console.log(MaxMinAvg(testArr));

function ShiftVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    if (arr[i] == undefined) {
      arr.pop(arr[i]);
      arr.push(0);
    }
  }
  console.log(arr);
  return arr;
}
// ShiftVals(testArr);

function NumToString(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  console.log(arr);
  return arr;
}

// NumToString(testArr);

function RandomArr() {
  let x = [];

  for (let i = 0; i < 10; i++) {
    x.push(Math.floor(Math.random() * 100));
  }
  console.log(x);
  return x;
}

// RandomArr();

function SwapArr(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  console.log(arr);
  return arr;
}

// SwapArr(testArr);
// const testArr = [1,3,-1,5,-9,7,10,5,25,-8]

function reverseArr(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr)
  return arr;
}

// reverseArr(testArr);
const testArr = [1,3,-1,5,-9,7,10,5,25,-8]

function InsertHere(arr, place, newNum)
{
    for(let i = 0; i<arr.length; i++)
    {
        if(i == place)
        {
            arr[i] = newNum
        }
    }
    console.log(arr)
    return arr
}

// InsertHere(testArr, 2, 3)

function NoNegatives (arr)
{
    var negativeCount = 0;
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i] < 0)
        {
            negativeCount ++;
        }
        else{
            arr[i - negativeCount] = arr[i]
        }
      }
        while(negativeCount--)
        {
            arr.pop();
        }
   
    console.log(arr)
    return arr
}

NoNegatives(testArr);
