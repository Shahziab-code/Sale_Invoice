import { useLocation } from "react-router-dom";
import "../App.css";

const Footer = () => {
  const location = useLocation();
  const { invoice } = location.state || {};
  return (
    <>
      <footer>
        <div className="footer">
          <p>FBR INV#: {invoice.fbrInv}</p>
          <p>{invoice.gstInclude}</p>
          <p>{invoice.software}</p>
          <p>{invoice.mobile}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
