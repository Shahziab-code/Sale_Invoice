import React, { useState, useEffect } from "react";
import axios from "axios";
const InvoiceList = ({ onBack }) => {

  const [invoicesItems, setInvoicesItems] = useState([]);

useEffect(()=>{
  const res = axios.get("/api/invoices");
  const data = res.data;
  setInvoicesItems(data);
},[])

  app.get
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
