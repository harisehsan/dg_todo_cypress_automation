// module.exports = {
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// };

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'reporters/custom.js'
})