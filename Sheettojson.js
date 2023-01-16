/** @format */

var XLSX = require("xlsx");
var workbook = XLSX.readFile("data.xlsx");
var sheet_name_list = workbook.SheetNames;
var jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(jsonData);
