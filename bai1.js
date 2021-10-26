let str_input = prompt("Nhập vào một chuỗi");
let new_string = "";

for (let i = str_input.length - 1; i >= 0; i--) {
  new_string += str_input[i];
}
console.log(new_string);
