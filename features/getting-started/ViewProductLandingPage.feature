@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order:
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy

    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep07-1
    Scenario: Validate Cydeo Secure Checkout displays on left menu
        Then cydeo secure checkout is visible
    @sep07-2
    Scenario: Validate program name is displayed on left menu
        Then product name is displayed on left menu

    @sep07-3
    Scenario: Validate footer items displayed in order logo, Terms and Conditions, Privacy Policy, Disclaimerc Cookie Policy
        Then left footer menu displayed in correct order

    @@sep07-4
    Scenario: Validate the right footer displays Need Help?
        Then right footer menu displays need help section