import React, { useState } from "react";

const Payment = () => {
  const [redirectUrl, setRedirectUrl] = useState("");

  const initiatePayment = async () => {
    try {
      const response = await fetch("/create_order/"); // Django API endpoint
      const data = await response.json();
      setRedirectUrl(data.redirect_url);
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div>
      <h1>Complete Payment</h1>
      <button onClick={initiatePayment}>Pay Now</button>
      {redirectUrl && (
        <a href={redirectUrl} target="_blank" rel="noopener noreferrer">
          Proceed to Payment
        </a>
      )}
    </div>
  );
};

export default Payment;
