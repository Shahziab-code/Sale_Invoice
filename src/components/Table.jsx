import { useLocation } from "react-router-dom";
import "../App.css";

const Table = () => {
  const location = useLocation();
  const { invoice } = location.state || {};
  return (
    <>
      <table className="itemsTable">
        <thead>
          <tr>
            <th>S#</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>GST %</th>
            <th>GST Amt</th>
            <th>Disc</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{invoice.sNo}</td>
            <td>{invoice.item}</td>
            <td>{invoice.qty}</td>
            <td>{invoice.price}</td>
            <td>{invoice.gstp}%</td>
            <td>{invoice.gstAmt}</td>
            <td>{invoice.disc}</td>
            <td>{invoice.total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
