const Order = ({
  subTotal,
  subTotalNo,
  totalGst,
  totalGstNo,
  grossAmount,
  grossAmountNo,
  totalDiscount,
  totalDiscountNo,
  fbrFree,
  fbrFreeNo,
  netBill,
}) => {
  return (
    <>
      <section className="position">
        <div className="orderDetails">
          <div className="left-details">
            <p>{subTotal}:</p>
            <p>{totalGst}:</p>
            <p>{grossAmount}:</p>
            <p>{totalDiscount}:</p>
            <p>{fbrFree}:</p>
            <p className="netBill">
              <strong>Net Bill:</strong>
            </p>
          </div>
          <div className="right-details">
            <p>{subTotalNo}</p>
            <p>{totalGstNo}</p>
            <p>{grossAmountNo}</p>
            <p>{totalDiscountNo}</p>
            <p>{fbrFreeNo}</p>
            <p className="netBill">
              <strong>{netBill}</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
