import { useState } from "react";
import axios from "axios";

import "./App.css";
import Footer from "./components/Footer.jsx";
import Payments from "./components/Payments.jsx";
import Order from "./components/Order.jsx";
import Table from "./components/Table.jsx";
import InvoiceDetails from "./components/InvoiceDetails.jsx";
import Header from "./components/Header.jsx";
import InvoiceList from "./InvoiceList.jsx";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    ntnno: "",
    email: "",
    phone: "",
    saleInvoice: "",
    invoiceNo: "",
    posId: "",
    customerNtn: "",
    user: "",
    sNo: "",
    item: "",
    qty: "",
    price: "",
    gstp: "",
    gstAmt: "",
    disc: "",
    total: "",
    date: "",
    subTotal: "",
    totalGst: "",
    grossAmount: "",
    totalDiscount: "",
    fbrFree: "",
    netBill: "",
    subTotalNo: "",
    totalGstNo: "",
    grossAmountNo: "",
    totalDiscountNo: "",
    fbrFreeNo: "",
    cash: "",
    cashNo: "",
    fbrInv: "",
    gstInclude: "",
    software: "",
    mobile: "",
  });
  const [showInvoiceList, setShowInvoiceList] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [ntnno, setNtnno] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [saleInvoice, setSaleInvoice] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [posId, setPosId] = useState("");
  const [customerNtn, setCustomerNtn] = useState("");
  const [user, setUser] = useState("");
  const [sNo, setSNo] = useState("");
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [gstp, setGstp] = useState("");
  const [gstAmt, setGstAmt] = useState("");
  const [disc, setDisc] = useState("");
  const [total, setTotal] = useState("");
  const [date, setDate] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [totalGst, setTotalGst] = useState("");
  const [grossAmount, setGrossAmount] = useState("");
  const [totalDiscount, setTotalDiscount] = useState("");
  const [fbrFree, setFbrFree] = useState("");
  const [netBill, setNetBill] = useState("");
  const [subTotalNo, setSubTotalNo] = useState("");
  const [totalGstNo, setTotalGstNo] = useState("");
  const [grossAmountNo, setGrossAmountNo] = useState("");
  const [totalDiscountNo, setTotalDiscountNo] = useState("");
  const [fbrFreeNo, setFbrFreeNo] = useState("");
  const [cash, setCash] = useState("");
  const [cashNo, setCashNo] = useState("");
  const [fbrInv, setFbrInv] = useState("");
  const [gstInclude, setGstInclude] = useState("");
  const [software, setSoftware] = useState("");
  const [mobile, setMobile] = useState("");

  const getData = async () => {
    const res = await fetch("http://localhost:4000");
    const data = await res.json();
    console.log(data);
  };

  getData();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/post", formData);

      console.log(response.data);
      alert("Data sent successfully!");
      setShowInvoiceList(true);
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to send data");
    }
  };
  return (
    <>
      <main className="app-container">
        {showInvoiceList ? (
          <InvoiceList onBack={() => setShowInvoiceList(false)} />
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                <b>Name</b>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Company Name"
                autoComplete="off"
                // value={name}
                value={formData.name}
                // onChange={(e) => setName(e.target.value)}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="address">
                <b>Address</b>
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Company Adress"
                autoComplete="off"
                value={formData.address}
                // value={address}
                // onChange={(e) => setAdress(e.target.value)}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="ntnno">
                <b>NTN No</b>
              </label>
              <input
                type="number"
                name="ntnno"
                id="ntnno"
                placeholder="Enter Your NTN No:"
                autoComplete="off"
                // value={ntnno}
                value={formData.ntnno}
                // onChange={(e) => setNtnno(e.target.value)}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Account"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="phone">
                <b>Phone</b>
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone No:"
                autoComplete="off"
                value={formData.phone}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="saleInvoice">
                <b>Invoice</b>
              </label>
              <input
                type="text"
                name="saleInvoice"
                id="saleInvoice"
                placeholder="Enter the Type of Invoice:"
                autoComplete="off"
                value={formData.saleInvoice}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="invoiceNo">
                <b>Invoice#</b>
              </label>
              <input
                type="text"
                name="invoiceNo"
                id="invoiceNo"
                placeholder="Enter Invoice No:"
                autoComplete="off"
                value={formData.invoiceNo}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="posId">
                <b>POS ID</b>
              </label>
              <input
                type="number"
                name="posId"
                id="posId"
                placeholder="Enter POS ID:"
                autoComplete="off"
                value={formData.posId}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="customerNtn">
                <b>Customer NTN:</b>
              </label>
              <input
                type="text"
                name="customerNtn"
                id="customerNtn"
                placeholder="Enter Customer NTN Status:"
                autoComplete="off"
                value={formData.customerNtn}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="user">
                <b>User Role:</b>
              </label>
              <input
                type="role"
                name="user"
                id="user"
                placeholder="Enter User Role:"
                autoComplete="off"
                value={formData.user}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="date">
                <b>Date:</b>
              </label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Enter Date Role:"
                autoComplete="off"
                value={formData.date}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="sNo">
                <b>S No:</b>
              </label>
              <input
                type="number"
                name="sNo"
                id="sNo"
                placeholder="Enter S No:"
                autoComplete="off"
                value={formData.sNo}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="item">
                <b>Items:</b>
              </label>
              <input
                type="text"
                name="item"
                id="item"
                placeholder="Enter Items:"
                autoComplete="off"
                value={formData.item}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="qty">
                <b>Qty:</b>
              </label>
              <input
                type="number"
                name="qty"
                id="qty"
                placeholder="Enter Qty:"
                autoComplete="off"
                value={formData.qty}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="price">
                <b>Price:</b>
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter Price:"
                autoComplete="off"
                value={formData.price}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="gstp">
                <b>GST Percentage:</b>
              </label>
              <input
                type="number"
                name="gstp"
                id="gstp"
                placeholder="Enter Gst Percentage:"
                autoComplete="off"
                value={formData.gstp}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="gstAmt">
                <b>GST Amount:</b>
              </label>
              <input
                type="number"
                name="gstAmt"
                id="gstAmt"
                placeholder="Enter Gst Amount:"
                autoComplete="off"
                value={formData.gstAmt}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="disc">
                <b>Disc:</b>
              </label>
              <input
                type="number"
                name="disc"
                id="disc"
                placeholder="Enter Disc:"
                autoComplete="off"
                value={formData.disc}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="total">
                <b>Total:</b>
              </label>
              <input
                type="number"
                name="total"
                id="total"
                placeholder="Enter Total:"
                autoComplete="off"
                value={formData.total}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="subTotal">
                <b>Total Type:</b>
              </label>
              <input
                type="text"
                name="subTotal"
                id="subTotal"
                placeholder="Enter Type of Total:"
                autoComplete="off"
                autoCapitalize="on"
                value={formData.subTotal}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="subTotalNo">
                <b></b>
              </label>
              <input
                type="number"
                name="subTotalNo"
                id="subTotalNo"
                placeholder="Enter Amount:"
                autoComplete="off"
                value={formData.subTotalNo}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="totalGst">
                <b>GST Type:</b>
              </label>
              <input
                type="text"
                name="totalGst"
                id="totalGst"
                placeholder="Enter Type of GST:"
                autoComplete="off"
                autoCapitalize="on"
                value={formData.totalGst}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="totalGstNo">
                <b></b>
              </label>
              <input
                type="number"
                name="totalGstNo"
                id="totalGstNo"
                placeholder="Enter Amount:"
                autoComplete="off"
                value={formData.totalGstNo}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="grossAmount">
                <b>Amount Type:</b>
              </label>
              <input
                type="text"
                name="grossAmount"
                id="grossAmount"
                placeholder="Enter Type of Amount:"
                autoComplete="off"
                autoCapitalize="on"
                value={formData.grossAmount}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="grossAmountNo">
                <b></b>
              </label>
              <input
                type="number"
                name="grossAmountNo"
                id="grossAmountNo"
                placeholder="Enter Amount:"
                autoComplete="off"
                value={formData.grossAmountNo}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="totalDiscount">
                <b>Discount type:</b>
              </label>
              <input
                type="text"
                name="totalDiscount"
                id="totalDiscount"
                placeholder="Enter Type of Discount:"
                autoComplete="off"
                autoCapitalize="on"
                value={formData.totalDiscount}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="totalDiscountNo">
                <b></b>
              </label>
              <input
                type="number"
                name="totalDiscountNo"
                id="totalDiscountNo"
                placeholder="Enter Amount:"
                autoComplete="off"
                value={formData.totalDiscountNo}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="fbrFree">
                <b>FBR:</b>
              </label>
              <input
                type="text"
                name="fbrFree"
                id="fbrFree"
                placeholder="Enter FBR:"
                autoComplete="off"
                autoCapitalize="on"
                value={formData.fbrFree}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="fbrFreeNo">
                <b></b>
              </label>
              <input
                type="number"
                name="fbrFreeNo"
                id="fbrFreeNo"
                placeholder="Enter Amount:"
                autoComplete="off"
                value={formData.fbrFreeNo}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="netBill">
                <b>Net Bill:</b>
              </label>
              <input
                type="number"
                name="netBill"
                id="netBill"
                placeholder="Enter Net Bill Amount:"
                autoComplete="off"
                value={formData.netBill}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="cash">
                <b>Payment Type:</b>
              </label>
              <input
                type="text"
                name="cash"
                id="cash"
                placeholder="Enter the Type of Payments:"
                autoComplete="off"
                autoCapitalize="on"
                value={formData.cash}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="cashNo">
                <b></b>
              </label>
              <input
                type="text"
                name="cashNo"
                id="cashNo"
                placeholder="Enter Amount:"
                autoComplete="off"
                value={formData.cashNo}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="fbrInv">
                <b>FBR INV:</b>
              </label>
              <input
                type="text"
                name="fbrInv"
                id="fbrInv"
                placeholder="Enter FBR INV#:"
                autoComplete="off"
                value={formData.fbrInv}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="gstInclude">
                <b>GST Details:</b>
              </label>
              <input
                type="text"
                name="gstInclude"
                id="gstInclude"
                placeholder="Enter GST Including Details:"
                autoComplete="off"
                value={formData.gstInclude}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="software">
                <b>Software Developer Details:</b>
              </label>
              <input
                type="text"
                name="software"
                id="software"
                placeholder="Enter Software Developer Details:"
                autoComplete="off"
                value={formData.software}
                onChange={handleChange}
                className="inputField"
              />

              <label htmlFor="mobile">
                <b>Mobile No:</b>
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Enter Mobile No:"
                autoComplete="off"
                value={formData.mobile}
                onChange={handleChange}
                className="inputField"
              />

              <button className="previewBtn" type="submit">
                Submint
              </button>
            </form>
          </>
        )}
      </main>
    </>
  );
}

export default App;
