@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.


    Background: 
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process
    #TODO: Create scenarios that cover all the acceptance criteria

    Scenario: Verify that next button is disabled by default
        Then the next button is disabled by default

    Scenario: Verify that the next button will be activated when user selects upfront payment option
        When user clicks upfront payment option
        Then the next button will be enabled

    Scenario: Verify that the next button will be activated when user selects installment payment option
        When user clicks installments payment option
        Then the next button will be enabled

    Scenario: Veriry that on page2 clicking next button will navigate to step3
        When user clicks upfront payment option
        And user clicks next button
        Then user is on step three of the enrollment process

    Scenario: Verify that in stepper step1 and step2 are green and step3 is blue
        When user clicks upfront payment option
        And user clicks next button
        Then user can see step one and step two are green and step three is blue color

    Scenario: Verify on page three price summary and back button displayed and by default on page three pay button should be displayed
        When user clicks upfront payment option
        And user clicks next button
        Then price summary and back buttons are displayed
        And pay button is displayed