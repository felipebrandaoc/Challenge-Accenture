class price {

    setPriceOption(priceOption) {
        if(priceOption == "Silver") {
            // Selecting Price Option Silver
            cy.get('input[id="selectsilver"]').click({force: true}) 
        } else if (priceOption == "Gold") {
            // Selecting Price Option Gold
            cy.get('input[id="selectgold"]').click({force: true}) 
        } else if (priceOption == "Platinum") {
            // Selecting Price Option Platinum
            cy.get('input[id="selectplatinum"]').click({force: true}) 
        } else if (priceOption == "Ultimate") {
            // Selecting Price Option Ultimate
            cy.get('input[id="selectultimate"]').click({force: true}) 
        }
    }
}

export default new price();
