class StModels {
  get addToCartBtn() {
    return cy.get("button.basket-button");
  }
  get openCartPageBtn() {
    return cy.get('[aria-label="Koszyk"]');
  }
  get firstItemName() {
    return cy.get("span.title__name").eq(0);
  }
  get tremoloFeatureTab() {
    return cy.contains("span.key-feature-headline", "Tremolo");
  }
  get frCheckbox() {
    return cy.contains("div.fx-input-checkbox__label-content", "Floyd Rose");
  }
  get sortingSelect() {
    return cy.get("select.fx-input-select-simple__field").eq(0);
  }
  get firstInStockGuitar() {
    return cy.get("div.fx-availability--in-stock").eq(0);
  }
  addFirstGuitarToCart() {
    this.addToCartBtn.eq(0).click();
  }
  openCartPage() {
    this.openCartPageBtn.click();
  }
  selectFrTremolo() {
    this.tremoloFeatureTab.click();
    this.frCheckbox.click();
  }
  sortByPriceLowHigh() {
    this.sortingSelect.select("pra");
  }
  addFirstInStockGuitarToCart() {
    this.firstInStockGuitar
      .parents("div.product")
      .find("button.basket-button")
      .click();
  }
}
export default new StModels();
