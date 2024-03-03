// Bài 1:
// - Bước 1: Xác định đầu vào:
//     + Ngày: Date
//     + Tháng: month
//     + Năm: Year

document.getElementById("tomorrow").onclick = function () {
  var date = +document.getElementById("date").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;
  var tmrDate, tmrMonth, tmrYear, note;
  tmrMonth = month;
  tmrYear = year;

  if (date === 31) {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10
    ) {
      tmrDate = 1;
      tmrMonth = month + 1;
    } else if (month === 12) {
      tmrDate = 1;
      tmrMonth = 1;
      tmrYear = year + 1;
    }
  } else if (date === 30) {
    if (month === 4 || month === 6 || month === 9 || month === 11) {
      tmrDate = 1;
      tmrMonth = month + 1;
    } else if (month === 2) {
      tmrDate = "không xác định";
    } else {
      tmrDate = date + 1;
    }
  } else if (date === 29) {
    if (month === 2) {
      tmrDate = 1;
      tmrMonth = month + 1;
    } else {
      tmrDate = date + 1;
    }
  } else {
    tmrDate = date + 1;
  }
  note = `Ngày tiếp theo là ngày ${tmrDate}, tháng ${tmrMonth}, năm ${tmrYear}`;

  document.getElementById("result1").innerHTML = note;
};
