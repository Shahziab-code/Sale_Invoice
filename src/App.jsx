import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer.jsx";
import Payments from "./components/Payments.jsx";
import Order from "./components/Order.jsx";
import Table from "./components/Table.jsx";
import InvoiceDetails from "./components/InvoiceDetails.jsx";
import Header from "./components/Header.jsx";

function App() {
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

  return (
    <>
      <main className="app-container">
        {showInvoice ? (
          <div>
            <Header
              name={name}
              address={address}
              ntnno={ntnno}
              email={email}
              phone={phone}
            />

            <InvoiceDetails
              saleInvoice={saleInvoice}
              invoiceNo={invoiceNo}
              posId={posId}
              customerNtn={customerNtn}
              user={user}
              date={date}
            />

            <Table
              sNo={sNo}
              item={item}
              qty={qty}
              price={price}
              gstp={gstp}
              gstAmt={gstAmt}
              disc={disc}
              total={total}
            />

            <Order
              subTotal={subTotal}
              subTotalNo={subTotalNo}
              totalGst={totalGst}
              totalGstNo={totalGstNo}
              grossAmount={grossAmount}
              grossAmountNo={grossAmountNo}
              totalDiscount={totalDiscount}
              totalDiscountNo={totalDiscountNo}
              fbrFree={fbrFree}
              fbrFreeNo={fbrFreeNo}
              netBill={netBill}
            />

            <Payments cash={cash} cashNo={cashNo} />

            <Footer
              fbrInv={fbrInv}
              gstInclude={gstInclude}
              software={software}
              mobile={mobile}
            />

            <button
              className="previewBtn"
              onClick={() => setShowInvoice(false)}
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            <div className="input-container">
              <label htmlFor="name">
                <b>Name</b>
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter Company Name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="inputField"
              />

              <label htmlFor="address">
                <b>Address</b>
              </label>
              <input
                type="text"
                name="text"
                id="address"
                placeholder="Enter Company Adress"
                autoComplete="off"
                value={address}
                onChange={(e) => setAdress(e.target.value)}
                className="inputField"
              />

              <label htmlFor="ntnno">
                <b>NTN No</b>
              </label>
              <input
                type="number"
                name="number"
                id="ntnno"
                placeholder="Enter Your NTN No:"
                autoComplete="off"
                value={ntnno}
                onChange={(e) => setNtnno(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={saleInvoice}
                onChange={(e) => setSaleInvoice(e.target.value)}
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
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
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
                value={posId}
                onChange={(e) => setPosId(e.target.value)}
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
                value={customerNtn}
                onChange={(e) => setCustomerNtn(e.target.value)}
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
                value={user}
                onChange={(e) => setUser(e.target.value)}
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                value={sNo}
                onChange={(e) => setSNo(e.target.value)}
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
                value={item}
                onChange={(e) => setItem(e.target.value)}
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
                value={qty}
                onChange={(e) => setQty(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                value={gstp}
                onChange={(e) => setGstp(e.target.value)}
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
                value={gstAmt}
                onChange={(e) => setGstAmt(e.target.value)}
                className="inputField"
              />

              <label htmlFor="dics">
                <b>Disc:</b>
              </label>
              <input
                type="number"
                name="dics"
                id="dics"
                placeholder="Enter Disc:"
                autoComplete="off"
                value={disc}
                onChange={(e) => setDisc(e.target.value)}
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
                value={total}
                onChange={(e) => setTotal(e.target.value)}
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
                value={subTotal}
                onChange={(e) => setSubTotal(e.target.value)}
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
                value={subTotalNo}
                onChange={(e) => setSubTotalNo(e.target.value)}
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
                value={totalGst}
                onChange={(e) => setTotalGst(e.target.value)}
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
                value={totalGstNo}
                onChange={(e) => setTotalGstNo(e.target.value)}
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
                value={grossAmount}
                onChange={(e) => setGrossAmount(e.target.value)}
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
                value={grossAmountNo}
                onChange={(e) => setGrossAmountNo(e.target.value)}
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
                value={totalDiscount}
                onChange={(e) => setTotalDiscount(e.target.value)}
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
                value={totalDiscountNo}
                onChange={(e) => setTotalDiscountNo(e.target.value)}
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
                value={fbrFree}
                onChange={(e) => setFbrFree(e.target.value)}
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
                value={fbrFreeNo}
                onChange={(e) => setFbrFreeNo(e.target.value)}
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
                value={netBill}
                onChange={(e) => setNetBill(e.target.value)}
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
                value={cash}
                onChange={(e) => setCash(e.target.value)}
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
                value={cashNo}
                onChange={(e) => setCashNo(e.target.value)}
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
                value={fbrInv}
                onChange={(e) => setFbrInv(e.target.value)}
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
                value={gstInclude}
                onChange={(e) => setGstInclude(e.target.value)}
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
                value={software}
                onChange={(e) => setSoftware(e.target.value)}
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
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="inputField"
              />

              <button
                className="previewBtn"
                onClick={() => setShowInvoice(true)}
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
