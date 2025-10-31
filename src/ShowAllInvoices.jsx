import React, { useState, useEffect } from "react";
import axios from "axios";



const ShowAllInvoices = () => {
      const [invoicesItems, setInvoicesItems] = useState([]);

const handleGetData = async()=>{
     const res = await fetch("http://localhost:4000/api/invoices");
  const data = await res.json() ;
  
  setInvoicesItems(data);
}

useEffect(()=>{
  handleGetData();
},[])
// handleGetData()
  return (
    <div>
        {invoicesItems && (
            invoicesItems.map((item)=>{
                return(
                    <div key={item._id} style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Sale Invoice:</strong> {item.saleInvoice}</p>
                        <p><strong>POS ID:</strong> {item.posId}</p>
                        <p><strong>Customer NTN:</strong> {item.customerNtn}</p>
                        <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                    </div>
                )
            })
        )}
    </div>
  )
}

export default ShowAllInvoices