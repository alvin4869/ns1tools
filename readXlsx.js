const ExcelJS = require('exceljs')
const workbook = new ExcelJS.Workbook();

const sheetArr = []
// 讀取現有的 .xlsx 表格
workbook.xlsx.readFile('/Users/mac/Downloads/node測試用表格 (1).xlsx')
  .then(function() {
    const worksheet = workbook.getWorksheet(1); // 第一個工作表
    worksheet.eachRow(function(row, rowNumber) {
      sheetArr.push(row.values[1])
      // sheetArr.push(row.values[2])
    });
    console.log(sheetArr);
  })
  .catch(function(error) {
    console.error(error);
  });
exports.domainSheet = sheetArr
