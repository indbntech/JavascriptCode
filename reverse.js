// Reverse String in on liner
let str1 = "Hello India";
function funstringrev(str) {
  return str.split("").reverse().join("");
}
console.log(funstringrev(str1));

//=================Method 2nd=======================

let str2 = "Sare jahan se achha hindustan hamara";
function funstringrev2(str) {
  let saverevstring = str.split(" ").map((word) => {
    word.split("").reverse().join("");
  });
  return saverevstring.join(" ");
}
console.log(funstringrev(str2));

//=================Method 3rd=======================

let str3 = "Sare jahan se achha hindustan hamara";

function funstringrev2(str) {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  return revstr;
}
console.log(funstringrev(str3));

//=================Reverse number method one=======================

let num1 =  123456;

function funnumrev1(num) {
  let revnum= num.toString().split("").reverse().join("");
  return Number(revnum);
}
console.log(funnumrev1(num1));

//=================Reverse number method two=======================

let num2 =  654789;

function funnumrev2(num) {
    let rev=0;
    while(num>0){
        let rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10)
    }
    return rev;
}
console.log(funnumrev2(num2));
