const fs = require("fs");
const Web3 = require("web3");
const web3 = new Web3("http://localhost:8545");

module.exports = {
  async deploy() {
    const byteCode = fs.readFileSync("build/counter_sol_CounterContract.bin");

    const abi = JSON.parse(
      fs.readFileSync("build/counter_sol_CounterContract.abi")
    );

    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    const contract = new web3.eth.Contract(abi);

    try {
      const deployment = await contract
        .deploy({ data: byteCode.toString() })
        .send({ from: address, gas: 5000000 });

      console.log("CounterContract successfully deployed!");
      console.log("Deployed at", deployment.options.address);
    } catch (error) {
      console.error(error);
    }
  },
};
