// const isAnagram = function(s, t) {
    
//     const convert = (n) => {
//         return n.split('').sort()
//     }
    
//     let sortS = convert(s);
//     let sortT = convert(t);

//     if (sortS === sortT) return true
//     else return false
// };

// 시간초과

// const isAnagram = (s, t) => {
    

//     let noSwap
//     const bubbleSort = (array) => {
//         for (let i = array.length-1; i > 0; i--) {
//             noSwap = true
//             for (let j = 0; j < i; j++) {
//                 if (array[j].charCodeAt() < array[j+1].charCodeAt()) {
//                     let temp = array[j]
//                     array[j] = array[j+1]
//                     array[j+1] = temp
//                     noSwap = false
//                 }
//             }
//             if (noSwap) break; // 이거 이해 안가는데
//         }
        
//         return array
//     }

//     let sortS = bubbleSort(s.split('')).join('');
//     let sortT = bubbleSort(t.split('')).join('');


//     if (sortS === sortT) return true
//     else return false
// };



// console.log(isAnagram('abc', 'bac'))