const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);


//added my own functions for testing to speed up the typing 
function appendTimer(array) {
    let resultsAppend 
    perf.start()
    doublerAppend(array)
    return resultsAppend = perf.stop()
}

function insertTimer(array) {
    let resultsInsert
    perf.start()
    doublerInsert(array)
    return resultsAppend = perf.stop()
}
//


console.log('Results for tinyArray')
console.log('insert', insertTimer(tinyArray).preciseWords)
console.log('append', appendTimer(tinyArray).preciseWords)

console.log('--')

console.log('Results for smallArray')
console.log('insert', insertTimer(smallArray).preciseWords)
console.log('append', appendTimer(smallArray).preciseWords)

console.log('--')

console.log('Results for mediumArray')
console.log('insert', insertTimer(mediumArray).preciseWords)
console.log('append', appendTimer(mediumArray).preciseWords)

console.log('--')

console.log('Results for largeArray')
console.log('insert', insertTimer(largeArray).preciseWords)
console.log('append', appendTimer(largeArray).preciseWords)

console.log('--')

console.log('Results for extraLargeArray');
console.log("insert", insertTimer(extraLargeArray).preciseWords);
console.log("append", appendTimer(extraLargeArray).preciseWords);

console.log('--')