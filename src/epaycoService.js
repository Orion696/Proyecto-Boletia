const ePayco = require("epayco-sdk-node")({
    apiKey: "c5d3dd3753d732c178b38b721dc3df84",
    privateKey: "5c04ce9496b873655b53311676833c13",
    lang: "ES",
    test: true,
  });
  
  export const createTransaction = async (amount, description) => {
    const transaction = {
      name: "John Doe",
      email: "johndoe@example.com",
      amount: amount,
      tax: "0",
      tax_base: "0",
      currency: "COP",
      description: description,
    };
  
    try {
      const response = await ePayco.cash.create(transaction);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Transaction failed");
    }
  };
  