import axios, { useState } from "react";

const InvoiceList = ({ onBack }) => {
  return (
    <main>
      <h2>All Invoices</h2>
      <div className="invoiceContainer">
        <ul className="InvoiceItems">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <button onClick={onBack} className="previewBtn">
          Go Back
        </button>
    </main>
  );
};

export default InvoiceList;
