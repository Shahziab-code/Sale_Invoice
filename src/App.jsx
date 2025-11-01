// import { useState } from "react";
// import axios from "axios";

// import "./App.css";
// import Footer from "./components/Footer.jsx";
// import Payments from "./components/Payments.jsx";
// import Order from "./components/Order.jsx";
// import Table from "./components/Table.jsx";
// import InvoiceDetails from "./components/InvoiceDetails.jsx";
// import Header from "./components/Header.jsx";
// import ShowAllInvoices from "./ShowAllInvoices.jsx";

// function App() {
  
//   const [showAllInvoices, setShowAllInvoices] = useState(false);
//   const [showInvoice, setShowInvoice] = useState(false);
//   const [name, setName] = useState("");
//   const [address, setAdress] = useState("");
//   const [ntnno, setNtnno] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [saleInvoice, setSaleInvoice] = useState("");
//   const [invoiceNo, setInvoiceNo] = useState("");
//   const [posId, setPosId] = useState("");
//   const [customerNtn, setCustomerNtn] = useState("");
//   const [user, setUser] = useState("");
//   const [sNo, setSNo] = useState("");
//   const [item, setItem] = useState("");
//   const [qty, setQty] = useState("");
//   const [price, setPrice] = useState("");
//   const [gstp, setGstp] = useState("");
//   const [gstAmt, setGstAmt] = useState("");
//   const [disc, setDisc] = useState("");
//   const [total, setTotal] = useState("");
//   const [date, setDate] = useState("");
//   const [subTotal, setSubTotal] = useState("");
//   const [totalGst, setTotalGst] = useState("");
//   const [grossAmount, setGrossAmount] = useState("");
//   const [totalDiscount, setTotalDiscount] = useState("");
//   const [fbrFree, setFbrFree] = useState("");
//   const [netBill, setNetBill] = useState("");
//   const [subTotalNo, setSubTotalNo] = useState("");
//   const [totalGstNo, setTotalGstNo] = useState("");
//   const [grossAmountNo, setGrossAmountNo] = useState("");
//   const [totalDiscountNo, setTotalDiscountNo] = useState("");
//   const [fbrFreeNo, setFbrFreeNo] = useState("");
//   const [cash, setCash] = useState("");
//   const [cashNo, setCashNo] = useState("");
//   const [fbrInv, setFbrInv] = useState("");
//   const [gstInclude, setGstInclude] = useState("");
//   const [software, setSoftware] = useState("");
//   const [mobile, setMobile] = useState("");

//   return (
//     
//   );
// }

// export default App;



import React from 'react'
import ShowAllInvoices from './ShowAllInvoices'
import InvoiceForm from './components/InvoiceForm.jsx'
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowAllInvoices />} />
        <Route path="/invoiceform" element={<InvoiceForm />} />
      </Routes>
    </div>
  )
}

export default App