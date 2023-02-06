class GlobalPage {
  get acceptConsentBtn() {
    return cy.get(".js-accept-all-cookies");
  }

  clickOnAcceptConsentBtn() {
    this.acceptConsentBtn.click();
  }
  visitPage() {
    cy.visit("/index.html");
    this.clickOnAcceptConsentBtn();
  }
}

export default new GlobalPage();
