/// <reference types="cypress" />
import GlobalPage from "../support/page-object/globalPage.js";
import HomePage from "../support/page-object/homePage.js";
import GuitarsAndBasses from "../support/page-object/guitarsAndBassesPage.js";
import ElectricGuitars from "../support/page-object/electricGuitarsPage.js";
import StModels from "../support/page-object/stModelsPage.js";
import CartPage from "../support/page-object/cartPage.js";

describe("Should add item to cart", () => {
  beforeEach(() => {
    GlobalPage.visitPage();
  });

  let guitarName;
  it("Should add first ST electric guitar from the product list to the cart", () => {
    HomePage.clickOnGuitarsAndBassesCategory();
    GuitarsAndBasses.clickOnElectricGuitars();
    ElectricGuitars.clickOnStModels();

    cy.url().should("eq", "https://www.thomann.de/pl/modele_st.html");

    StModels.addFirstGuitarToCart();

    cy.get("span.title__name")
      .eq(0)
      .then(($name) => {
        guitarName = $name.text();
      });

    StModels.openCartPage();

    CartPage.itemName.then(($itemname) => {
      expect($itemname).to.contain(guitarName);
    });
  });
  it("Should add the cheapest, available in-stock ST guitar with FR tremolo to the cart", () => {
    HomePage.clickOnGuitarsAndBassesCategory();
    GuitarsAndBasses.clickOnElectricGuitars();
    ElectricGuitars.clickOnStModels();

    cy.url().should("eq", "https://www.thomann.de/pl/modele_st.html");

    StModels.selectFrTremolo();
    StModels.sortByPriceLowHigh();
    StModels.addFirstInStockGuitarToCart();

    cy.get("div.fx-availability--in-stock")
      .eq(0)
      .parents(".product__details")
      .find("span.title__name")
      .then(($name) => {
        guitarName = $name.text();
      });

    StModels.openCartPage();

    CartPage.itemName.then(($itemname) => {
      expect($itemname).to.contain(guitarName);
      expect($itemname).to.contain("Dostępny w magazynie");
    });
  });
});
