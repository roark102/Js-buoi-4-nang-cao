// Bài 1:
// - Bước 1: Xác định đầu vào:
//     + Ngày: Date
//     + Tháng: month
//     + Năm: Year

document.getElementById("tomorrow").onclick = function () {
  var date = +document.getElementById("date").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (date === 31) {
        date = 1;
        month += 1;
      } else {
        date += 1;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (date === 30) {
        date = 1;
        month += 1;
      } else {
        date += 1;
      }
      break;
    case 2:
      if (year % 4 === 0) {
        if ((date = 29)) {
          date = 1;
          month += 1;
        } else {
          date += 1;
        }
      } else {
        if ((date = 28)) {
          date = 1;
          month += 1;
        } else {
          date += 1;
        }
      }
      break;
    case 12:
      if (date === 31) {
        date = 1;
        month = 1;
        year += 1;
      } else {
        date += 1;
      }
    default:
      break;
  }

  var note = `Ngày tiếp theo là ngày ${date}, tháng ${month}, năm ${year}`;

  document.getElementById("result1").innerHTML = note;
};

document.getElementById("yesterday").onclick = function () {
  var date = +document.getElementById("date").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;

  var note;
  switch (month) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 9:
    case 11:
      if (date === 1) {
        date = 31;
        month -= 1;
      } else {
        date -= 1;
      }
      break;
    case 5:
    case 7:
    case 10:
    case 12:
      if (date === 1) {
        date = 30;
        month -= 1;
      } else {
        date -= 1;
      }
      break;
    case 3:
      if (date === 1) {
        if (year % 4 === 0) {
          date = 29;
        } else {
          date = 28;
        }
        month -= 1;
      } else {
        date -= 1;
      }
      break;
    case 1:
      if (date === 1) {
        date = 31;
        month = 12;
        year -= 1;
      }
    default:
      break;
  }
  note = `Ngày trước đó là ngày ${date}, tháng ${month}, năm ${year}`;

  document.getElementById("result1").innerHTML = note;
};

// Bài 2:

document.getElementById("days").onclick = function () {
  var month = +document.getElementById("month1").value;
  var year = +document.getElementById("year1").value;
  var days, note;
  if (month <= 12) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2:
        if (year % 4 === 0) {
          days = 29;
        } else {
          days = 28;
        }
        break;
      default:
        break;
    }
    note = `Tháng ${month}, năm ${year} có: ${days} ngày`;
  } else {
    note = "Bạn đã nhập sai tháng, xin hãy nhập lại ";
  }

  document.getElementById("result2").innerHTML = note;
};

// Bài 3:
function numberToWord(number) {
  switch (number) {
    case 0:
      return "";
    case 1:
      return "một";
    case 2:
      return "hai";
    case 3:
      return "ba";
    case 4:
      return "bốn";
    case 5:
      return "năm";
    case 6:
      return "sáu";
    case 7:
      return "bảy";
    case 8:
      return "tám";
    case 9:
      return "chín";
    default:
      break;
  }
}

document.getElementById("readNumber").onclick = function () {
  var number = +document.getElementById("number").value;
  var hangTram = Math.floor(number / 100);
  var hangChuc = Math.floor((number % 100) / 10);
  var donVi = number % 10;

  var cachDoc = "";
  if (number >= 100 && number <= 999) {
    if (hangTram !== 0) {
      cachDoc += ` ${numberToWord(hangTram)} trăm`;
    }
    if (hangChuc !== 0) {
      if (hangChuc === 1) {
        if (donVi === 0) {
          cachDoc += " mười";
        } else if (donVi === 5) {
          cachDoc += " mười lăm";
        } else {
          cachDoc += ` mười ${numberToWord(donVi)}`;
        }
      } else {
        cachDoc += ` ${numberToWord(hangChuc)} mươi ${numberToWord(donVi)}`;
      }
    } else {
      if (donVi !== 0) {
        cachDoc += ` lẻ ${numberToWord(donVi)}  `;
      }
    }
    cachDoc = `Cách đọc của ${number} là: ${cachDoc}`;
  } else {
    cachDoc = "Bạn hãy nhập lại số có 3 chữ số";
  }

  // if (donVi !== 0) {
  //   cachDoc += numberToWord(donVi);
  // }
  document.getElementById("result3").innerHTML = cachDoc;
};

// Bài 4 :
function tinhDistance(x1, y1, x2, y2) {
  // Tính khoảng cách giữa hai điểm theo công thức Euclide
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

document.getElementById("distance").onclick = function () {
  var xTruongHoc = +document.getElementById("xTruongHoc").value;
  var yTruongHoc = +document.getElementById("yTruongHoc").value;
  var xSinhVien1 = +document.getElementById("xSinhVien1").value;
  var ySinhVien1 = +document.getElementById("ySinhVien1").value;
  var xSinhVien2 = +document.getElementById("xSinhVien2").value;
  var ySinhVien2 = +document.getElementById("ySinhVien2").value;
  var xSinhVien3 = +document.getElementById("xSinhVien3").value;
  var ySinhVien3 = +document.getElementById("ySinhVien3").value;
  var sinhVien1 = document.getElementById("sinhVien1").value;
  var sinhVien2 = document.getElementById("sinhVien2").value;
  var sinhVien3 = document.getElementById("sinhVien3").value;
  var distance1, distance2, distance3, distanceMax;
  distance1 = tinhDistance(xTruongHoc, yTruongHoc, xSinhVien1, ySinhVien1);
  distance2 = tinhDistance(xTruongHoc, yTruongHoc, xSinhVien2, ySinhVien2);
  distance3 = tinhDistance(xTruongHoc, yTruongHoc, xSinhVien3, ySinhVien3);
  distanceMax = distance1;
  var sinhVienXaNhat = sinhVien1;
  if (distance2 > distanceMax) {
    distanceMax = distance2;
    sinhVienXaNhat = sinhVien2;
  }
  if (distance3 > distanceMax) {
    distanceMax = distance3;
    sinhVienXaNhat = sinhVien3;
  }

  document.getElementById(
    "result4"
  ).innerHTML = `Sinh Viên có nhà xa trường học nhất là ${sinhVienXaNhat} `;
};
