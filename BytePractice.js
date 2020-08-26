// We want to create a function called linearSearch that will take in two arguments: a number and an array. 
// The function will return the position where the number is located in the array if found if it is not found it will return false.
function linearSearch(number, arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == number)
        {
            console.log(i);
            return i
        }
    }
    console.log(false)
    return false
}

var arr = [24, 8, 23, 3];
// linearSearch(8, arr);   // => 1
// linearSearch(-99, arr); // => false

// Go ahead and implement a function iSum that behaves just like rSum but instead of using recursion to implement the solution it uses iteration.

function iSum(number)
{
    var sum = 0
    for(let i = 0; i <= number; i++)
    {
        sum+= i;
    }
    console.log(sum);
    return sum
}
iSum(5)

function iFactorial(number)
{
    var multVal = 1;
    for(let i = 1; i<= number; i++)
    {
        multVal *= i;
    }
    console.log(multVal)
    return multVal
}

iFactorial(5);

// Same as function above but using recursion
function rFactorial(number)
{
    if(number == 1){
        return 1
    }
    return rFactorial(number-1) * number
}

console.log(rFactorial(5));

