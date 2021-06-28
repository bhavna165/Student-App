import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/layout/Navbar'
import Footer from "./component/layout/Footer"
import Logout from './component/layout/Logout';
import Login from './component/pages/Login';
import Registration from './component/pages/Registration';
import Home from "./component/pages/Home"
import PersonalInfo  from './component/pages/PersonalInfo';
import Payment from './component/pages/Payment';
import DocumentUpload  from "./component/pages/DocumentUpload"
import { StageSpinner } from "./component/layout/loding";


const App = ()=> {
  return (
    
      
      <>
       <div className="justify-content-center align-items-center" id="loader">
            <StageSpinner/>
        </div>
      <Router>
        <Navbar />
      <Switch>
        <Route exact path="/"  component={Home} />
      <Route exact path="/Registration" component ={Registration} />
      <Route exact path="/Login" component ={Login} />
      <Route exact path="/DocumentUpload" component ={DocumentUpload} />
      <Route exact path="/Logout" component ={Logout} />
      <Route exact path="/PesonalInfo" component={PersonalInfo } />
      <Route exact path="/Payment" component={Payment} />
      </Switch>
      {/* <Registeration /> */}
      <Footer />
      </Router>
      </>    
    
  );
}

export default App;
