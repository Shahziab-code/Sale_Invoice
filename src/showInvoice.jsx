// {showInvoice ? (
//           <div>
//             <Header
//               name={name}
//               address={address}
//               ntnno={ntnno}
//               email={email}
//               phone={phone}
//             />

//             <InvoiceDetails
//               saleInvoice={saleInvoice}
//               invoiceNo={invoiceNo}
//               posId={posId}
//               customerNtn={customerNtn}
//               user={user}
//               date={date}
//             />

//             <Table
//               sNo={sNo}
//               item={item}
//               qty={qty}
//               price={price}
//               gstp={gstp}
//               gstAmt={gstAmt}
//               disc={disc}
//               total={total}
//             />

//             <Order
//               subTotal={subTotal}
//               subTotalNo={subTotalNo}
//               totalGst={totalGst}
//               totalGstNo={totalGstNo}
//               grossAmount={grossAmount}
//               grossAmountNo={grossAmountNo}
//               totalDiscount={totalDiscount}
//               totalDiscountNo={totalDiscountNo}
//               fbrFree={fbrFree}
//               fbrFreeNo={fbrFreeNo}
//               netBill={netBill}
//             />

//             <Payments cash={cash} cashNo={cashNo} />

//             <Footer
//               fbrInv={fbrInv}
//               gstInclude={gstInclude}
//               software={software}
//               mobile={mobile}
//             />

//             <button
//               className="previewBtn"
//               onClick={() => setShowInvoice(false)}
//             >
//               Edit Information
//             </button>
//           </div>
//         )