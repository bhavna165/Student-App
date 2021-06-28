import React from "react";
import logo from "../../images/logo.png"
import { NavLink } from "react-router-dom";
// import './Navbar.css'


const Navbar = () => {
  return (
    <>

     
      <nav className=" navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">

          <a className=" navbar-brand"><img src={logo} alt="..." ></img></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Registration">register</NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/Login">login</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link active" to="/DocumentUpload">upload document</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link active" to="/PesonalInfo">Personal Information</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/Payment">Payment</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link active" to="/documentUpload">DocumentUpload</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link active" to="/Logout">Logout</NavLink>
              </li>


            </ul>


          </div>

        </div>
      </nav>



    </>
  );
};
export default Navbar;
