export const Counter = () => {
    const web3 = new Web3("http://localhost:8545");
    const address = "0x26f8F22183a2748CAF7C882538D0D2548b824df7";
    const abi = [
      {
        inputs: [],
        name: "count",
        outputs: [
          {
            internalType: "int256",
            name: "",
            type: "int256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decrease",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getCount",
        outputs: [
          {
            internalType: "int256",
            name: "",
            type: "int256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "increase",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];

  const contract = new web3.eth.Contract(abi, address)

  return {
    getCount: contract.methods.getCount().call,
    increase(address) {
      contract.methods.increase().send({from: address })
    },
    decrease(address) {
      contract.methods.decrease().send({ from: address })
    }
  }
  
}

export default Counter