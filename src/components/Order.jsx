import { useLocation } from "react-router-dom";
import "../App.css";


const Order = () => {
  const location = useLocation();
  const { invoice } = location.state || {};
  return (
    <>
      <section className="position">
        <div className="orderDetails">
          <div className="left-details">
            <p>Sub Total:</p>
            <p>Total GST:</p>
            <p>Gross Amount:</p>
            <p>Total Discount:</p>
            <p>FBR Free:</p>
            <p className="netBill">
              <strong>Net Bill:</strong>
            </p>
          </div>
          <div className="right-details">
            <p>{invoice.subTotalNo}</p>
            <p>{invoice.totalGstNo}</p>
            <p>{invoice.grossAmountNo}</p>
            <p>{invoice.totalDiscountNo}</p>
            <p>{invoice.fbrFreeNo}</p>
            <p className="netBill">
              <strong>{invoice.netBill}</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
