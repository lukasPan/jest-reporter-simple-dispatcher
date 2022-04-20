const fetch = require('node-fetch');

class JestReporterSimplePostData {
    /**
     * constructor for the reporter
     *
     * @param {Object} globalConfig - Jest configuration object
     * @param {Object} options - Options object defined in jest config
     */
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    /**
     * Hook to process the test run results after all the test suites have been
     * executed
     *
     * @param {string} test - The Test last run
     * @param {JestTestRunResult} - Results from the test run
     */
    onRunComplete(test, runResults) {
        return this.report(runResults);
    }

    report(data) {
        return fetch(this._options.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    console.log(`ERROR in response of jest reporter: ${response.statusText}`);
                }
            })
            .catch(e =>
                console.log(`ERROR during run of jest reporter: ${e.stack}`)
            );
    }
}

module.exports = JestReporterSimplePostData;
