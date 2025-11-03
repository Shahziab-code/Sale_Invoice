import { useLocation } from "react-router-dom"
import "../App.css";

const Payments = () => {
  const location = useLocation();
  const { invoice } = location.state || {};
  return (
    <>
        <section className="lastPayment">
            <div>
                <h3 className="h3">
                <strong>Payments</strong>
                </h3>
                <p>{invoice.cash}</p>
            </div>
            <div>
                <p>{invoice.cashNo}</p>
            </div>
        </section>
    </>
  )
}

export default Payments;