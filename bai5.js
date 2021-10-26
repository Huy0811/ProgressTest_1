let d = 0;
let m = 0;
let y = 0;

function leapYear(y) {
  if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
    return true;
  }
  return false;
}

while (true) {
  d = parseInt(prompt("Nhập vào ngày"));
  m = parseInt(prompt("Nhập vào tháng"));
  y = parseInt(prompt("Nhập vào năm"));
  let status_1 =
    d >= 1 &&
    d <= 31 &&
    (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12);
  let status_2 = d >= 1 && d <= 30 && (m == 4 || m == 6 || m == 9 || m == 11);
  let status_3 = leapYear(y) && m == 2 && d <= 29 && d >= 1;
  if (status_1 || status_2 || status_3) {
    break;
  }
}

d = d + 1;
if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
  if (d > 31) {
    d = 1;
    m = m + 1;
  }
} else if (m == 2) {
  if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
    if (d > 29) {
      d = 1;
      m = m + 1;
    }
  } else {
    if (d > 28) {
      d = 1;
      m = m + 1;
    }
  }
} else {
  if (d > 30) {
    d = 1;
    m = m + 1;
  }
}
if (m == 13) {
  m = 1;
  y = y + 1;
}

console.log(`Ngày tiếp theo: ${d}/${m}/${y}`);
