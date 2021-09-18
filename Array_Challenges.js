// 1. Always Hungry

function alwaysHungry(arr) {
    let store = "";
    for(i=0; i <= arr.length; i ++){
        //console.log( arr[i]);        
        if (arr[i] === "food"){
            console.log( "yummy");
            store =  "food";
            //store.push("food");
            //console.log( store);
            //return store;
            }
            //console.log( store);
    }
    //console.log(store);
    if (store !== "food"){
        console.log( "I'm hungry");  
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

console.log("--------End of challenges #1-------");

// 2. High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for( i = 0; i <= arr.length; i ++ ){
        if( arr[i] > cutoff ){
            //console.log(arr[i]);
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

console.log("--------End of challenges #2-------");

// 3. Better than the average

function betterThanAverage(arr) {
    var sum = 0;
    var average = 0;
    for ( i = 0; i <= arr.length -1; i ++){
        sum = sum + (arr[i]);
        //console.log(arr[i]);
        //console.log(sum);
    }
    // calculate the average
    average = sum/(arr.length);
    //console.log(average);
    let numbsLarger = highPass(arr, average);
    //console.log(numbsLarger);
    var count = 0
    for ( i = 0; i <= numbsLarger.length -1; i ++){        
        count = count + 1; 
        //console.log(count);
    }        
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

console.log("--------End of challenges #3-------");

// 4. Array Reverse

function reverse(arr) {
    let store = [];
    for( i = arr.length-1; i >= 0; i --){
        store.push(arr[i]);
        //console.log(arr[i]);
        //console.log(store);
        //console.log(arr);
        //arr.unshift(store);
        arr.pop();
    }
        //console.log(arr);
        //console.log(store);
        return store;
}
//console.log(["a", "b", "c", "d", "e"]);
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

console.log("--------End of challenges #4-------");


// 5. Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    let sum = 0;
    for( i = 1; i< n-1; i ++){
        sum = fibArr[fibArr.length-2]+fibArr[fibArr.length-1];
        fibArr.push(sum);
        //console.log(fibArr)
    }
    // your code here
    return fibArr;
}
    
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("--------End of challenges #5-------");



