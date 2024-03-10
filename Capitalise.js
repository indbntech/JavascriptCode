let str1 = "hi narayan kaise ho";
const funcapt = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");
};
funcapt(str1);


