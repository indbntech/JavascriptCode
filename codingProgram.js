function RevString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

 console.log(RevString("Welcome to coding question"));
// function revString2(str) {
//   return str.split("").reverse().join("");
// }

// //========================== find a Longest word of a sentense=============================
// console.log(findLongestWord("Hi I love javascript"));

// function findLongestWord(str) {
//   let words = str.split(" ");
//   let longestword = "";
//   for (let word of words) {
//     if (word.length > longestword.length) {
//       longestword = word;
//     }
//   }
//   return longestword;
// }

// //====================Check Palindrom No or not =======================

// function CheckPalindrom(str){
//     let Palindrom=str.split("").reverse().join("");
//     if(str===Palindrom){
//         return "Palindrom string";
//     }else{
//         return "It is not Palindrom string";
//     }

// }
// console.log(CheckPalindrom("racecar"));

// //====================remove duplicate of an array =======================

// function removeDuplicate(str){
//     let rmvdpl= [...new Set(str)];
//     return rmvdpl
// }
// console.log(removeDuplicate([1,2,3,4,4,5,5]));

// // Write a progrma that cmpare to check of string anagram or not
// function checkAnagrams(str1,str2){
//     let anam1=str1.split("").sort().join("");
//     let anam2=str2.split("").sort().join("");
//     if(anam1 === anam2){
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(checkAnagrams("listen","silent"));

//==================Reverse of an string=========================

// console.log(revstringno("Narayan"));
// function revstringno(str){
//   let revstring=str.split("").reverse().join("");
//   return revstring
// }

// //=======================find largent word of a sentence================================

// console.log(findLargentSentense("My name is narayan singh"));
// function findLargentSentense(sentence){
//   let words=sentence.split(" ");
//   let largentsen="";
//   for(let word of words){
//     if(word.length>largentsen.length){
//       largentsen=word
//     }
//   }
//   return largentsen;
// }

// //=======================check Palindrom string or not========================

// console.log(CheckPalindrom("racecar"));

// function CheckPalindrom(str){
// let palindrom=str.split("").reverse().join("");
// if(str===palindrom){
//   return true
// }
// else{
//   return false
// }
// }

// //=====================Remove duplicate element of an array=====================

// let arr=[4,5,5,2,6,2]
// console.log(removeDuplicateItem(arr));

// function removeDuplicateItem(str){
//   let filteredarr=[...new Set(str)];
//   return filteredarr;
// }

// //===================check anagrams of two string ====================

// console.log(anagrams("listen","silent"));
// function anagrams(str1,str2){
//   let string1=str1.split("").sort().join("");
//   let string2=str2.split("").sort().join("");
//   if(string1===string2){
//     return true
//   }else{
//     return false
//   }
// }

// //=======================count vowels of a sentense====================
// console.log(countvowels("My name is narayan"));

// function countvowels(str){
//   let vowel=["a","e","i","o","u"];
//   let count=0;
//   for(let char of str.toLowerCase()){
//     if(vowel.includes(char)){
//       count++;
//     }
//   }
//   return count
// }

//==============================prime no or not===============

function isprime(num) {
  for (let i = 2; i <= num / 2; i++) {
    console.log(num);
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isprime(9));

//=======================Factorial no ================
console.log(factorial(3));  //1*2*3*4

function factorial(num) {
  let fectorial = 1;
  for (let i = 1; i <= num; i++) {
    fectorial *= i;
  }
  return fectorial;
}

display(1,2,3,4,5,6,7);
function display(first,sec,...remaing){
console.log(first);
console.log(sec);
console.log(remaing);
}
