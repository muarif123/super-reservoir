const { createClient } = require('@reservoir0x/reservoir-sdk');

// Initialize the Reservoir client
const Client = createClient({
  chains: [{
    id: 1,
    baseApiUrl: 'https://api.reservoir.tools',
    default: true,
    apiKey: 'e9f86efe-e89c-59c0-acdd-77d5ef394be8',
  }],
  source: 'super-reservoir'
});
module.exports = Client
