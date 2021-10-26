let value = "";
let arr = [];
let newArr = [];

while (true) {
  value = prompt("Nhập vào một chuỗi");
  if (value == -1) {
    break;
  }
  arr.push(value);
}

for (let i = 0; i < arr.length; i++) {
  if (!newArr.includes(arr[i])) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);
