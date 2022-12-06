let insurantData = {
    "firstName": "Test",
    "lastName": "Quotes",
    "birthDate": "06/12/2000",
    "gender": "male",
    "streetAddress": "Street Test",
    "country": "Brazil",
    "zipCode": "99999999",
    "city": "City Test",
    "occupation": "Employee",
};

class insurant {

    setInsurantData() {
        // Typing First Name
        cy.get('input[id="firstname"]').type(insurantData.firstName)
        // Typing Last Name
        cy.get('input[id="lastname"]').type(insurantData.lastName)
        // Typing Date of Birth
        cy.get('input[id="birthdate"]').type(insurantData.birthDate)
        // Selecting Gender - Depends on the param (male or female)
        if(insurantData.gender == "male") {
            cy.get('input[id="gendermale"]').click({force: true})
        } else if(insurantData.gender == "female") {
            cy.get('input[id="genderfemale"]').click({force: true})
        }
        // Typing Street Address
        cy.get('input[id="streetaddress"]').type(insurantData.streetAddress)
        // Selecting Country
        cy.get('select[id="country"]').select(insurantData.country)
        // Typing Zip Code
        cy.get('input[id="zipcode"]').type(insurantData.zipCode)
        // Typing City
        cy.get('input[id="city"]').type(insurantData.city)
        // Selecting Occupation
        cy.get('select[id="occupation"]').select(insurantData.occupation)
        // Selecting Hobbies - Other
        cy.get('input[id="other"]').click({force: true})
        // TO DO - Picture
    }
}

export default new insurant();
