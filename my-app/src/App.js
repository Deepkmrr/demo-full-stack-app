import "./App.css";
import SignUp from "./Components/SignUp";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Layout/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Employee from "./Components/Employee";
import NotFound from "./Components/NotFound";
import AddEmployee from "./Components/Employee/AddEmployee";
import EditEmployee from "./Components/Employee/EditEmployee";
import ViewEmployee from "./Components/Employee/ViewEmployee";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/addemployee" element={<AddEmployee />}></Route>
          <Route path="/editemployee/:id" element={<EditEmployee />}></Route>
          <Route path="/viewemployee/:id" element={<ViewEmployee />}></Route>
        </Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
