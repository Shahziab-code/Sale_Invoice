import "../App.css";
import "../Products.json";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InvoiceForm = () => {
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

  const [selectedValue, setSelectedValue] = useState("option 1");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updateForm = { ...formData, [name]: value };

    const price = parseFloat(updateForm.price) || 0;
    const qty = parseFloat(updateForm.qty) || 0;
    const gstp = parseFloat(updateForm.gstp) || 0;
    const disc = parseFloat(updateForm.disc) || 0;

    const subTotalNo = price * qty;
    const gstAmt = (subTotalNo * gstp) / 100;
    const total = subTotalNo + gstAmt - disc;

    updateForm.subTotalNo = subTotalNo.toFixed(2);
    updateForm.gstAmt = gstAmt.toFixed(2);
    updateForm.total = total.toFixed(2);

    if (qty == 0) {
      updateForm.total = 0;
      updateForm.subTotalNo = 0;
    }

    setFormData(updateForm);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/post", formData);

      console.log(response.data);
      alert("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to send data");
    }
  };

  return (
    <>
      <div className="Form">
        <h1>Invoice Form</h1>
      </div>
      <main className="app-container">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h2>Shop Details</h2>

            <div className="formRow">
              <div className="formColume">
                <label htmlFor="name" className="formLabel">
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
              </div>
              <div className="formColume">
                <label htmlFor="address" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="ntnno" className="formLabel">
                  <b>NTN No</b>
                </label>
                <input
                  type="number"
                  name="ntnno"
                  id="ntnno"
                  placeholder="Enter Your NTN No:"
                  autoComplete="off"
                  value={formData.ntnno}
                  onChange={handleChange}
                  className="inputField"
                />
              </div>
              <div className="formColume">
                <label htmlFor="email" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="phone" className="formLabel">
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
              </div>
            </div>

            <h2>Invoice Details</h2>

            <div className="formRow">
              <div className="formColume">
                <label htmlFor="saleInvoice" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="invoiceNo" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="posId" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="customerNtn" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="user" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="date" className="formLabel">
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
              </div>
            </div>

            <h2>Items Data</h2>

            <div className="formRow">
              <div className="formColume">
                <label htmlFor="sNo" className="formLabel">
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
              </div>

              <div className="formColume">
                {/* <label htmlFor="item" className="formLabel">
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
                /> */}
                <select
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  >
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>

              <div className="formColume">
                <label htmlFor="qty" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="price" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="gstp" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="gstAmt" className="formLabel">
                  <b>GST Amount:</b>
                </label>
                <input
                  type="number"
                  name="gstAmt"
                  id="gstAmt"
                  placeholder="Enter Gst Amount:"
                  autoComplete="off"
                  value={formData.gstAmt}
                  readOnly
                  className="inputField"
                />
              </div>

              <div className="formColume">
                <label htmlFor="disc" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="total" className="formLabel">
                  <b>Total:</b>
                </label>
                <input
                  type="number"
                  name="total"
                  id="total"
                  placeholder="Enter Total:"
                  autoComplete="off"
                  value={formData.total}
                  readOnly
                  className="inputField"
                />
              </div>
            </div>

            <h2>Payments Details</h2>

            <div className="formRow">
              <div className="formColume">
                <label htmlFor="subTotal" className="formLabel">
                  <b>Sub Total:</b>
                </label>
                <input
                  type="number"
                  name="subTotalNo"
                  id="subTotalNo"
                  placeholder="Enter Amount:"
                  autoComplete="off"
                  value={formData.subTotalNo}
                  readOnly
                  className="inputField"
                />
              </div>

              <div className="formColume">
                <label htmlFor="TotalGst" className="formLabel">
                  <b>GST Free:</b>
                </label>
                <input
                  type="number"
                  name="totalGstNo"
                  id="totalGstNo"
                  placeholder="Enter GST Amount:"
                  autoComplete="off"
                  value={formData.totalGstNo}
                  onChange={handleChange}
                  className="inputField"
                />
              </div>

              <div className="formColume">
                <label htmlFor="grossAmount" className="formLabel">
                  <b>Amount Type:</b>
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
              </div>

              <div className="formColume">
                <label htmlFor="totalDiscount" className="formLabel">
                  <b>Discount type:</b>
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
              </div>

              <div className="formColume">
                <label htmlFor="fbrFree" className="formLabel">
                  <b>FBR:</b>
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
              </div>

              <div className="formColume">
                <label htmlFor="netBill" className="formLabel">
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
              </div>
            </div>

            <h2>Payment Method</h2>

            <div className="formRow">
              <div className="formColume">
                <label htmlFor="cash" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="cashNo" className="formLabel">
                  <b>Payment Amount:</b>
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
              </div>
            </div>

            <h2>Development Details</h2>

            <div className="formRow">
              <div className="formColume">
                <label htmlFor="fbrInv" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="gstInclude" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="software" className="formLabel">
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
              </div>

              <div className="formColume">
                <label htmlFor="mobile" className="formLabel">
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
              </div>
            </div>

            <button
              className="previewBtn"
              type="submit"
              onClick={() => navigate("/")}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default InvoiceForm;
