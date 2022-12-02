Feature: Bootcamp E2E - 'Newegg' shop
    
    Background:
        Given I'm on the main page
        * I reload the page if the banner appears

    Scenario: Search bar
        When I type the word Windows into the Search bar
        * I click on the Search button
        * I'm on the search results page
        Then I see at least one item
    
    Scenario: Internet shop logo button
        When I click on the Today's Best Deals link
        * I click on the Internet shop logo
        Then I see the main page
