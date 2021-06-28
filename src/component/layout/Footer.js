
import React from "react";
// import "./footer.css"
import { FaFacebook } from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaHome} from "react-icons/fa";
const Footer=()=>
{
    return(
            <>
              <footer>
                  <div className="footer-content">
                      <h3>Get In Touch</h3>
                      <p>Find Us On</p>
                        <ul className="socials">
                            <li><a href="#"><i><FaFacebook color="white"/> </i></a></li>
                            <li><a href="#"><i><FaLinkedinIn color="white"/></i></a></li>
                            <li><a href="#"><i><FaYoutube color="white"/></i></a></li>
                            <li><a href="#"><i><FaTwitter color="white"/></i></a></li>
                        </ul> 
                        <div className="footer-bottom">
                      <p><a href="#"><i><FaHome color="white"/></i></a><span> Address:</span>NH 59-A Gram Sandalpur Tehsil Khategaon, District Dewas,MP,India,Pin Code -455336</p>
                  </div>
                  </div>
                  
              </footer>




            </>
    );
};
            export default Footer;