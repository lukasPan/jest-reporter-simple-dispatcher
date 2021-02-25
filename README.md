# Simple jest reporter with data fetch

This jest reporter sends all data it's received after all the test suites have been executed.  
There is [node-fetch](https://www.npmjs.com/package/node-fetch) dependecy in this project. Project is using `fetch` method for sending data to url defined by user.

## Installation

You may install this package as a development dependency:

```bash
npm install --save-dev jest-reporter-simple-fetch
yarn add --dev jest-reporter-simple-fetch
```

## Configuration

Configure [Jest](https://facebook.github.io/jest/docs/en/configuration.html) to use the reporter.

For example, create a `jest.config.js` file containing:

```javascript
module.exports = {
  "verbose": false,
  "reporters": [
    ["jest-reporter-simple-fetch", {"url": "YOUR SERVER URL"}]
  ]
};
```
