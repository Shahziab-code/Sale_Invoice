
const Payments = ({cash, cashNo}) => {
  return (
    <>
        <section className="lastPayment">
            <div>
                <h3 className="h3">
                <strong>Payments</strong>
                </h3>
                <p>{cash}</p>
            </div>
            <div>
                <p>{cashNo}</p>
            </div>
        </section>
    </>
  )
}

export default Payments