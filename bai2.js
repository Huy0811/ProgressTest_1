let str = prompt("Nhập vào một chuỗi");
let splitStr = str.toLowerCase().split(" ");

for (let i = 0; i < splitStr.length; i++) {
  splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

  str = splitStr.join(" ");
}

console.log(str);
