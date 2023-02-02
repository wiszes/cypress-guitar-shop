class GlobalPage {
  get acceptConsentBtn() {
    return cy.get(".js-accept-all-cookies");
  }

  clickOnAcceptConsentBtn() {
    this.acceptConsentBtn.trigger("mouseover").click();
  }
  visitPage() {
    // cy.clearAllSessionStorage();
    // cy.intercept("POST", "https://www.thomann.de/pl/cookie_storage.html").as(
    //   "aac"
    // );
    // cy.intercept("POST", "https://www.thomann.de/pl/cla.html").as("aac1");
    cy.visit("/index.html");
    this.clickOnAcceptConsentBtn();
    // cy.wait("@aac");
    // cy.wait("@aac1");
  }
}

export default new GlobalPage();
