const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I'm on the main page", async () => {
  await browser.url("https://www.newegg.com");
});
 
// Checking and disabling the banner
Given("I reload the page if the banner appears", async () => {
  try {
    const banner = "div[class='modal-content']";
    await $(banner).waitForDisplayed({ timeout: 3000 });
    await browser.refresh();
    } catch {
    console.log("The banner didn't appear");
    }
});

// Checking the search operation 
When("I type the word {word} into the Search bar", async (string) => {
  const searchField = $('input[type="search"]');
    await searchField.setValue(string);
});
      
When("I click on the Search button", async () => {
  const searchButton = $('button[class="ico ico-search"]');
    await searchButton.click();
});

Then("I'm on the search results page", async () => {
  browser.waitUntil(
    () => expect(browser).toHaveUrl('https://www.newegg.com/p/pl?d=Windows')
  );
});

Then("I see at least one item", async () => {
  const searchResults = $('div[class*="item-cells-wrap"]');
    await expect(searchResults).toBeExisting();
});

// Checking the Internet shop logo
When("I click on the Today's Best Deals link", async () => {   
  const bestDeals = $('//*[@id="trendingBanner_720202"]/span');
    await bestDeals.click();
});

When("I click on the Internet shop logo", async () => {   
  const shopLogo = $('div[class="header2021-logo"]');
    await shopLogo.click();
});

Then("I see the main page", async () => {
  await expect(browser).toHaveUrl("https://www.newegg.com/");
});