import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const ShowAllInvoices = () => {
  const [invoicesItems, setInvoicesItems] = useState([]);

  const handleGetData = async () => {
    const res = await fetch("http://localhost:4000/api/invoices");
    const data = await res.json();

    setInvoicesItems(data);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const navigate = useNavigate();
  // handleGetData()
  return (
    <div className="InvoiceContainer">
      {invoicesItems &&
        invoicesItems.map((item) => {
          return (
            <div>
              <div key={item._id} className="InvoiceTable">
                <table className="InvoiceTableDetails">
                  <thead className="table-header">
                    <tr className="table-row">
                      <th className="table-head">
                        <strong>Name</strong>
                      </th>
                      <th className="table-head">
                        <strong>Sale Invoice</strong>
                      </th>
                      <th className="table-head">
                        <strong>POS ID</strong>
                      </th>
                      <th className="table-head">
                        <strong>Customer</strong>
                      </th>
                      <th className="table-head">
                        <strong>Date</strong>
                      </th>
                      <th className="table-head">
                        <strong>Action</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-row">
                      <td>{item.name}</td>
                      <td>{item.saleInvoice}</td>
                      <td>{item.posId}</td>
                      <td>{item.customerNtn}</td>
                      <td>{item.date}</td>
                      <td className="viewBtn">view</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      <button className="previewBtn" onClick={() => navigate("/invoiceform")}>Add New Invoice</button>
    </div>
  );
};

export default ShowAllInvoices;
