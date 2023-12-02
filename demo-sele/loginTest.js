const { Builder, By, until } = require('selenium-webdriver');

async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Step 1: Navigate to the login page
        await driver.get('http://localhost:3000/login');

        // Step 2: Enter username and password
        await driver.findElement(By.id('username')).sendKeys('user');
        await driver.findElement(By.id('password')).sendKeys('pass');

        // Step 3: Click the login button
        await driver.findElement(By.id('login-button')).click();

        // Step 4: Verify successful login
        await driver.wait(until.urlIs('http://localhost:3000/profile'), 10000);

        console.log('Login test passed!');
    } catch (error) {
        console.error('Login test failed', error);
    } finally {
        await driver.quit();
    }
}



async function registrationTest() {
    // Assuming driver is your WebDriver instance
await driver.get('http://localhost:3000/register');

let usernameInput = await driver.findElement(By.id('reg-username'));
let passwordInput = await driver.findElement(By.id('reg-password'));
let emailInput = await driver.findElement(By.id('reg-email'));
let registerButton = await driver.findElement(By.id('register-button'));

await usernameInput.sendKeys('newuser');
await passwordInput.sendKeys('password123');
await emailInput.sendKeys('newuser@example.com');
await registerButton.click();

// Add assertions or further steps as needed

}

async function logOutTest() {
    // Navigate to the profile page first and assume the user is logged in
await driver.get('http://localhost:3000/profile');

let logoutButton = await driver.findElement(By.id('logout-button'));
await logoutButton.click();

// Verify redirection to the login page or other post-logout behavior

}

loginTest();




class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    get usernameField() {
        return this.driver.findElement(By.id('username'));
    }

    get passwordField() {
        return this.driver.findElement(By.id('password'));
    }

    get loginButton() {
        return this.driver.findElement(By.id('login-button'));
    }

    async login(username, password) {
        await this.usernameField.sendKeys(username);
        await this.passwordField.sendKeys(password);
        await this.loginButton.click();
    }
}




const { Builder } = require('selenium-webdriver');
const LoginPage = require('./LoginPage');

(async function exampleTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    let loginPage = new LoginPage(driver);

    try {
        await driver.get('http://example.com/login');
        await loginPage.login('testuser', 'testpassword');

        // Add more assertions or interactions here
    } finally {
        await driver.quit();
    }
})();
