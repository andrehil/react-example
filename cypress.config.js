const config = {
    e2e: {},
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: false,
        json: true,
    }
};

export default config;