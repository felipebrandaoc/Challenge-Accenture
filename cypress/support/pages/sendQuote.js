let quoteData = {
    "email": "testequotes@mailinator.com",
    "phone": "999999999",
    "username": Cypress.env('username'),
    "password": Cypress.env('password'),
    "confirmPassword": Cypress.env('password'),
    "comments": "Testing some comments on the test scenario."
};

class send {

    setQuoteData() {
        // Typing Email
        cy.get('input[id="email"]').type(quoteData.email)
        // Typing Phone
        cy.get('input[id="phone"]').type(quoteData.phone)
        // Typing Username
        cy.get('input[id="username"]').type(quoteData.username)
        // Typing Password
        cy.get('input[id="password"]').type(quoteData.password)
        // Typing Confirm Password
        cy.get('input[id="confirmpassword"]').type(quoteData.confirmPassword)
        // Typing Comments
        cy.get('[id="Comments"]').type(quoteData.comments)
    }
}

export default new send();
