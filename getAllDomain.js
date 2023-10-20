const config = require('config')
const ExcelJS = require('exceljs')
const workbook = new ExcelJS.Workbook();
const domainSheet = []
workbook.xlsx.readFile('/Users/mac/Downloads/66083.xlsx')
  .then(()=>{
    const worksheet = workbook.getWorksheet(1);
    worksheet.eachRow(row => {
      domainSheet.push(row.values[1])
    })
    getAllDomain(domainSheet)
  })
const getAllDomain = function (domainSheet) {
  fetch('https://api.nsone.net/v1/zones', {
    method: 'GET',
    headers: {
      'X-NSONE-Key': config.get('apiKey')
    }
  }).then((res) => {
    return res.json()
  }).then((json) => {
    // console.log(json);
    return json.map(item => item.zone)
    // return  json.data.map(item => item.zone)
  }).then(arr => {
    let repeated = arr.filter(item =>{
      return domainSheet.includes(item)
    })
    console.log(repeated);
  })
}
// getAllDomain()
