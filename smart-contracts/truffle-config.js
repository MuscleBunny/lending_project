module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777"
    }
  },

  compilers: {
    solc: {
      version: "^0.4.17",
      /*optimizer: {
        enabled: true,
        runs: 200
      }*/
    }
  },
};