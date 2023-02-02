class CardPage {
  get itemName() {
    return cy.get("a.article-information > div");
  }
}
export default new CardPage();
