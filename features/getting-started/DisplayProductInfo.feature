@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Validate user can see the product name and the price
        Then product name is displayed
    
    Scenario: Validate the product name on the information card matches the product name on left menu
        Then product name matches with the product name on the left menu

    Scenario: Validate the flexible payments plan is displayed 
        Then flexible payments plan is displayed

    Scenario: Validate start date, return policy and final date for returns are displayed
        Then the program start date is displayed
        And return policy and final date should be displayed