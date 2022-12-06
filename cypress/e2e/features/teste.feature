# Script made by Felipe Brandão Costa
# Brazil, 02/12/2022
# Code Challenge - Cypress

Feature: Send Quote

    Scenario: Sending Quote Success
        Given I enter the website "http://sampleapp.tricentis.com/101/app.php"
        When I enter Vehicle Data
        And I click on Next
        And I enter Insurant Data
        And I click on Next
        And I enter Product Data
        And I click on Next
        And I select Price Option "Gold"
        And I click on Next
        And I fill the form Send Quote
        And I click on Send
        Then I verify the "success" message on the screen

