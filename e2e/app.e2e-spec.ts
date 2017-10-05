import { LearnComponentPage } from './app.po';

describe('learn-component App', () => {
  let page: LearnComponentPage;

  beforeEach(() => {
    page = new LearnComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
