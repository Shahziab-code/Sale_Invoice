import fbrLogo from '../assets/fbrLogo.jpg'
import qrCode from '../assets/qrCode.png'

const Header = ({name, address, ntnno, email, phone}) => {
  return (
    <>
        <header className="header">
        <div className="container">
            <div className="left">
            <h1 className="heading">{name}</h1>
            <p>{address}</p>
            <p><strong>NTN No: </strong>{ntnno}</p>
            <p><strong>Email: </strong>{email}</p>
            <p><strong>Phone No: </strong>{phone}</p>
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