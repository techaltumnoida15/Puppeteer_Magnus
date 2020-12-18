Feature: Demo Google Test

    Testing Google Page

    Background: Load Google Page
        Given Google page is open

    @smoke
    Scenario: Demo Test
        Given User is on Google Page
        Then Enter some keyword to search
        And Verify results