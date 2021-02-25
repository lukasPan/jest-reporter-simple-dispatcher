const fetch = require('node-fetch');

class JestReporterSimpleFetch {
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
        this.report(runResults);
    }

    report(data) {
        fetch(this._options.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    console.log(`ERROR jest reporter response: ${response.statusText}`);
                }
            })
            .catch(e =>
                console.log(`ERROR during jest reporter run: ${e.stack}`)
            );
    }
}

module.exports = JestReporterSimpleFetch;
