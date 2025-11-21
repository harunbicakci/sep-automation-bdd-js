@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Validate the field types and values are as expected
        Then first name field is visible
        And last name field is visible
        And email field is visible and accepts email format
        And phone field is visible and accepts numbers only
    @sep10-2
    Scenario: Validate "How did you hear about us" field is a dropdown list
        Then how did you hear about us field is a standard dropdown

    Scenario: Validate next button is disabled if required data is missing
        When valid first name is entered
        Then the next button will be disabled
        When valid last name is entered
        Then the next button will be disabled
        When valid email is entered
        Then the next button will be disabled
        When valid phone number is entered
        Then the next button will be enabled
