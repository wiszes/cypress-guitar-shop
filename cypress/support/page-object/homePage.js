class HomePage {
  get guitarsAndBassesCategory() {
    return cy.get("a[title='Gitary i Basy']");
  }

  clickOnGuitarsAndBassesCategory() {
    this.guitarsAndBassesCategory.click();
  }
}
export default new HomePage();
