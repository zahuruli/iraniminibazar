import LoginPage from "./page/authentication/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider} from './page/authentication/Auth';
import PurchaseOperation from "./page/purchase/PurchaseOperation";
import Sidebar from "./components/Sidebar";
import StockOperation from "./page/stock/StockOperation";
import PurchasesReport from "./page/purchase/PurchasesReport";
import SupplierReport from "./page/purchase/SupplierReport";
import SalePage from "./page/sale/SalePage";
import Signup from "./page/authentication/SignUp";
import Home from "./page/home/HomeDashboard";
import SaleReport from "./page/sale/SaleReport";
import CustomerTranscationReport from "./page/sale/CustomerTransactionReport";
import Addproducts from "./page/stock/Addproducts";
import CashBook from "./page/cashbook/CashBook";
import EmployeeSetup from "./page/markenting/EmployeeSetup";
import MarketingDueCollection from "./page/markenting/MarketingDueCollection";
import ExpanceReport from "./page/income-expense/ExpenseReport";
import ExpanceInput from "./page/income-expense/ExpenseInput";
import Quotation from "./page/quotation/Quotation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <div>
              <Sidebar />
              <Home />
            </div>
          }
        ></Route>
        <Route
          path="/purchase"
          element={
            <div>
              <Sidebar />
              <PurchaseOperation />
            </div>
          }
        ></Route>
        <Route
          path="/purchase/productpurchasereport"
          element={
            <div>
              <Sidebar />
              <PurchasesReport />
            </div>
          }
        ></Route>
        <Route
          path="/stock/stockreport"
          element={
            <div>
              <Sidebar />
              <StockOperation />
            </div>
          }
        ></Route>
        <Route
          path="/purchase/supplierreport"
          element={
            <div>
              <Sidebar />
              <SupplierReport />
            </div>
          }
        ></Route>
        <Route
          path="/quotation"
          element={
            <div>
              <Sidebar />
              <Quotation />
            </div>
          }
        ></Route>
        <Route
          path="/salepage"
          element={
            <div>
              <Sidebar />
              <SalePage />
            </div>
          }
        ></Route>
        <Route
          path="/stock/addproduct"
          element={
            <div>
              <Sidebar />
              <Addproducts />
            </div>
          }
        ></Route>
        <Route
          path="/sale/sale_report"
          element={
            <div>
              <Sidebar />
              <SaleReport />
            </div>
          }
        ></Route>
        <Route
          path="/sale/customer_transaction"
          element={
            <div>
              <Sidebar />
              <CustomerTranscationReport />
            </div>
          }
        ></Route>
        <Route
          path="/cashbook"
          element={
            <div>
              <Sidebar />
              <CashBook />
            </div>
          }
        ></Route>
        <Route
          path="/income_expense/expense_iput"
          element={
            <div>
              <Sidebar />
              <ExpanceInput />
            </div>
          }
        ></Route>
        <Route
          path="/income_expense/expense_report"
          element={
            <div>
              <Sidebar />
              <ExpanceReport />
            </div>
          }
        ></Route>
        <Route
          path="/marketing/marketing_due_collection"
          element={
            <div>
              <Sidebar />
              <MarketingDueCollection />
            </div>
          }
        ></Route>
        <Route
          path="/marketing/employee_setup"
          element={
            <div>
              <Sidebar />
              <EmployeeSetup />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
