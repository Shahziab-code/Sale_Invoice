import { useLocation } from "react-router-dom";
import "../App.css"

const InvoiceDetails = () => {
  const location = useLocation();
  const { invoice } = location.state || {};
  return (
    <>
        <section className="invoiceDetails">
            <div className="upper">
              <h2>{invoice.saleInvoice}</h2>
            </div>
            <div className="lower">
                <div className="left-details">
                <p><strong>Invoice#</strong> {invoice.invoiceNo}</p>
                <p><strong>POS ID: </strong>{invoice.posId}</p>
                <p><strong>Customer NTN: </strong>{invoice.customerNtn}</p>
                </div>
                <div className="right-details">
                <p><strong>User: </strong>{invoice.user}</p>
                <p><strong>Date: </strong>{invoice.date}</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default InvoiceDetails