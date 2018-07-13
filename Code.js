const hello = require('./src/hello');

global.callHello = () => {
  Logger.log(hello('world'));
};

global.onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('Custom Menu')
    .addItem('Show sidebar', 'showSidebar')
    .addToUi();
};

global.showSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('My custom sidebar')
    .setWidth(300);
  SpreadsheetApp.getUi()
    .showSidebar(html);
};