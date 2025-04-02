import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const navigate =useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Method:", paymentMethod);
    console.log("Card Details:", cardDetails);
    navigate("/order-confirmation");
    alert("Payment Successful! 🎉");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">Payment</h2>

      <form onSubmit={handlePaymentSubmit}>
        {/* Payment Method Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="creditCard">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {/* Card Payment Fields */}
        {paymentMethod === "creditCard" && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="flex space-x-3">
              <div>
                <label className="block text-sm font-medium">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
