import React from "react";
import "./App.css";
import EmployeesList from "./components/EmployeesList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<EmployeesList/>}></Route>
              <Route exact path="/employees" element={<EmployeesList/>}></Route>
              <Route exact path="/add-employee" element={<AddEmployee/>}></Route>
              <Route exact path="/update-employee/:id" element={<UpdateEmployee/>}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
