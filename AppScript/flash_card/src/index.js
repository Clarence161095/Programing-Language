function dialogFlashCard() {
	const ui = SpreadsheetApp.getUi();
	const html = HtmlService.createTemplateFromFile('flash_card').evaluate();
	ui.showModalDialog(html, 'Flash Card');
}

function createMenu() {
	const ui = SpreadsheetApp.getUi();
	const menu = ui.createMenu('Utilities');
	menu.addItem('Flash Card', 'dialogFlashCard');
	menu.addToUi();
}

function onOpen() {
	createMenu();
}
