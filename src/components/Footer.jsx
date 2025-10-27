const Footer = ({ fbrInv, gstInclude, software, mobile }) => {
  return (
    <>
      <footer>
        <div className="footer">
          <p>FBR INV#: {fbrInv}</p>
          <p>{gstInclude}</p>
          <p>{software}</p>
          <p>{mobile}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
