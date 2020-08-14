// Write a program that would print all the numbers from 1 to 255
function Print255(){ 
    for(let i = 1; i<=255; i++){
        console.log(i);
    }
}
// Print255();

// Write a program that would print all the odd numbers from 1 to 1000
function OnlyOdd(){
    for(let i = 1; i<=100; i++){
        if (i%2 != 0){
            console.log(i)
        }
    }
}

// OnlyOdd();

// Write a program that would print the sum of all the odd numbers from 1 to 5000
function PrintSum(){
    let sum = 0;
    for(let i = 0; i<=5000; i++){
        sum+=i;
    }
    console.log(sum)
    // return sum
}
// console.log(PrintSum());
PrintSum();