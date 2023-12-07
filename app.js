//------1-------

// function day(numDay) {
//     switch (numDay) {
//         case 1:
//             return 'Понеділок';
//         case 2:
//             return 'Вівторок';
//         case 3:
//             return 'Середа';
//         case 4:
//             return 'Четвер';
//         case 5:
//             return 'П ятниця';
//         case 6:
//             return 'Субота';
//         case 7:
//             return 'Неділя';
//         default:
//             return 'Некоректний номер дня';
//     }
// }

// let numDay = 3;
// let nameDay = day(numDay);

// console.log(`День ${numDay} тижня: ${nameDay}`);


//--------2--------

// function transformCamelCase(string) {
//     return string.replace(/_([a-z])/g, function(match, sign) {
//         return sign.toUpperCase();
//     }).replace(/^([a-z])/, function(match, sign) {
//         return sign.toUpperCase();
//     });
// }

// let string1 = 'var_text_hello';
// let transformedString = transformCamelCase(string1);

// console.log(transformedString);


//------3---------

// var my_arr = new Array();
// for (var i=0; i<10; i++) {
//     my_arr.push('x');
// }
// console.log(my_arr); 

//--------4--------

// let a = 5;
// let ggg;

// if (a > 0) {
//     ggg = function() {
//         console.log('Один!');
//     };
// } else {
//     ggg = function() {
//         console.log('Два!');
//     };
// }

// ggg()

//-------5---------

// let ggg = function (a, b) {
//     return a() + b();
// };

// let func1 = function() {
//     return 3;
// };
// let func2 = function() {
//     return 4
// };
// console.log(ggg(func1, func2));

//---------6--------

// function compareArr(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// const arr01 = [1, 2, 3, 4, 5];
// const arr02 = [1, 2, 3, 4, 5];
// const result = compareArr(arr01, arr02);
// console.log("Массивы arr01 и arr02 равны:", result);

//-------7-------

// function splitArr(arr, size) {
//     const subarr = [];

//     for (let i = 0; i < arr.length; i += size) {
//         const subarr1 = arr.slice(i, i + size);
//         subarr.push(subarr1);
//     }

//     return subarr;
// }
// const originArr = [1, 2, 3, 4, 5];
// const sizeSubarr = 2;
// const result = splitArr(originArr, sizeSubarr);
// console.log(result);

