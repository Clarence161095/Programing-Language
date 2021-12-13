function sayHello() {
  console.log('Hello World Clasp!');
  console.log('My name is Tuan');
  const sheetData =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data');
  const db = sheetData.getRange("A1");
  db.setValue({ name: "tuan" })
  console.log(`data`, db.getValue());
}

function addToSideBar() {
  const htmlServ = HtmlService.createTemplateFromFile('index');
  const html = htmlServ.evaluate();

  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Hello World")
}
