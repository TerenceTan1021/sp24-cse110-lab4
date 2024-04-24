function modifyArray(array, callback){
    const newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    //console.log(newArr);
    return newArr;
}
function doSomething(num){
    return num * 2;
}
modifyArray([1,2,3], doSomething);

//Answer: basically what this function does is double the elements
//of the array

//in line 3 we go through the elements of the array,
//line 4 we push element to the newArr by calling callback which is 
//the function doSomething. The function will double the value
//and that new value will be the new element to be pushed into the newArr