import ShowAllInvoices from './components/ShowAllInvoices.jsx'
import InvoiceForm from './components/InvoiceForm.jsx'
import { Routes, Route, Link } from "react-router-dom";
import InvoiceDesign from './components/InvoiceDesign.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowAllInvoices />} />
        <Route path="/invoiceform" element={<InvoiceForm />} />
        <Route path="/invoicedesign" element={<InvoiceDesign />} />
      </Routes>
    </div>
  )
}

export default App