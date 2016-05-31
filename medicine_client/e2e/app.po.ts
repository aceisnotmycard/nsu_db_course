export class MedicineClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('medicine-client-app h1')).getText();
  }
}
