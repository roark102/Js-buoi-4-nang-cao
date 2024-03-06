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
