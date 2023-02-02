class GuitarsAndBasses {
  get electricGuitars() {
    return cy.get('[title="Gitary Elektryczne"]');
  }
  clickOnElectricGuitars() {
    this.electricGuitars.click();
  }
}
export default new GuitarsAndBasses();
