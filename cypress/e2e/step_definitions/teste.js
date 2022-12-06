import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import vehicle from '../../support/pages/vehicleData'
import insurant from '../../support/pages/insurantData'
import product from '../../support/pages/productData'
import price from '../../support/pages/priceOption'
import send from '../../support/pages/sendQuote'

Given('I enter the website {string}', website => {
  cy.visit(website)
});

When('I enter Vehicle Data', () => {
  vehicle.setVehicleData()
});

When('I click on Next', () => {
  // Click on Next 
  cy.get('button').contains('Next »').click({force: true})
});

When('I enter Insurant Data', () => {
  insurant.setInsurantData()
});

When('I enter Product Data', () => {
  product.setProductData()
});

When('I select Price Option {string}', priceOption => {
  price.setPriceOption(priceOption)
});

When('I fill the form Send Quote', () => {
  send.setQuoteData()
});

When('I click on Send', () => {
  cy.get('button[id="sendemail"]').click()
});


Then('I verify the {string} message on the screen', message => {
  cy.contains('Sending e-mail success!', {timeout: 15000})
  cy.get('button[class="confirm"]').click()
});
