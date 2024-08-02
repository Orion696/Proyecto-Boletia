import React from 'react';

const PaymentButton = ({ amount, description }) => {
  const handlePayment = () => {
    const ePayco = window.ePayco;
    const handler = ePayco.checkout.configure({
      key: 'c5d3dd3753d732c178b38b721dc3df84',
      test: true,
    });

    const data = {
      name: "John Doe",
      email: "johndoe@example.com",
      amount: amount,
      tax: "0",
      tax_base: "0",
      currency: "COP",
      description: description,
      external: "false",
      country: "CO",
      lang: "es",
    };

    handler.open(data);
  };

  return (
    <button onClick={handlePayment} className="btn btn-outline-info mt-2">
      Pagar con ePayco
    </button>
  );
};

export default PaymentButton;
