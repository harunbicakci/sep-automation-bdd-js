@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Valdiate system displays on which step the user is
        Then user can see start application payment plan and review parts displayed

    Scenario: Validate user can see Start Application part is in blue
        Then user can see step one is marked blue

    Scenario: Validate the payment plan and review parts are in grey
        Then user can see payment plan and review parts in grey