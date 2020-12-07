const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      // windowSize: '1200x900',
      "chrome": {
        "ignoreHTTPSErrors": true,
        // "defaultViewport": {
        //     "width": 1200,
        //     "height": 900
        // }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptJS-workingspace',
  plugins: {
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
      retries: 5,
      minTimeout: 5000
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}