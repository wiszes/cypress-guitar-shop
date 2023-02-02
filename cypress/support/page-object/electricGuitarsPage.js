class ElectricGuitars {
  get stModels() {
    return cy.get('[title="Modele ST"]');
  }
  clickOnStModels() {
    this.stModels.click();
  }
}
export default new ElectricGuitars();
