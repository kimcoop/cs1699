# Deliverable 3

Systems Testing with BDD

## Installation

Note: this assumes you have NodeJS and NPM installed. Here's a [guide to installing them](http://www.joyent.com/blog/installing-node-and-npm/).

1. Install [CucumberJS](https://github.com/cucumber/cucumber-js), [Moment.js](https://github.com/moment/moment), and [ChaiJS](http://chaijs.com/) dependencies in this directory.

		$ npm install cucumber moment chai


## Running the Tests

1. Ensure you've followed the Installation steps above

2. Following the instructions given [here](https://github.com/cucumber/cucumber-js#run-cucumber), you will need to run the following for each feature name from above `features/`

```
$ cucumber.js features/my_feature.feature --require features/step_definitions/my_step_definitions.js
```

## Write a Feature

1. Write features into in `features/<feature_name>.feature`

2. From the command line, run `cucumber.js` from above `features/`

3. Copy the code stub into `step_definitions/<feature_name>.steps.js`, following the pattern from `example.steps.js`


## Extras (Optional)

- Install Sublime Text 2 [Cucumber Bundle](https://github.com/npverni/cucumber-sublime2-bundle)
- Watch a [super helpful video](http://blog.codeship.io/2013/04/30/bdd-with-cucumber.html) on BDD with Cucumber/Rails
