import { QuestionsuploaderPage } from './app.po';

describe('questionsuploader App', function() {
  let page: QuestionsuploaderPage;

  beforeEach(() => {
    page = new QuestionsuploaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
