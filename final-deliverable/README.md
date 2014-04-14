# Final Deliverable

Web Testing with Cucumber.js and Selenium

## Usage

1. Install [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/). Here is a [guide to installing them](http://www.joyent.com/blog/installing-node-and-npm/).

2. Navigate to this directory.

2. Duplicate `features/support/config.example.js`, rename the file to `features/support/config.js` and add the appropriate WordPress administrator username and password.

3. Install [Cucumber.js](https://github.com/cucumber/cucumber-js), [Chai](http://chaijs.com/), and [WebDriverJS](http://webdriver.io/) and [selenium-standalone](https://github.com/vvo/selenium-standalone) dependencies in this directory. Be sure to include the `-g` (global) flag for the Selenium install.

		$ npm install cucumber webdriverjs chai
		$ npm install --production selenium-standalone@latest -g

	Note that if you are having difficulty installing these dependencies, [ensure](http://stackoverflow.com/a/10076029) that your version of Node.js is up to date.
	
4. Run selenium server with `start-selenium`.

5. Run Cucumber.js in this directory.

		$ cucumber.js
