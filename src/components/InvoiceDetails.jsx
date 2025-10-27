
const invoiceDetails = ({saleInvoice, invoiceNo, posId, customerNtn, user, date }) => {
  return (
    <>
        <section className="invoiceDetails">
            <div className="upper">
              <h2>{saleInvoice}</h2>
            </div>
            <div className="lower">
                <div className="left-details">
                <p><strong>Invoice#</strong> {invoiceNo}</p>
                <p><strong>POS ID: </strong>{posId}</p>
                <p><strong>Customer NTN: </strong>{customerNtn}</p>
                </div>
                <div className="right-details">
                <p><strong>User: </strong>{user}</p>
                <p><strong>Date: </strong>{date}</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default invoiceDetails