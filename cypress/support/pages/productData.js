let productData = {
    "startDate": "12/05/2023",
    "insuranceSum": "3000000",
    "meritRating": "Super Bonus",
    "damageInsurance": "Full Coverage",
};

class product {

    setProductData() {
        // Typing Start Date
        cy.get('input[id="startdate"]').type(productData.startDate)
        // Selecting Insurance Sum
        cy.get('select[id="insurancesum"]').select(productData.insuranceSum)
        // Selecting Merit Rating
        cy.get('select[id="meritrating"]').select(productData.meritRating)
        // Selecting Damage Insurance
        cy.get('select[id="damageinsurance"]').select(productData.damageInsurance)
        // Selecting Optional Products - Depends on the param
        cy.get('input[id="EuroProtection"]').click({force: true})  
        // Selecting Courtesy Car
        cy.get('select[id="courtesycar"]').select('No')
    }
}

export default new product();
