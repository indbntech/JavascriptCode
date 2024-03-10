//====================================================================

//Coutn digits of an word
function funAcc(str) {
  let accrencess = {};
  str.split("").map((element) => {
    if (accrencess.hasOwnProperty(element) === false) {
      accrencess[element] = 1;
    } else {
      accrencess[element]++;
    }
  });
  return accrencess;
}
console.log(funAcc("hello"));

//console.log("Hello")

let arr = [1, 2, 3, 4, 3, 3, 3, 3];
let arrsum = (arrs) => {
  let sumarr = 0;
  arrs.map((e) => {
    sumarr = sumarr + e;
  });
  return sumarr;
};
console.log(arrsum(arr));

//=======================================

let arrays = [12, 23, "dfsd", "sdfsfsd", 5, 6];
const findsumarray = (arr) => {
  let sum = 0;
  arr.map((elem) => {
    if (typeof elem === "number") {
      sum = sum + elem;
    }
  });
  return sum;
};
console.log(findsumarray(arrays));


//========================================
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;
console.log(text);