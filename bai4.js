let arrNhanVien = [
  ["Nguyễn Văn A", 18, 5000000, "Trưởng phòng"],
  ["Nguyễn Văn B", 20, 7000000, "Thư ký"],
  ["Nguyễn Văn C", 22, 9000000, "Giám đốc"],
];

function readNhanVien() {
  for (let i = 0; i <= arrNhanVien.length; i++) {
    console.log(
      `Họ và tên: ${arrNhanVien[i][0]} - Tuổi: ${arrNhanVien[i][1]} - Mức lương: ${arrNhanVien[i][2]} - Chức vụ: ${arrNhanVien[i][3]}`
    );
  }
}

function createNhanVien(tenNhanVien, tuoi, luong, chucVu) {
  arrNhanVien.push([tenNhanVien, tuoi, luong, chucVu]);
  readNhanVien();
}

// Có thể gán giá trị khác cho tham số hoặc sẽ được gán giá trị mặc định của tham số sau khi update
function updateNhanVien(tenNhanVien = "", tuoi = 0, luong = 0, chucVu = "") {
  if (tenNhanVien != "") {
    for (let i = 0; i < arrNhanVien.length; i++) {
      if (arrNhanVien[i][0] == tenNhanVien) {
        arrNhanVien[i][0] = tenNhanVien;
        arrNhanVien[i][1] = tuoi;
        arrNhanVien[i][2] = luong;
        arrNhanVien[i][3] = chucVu;
      }
    }
  }
  readNhanVien();
}

function deleteNhanVien(tenNhanVien) {
  for (let i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i][0] == tenNhanVien) {
      arrNhanVien.splice(i, 1);
    }
  }
  readNhanVien();
}
