const Table = ({ sNo, item, qty, price, gstp, gstAmt, disc, total }) => {
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
            <td>{sNo}</td>
            <td>{item}</td>
            <td>{qty}</td>
            <td>{price}</td>
            <td>{gstp}%</td>
            <td>{gstAmt}</td>
            <td>{disc}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
