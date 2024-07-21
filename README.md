# Swag Labs - E2E Test

## Getting Started
1. Install Node JS
2. Clone current repo.
3. Create .env file in root as per given sample.env and update credentials locally in .env file.
4. Run below commands on the terminal.
5. Select E2E Testing
6. Choose a browser and start e2e testing
7. Select feature file to run
```
npm install
npx cypress open
```

## Run tests in headless mode
```
npx cypress run --browser edge
npx cypress run --browser chrome
```

## Test Automation DSL (JavaScript)
Login & Logout flow
```
SwagLabs.loginPage()
    .withCredentials()
    .login();

SwagLabs.inventoryPage()
    .logout();
```

Checkout flow
```
SwagLabs.inventoryPage()
    .addProductsToCart(items)
    .goToCart();
    
SwagLabs.cartPage()
    .checkout();

SwagLabs.checkoutInfoPage()
    .withInfo()
    .continue();    
    
SwagLabs.checkoutOverviewPage()
    .finish();    
```


Assertion Library DSL samples
```
SwagLabsUIAssert.inventoryPage()
    .hasLogo()
    .hasTitle();
        
SwagLabsUIAssert.cartPageAssert()
    .hasProducts(items); 

SwagLabsUIAssert.checkoutCompletePageAssert()
    .checkOrderConfirmation();         
```