import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";

import Header from "./Header.jsx";
import InvoiceDetails from "./InvoiceDetails.jsx";
import Table from "./Table.jsx";
import Order from "./Order.jsx";
import Payments from "./Payments.jsx";
import Footer from "./Footer.jsx";

const InvoiceDesign = () => {
  const location = useLocation();
  const { invoice } = location.state || {};

  const navigate = useNavigate();
  return (
    <div className="invoiceDesignContainer">
      {invoice ? (
        <div>
          <Header />

          <InvoiceDetails />

          <Table />

          <Order />

          <Payments />

          <Footer />
          <button className="previewBtn" onClick={() => window.print()}>Print</button>
          <button className="closeBtn" onClick={() => navigate(-1)}>Close</button>
        </div>
      ) : (
        <p>No invoice selected</p>
      )}
    </div>
  );
};

export default InvoiceDesign;
