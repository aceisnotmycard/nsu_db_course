import { MedicineClientPage } from './app.po';

describe('medicine-client App', function() {
  let page: MedicineClientPage;

  beforeEach(() => {
    page = new MedicineClientPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('medicine-client works!');
  });
});
