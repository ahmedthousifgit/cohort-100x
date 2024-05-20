// print an array of even numbers

// function evenArray(num){
//     let even =[]
//     if(num%2===0){
//         for(let i=2;i<=num;i+=2){
//              even.push(i) 
//         }
//         return even
//     }else{
//         console.log('num is not even');
//         return []
//     }
// }

// console.log(evenArray(7));


// biggest number in an array

function biggest(arr){
    let max = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
console.log(biggest([1,2,3,4,5,23]));