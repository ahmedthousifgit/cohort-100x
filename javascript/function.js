// sum of two numbers

// function sum(a,b){
//     console.log('the sum is:',a+b);
// }

// sum(2,3)

// callbacks 

function sum(num1,num2,fntocall){
    let result = num1+num2
    fntocall(result)
}

// function displayResult(data){
//     console.log('Result of the sum is:',data);

// }
// function displayResultPassive(data){
//     console.log('sum result is :'+data);
// }

// const ans = sum(1,2,displayResult)   //callback func bcz passing a function as argument


// setTimeout callback

function greet(){
    console.log('hello user');
}

setTimeout(greet,1000)  //here greet is a function that is passed as an argument