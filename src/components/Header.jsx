import fbrLogo from '../assets/fbrLogo.jpg'
import qrCode from '../assets/qrCode.png'
import { useLocation } from 'react-router-dom';
import "../App.css"

const Header = () => {
  const location = useLocation();
  const { invoice } = location.state || {};
  return (
    <>
        <header className="header">
        <div className="container">
            <div className="left">
            <h1 className="heading">{invoice.name}</h1>
            <p>{invoice.address}</p>
            <p><strong>NTN No: </strong>{invoice.ntnno}</p>
            <p><strong>Email: </strong>{invoice.email}</p>
            <p><strong>Phone No: </strong>{invoice.phone}</p>
            </div>
            <div className="right">
            <img className="fbrLogo" src={fbrLogo} alt="FBR POS Logo"/>
            <img className="qrCode" src={qrCode} alt="QR Code"/>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header 