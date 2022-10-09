import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
 
  return (
    <div>
       <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2">
                    <div className="container">
                        <a className="navbar-brand mr-lg-5">
                          <img src="assets/img/brand/blue.png" style={{width: '300px', height: '70px'}} className="img-fluid"></img>
                        </a>
                        
                        <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                            <li className="nav-item dropdown">
                               <a className="nav-link nav-link-icon"  target="_blank" data-toggle="tooltip" title="Like us on Facebook">
                                 <i className="fa fa-facebook-square"></i>
                                 <span className="nav-link-inner--text d-lg-none">Facebook</span>
                               </a>
                            </li>
                           <li className="nav-item dropdown">
                               <a className="nav-link nav-link-icon"  target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
                                 <i className="fa fa-instagram"></i>
                                 <span className="nav-link-inner--text d-lg-none">Instagram</span>
                               </a>
                            </li>
                            <li className="nav-item dropdown">
                             <a className="nav-link nav-link-icon"  target="_blank" data-toggle="tooltip" title="Follow us on Twitter">
                              <i className="fa fa-twitter-square"></i>
                               <span className="nav-link-inner--text d-lg-none">Twitter</span>
                              </a>
                           </li>
                          
                           
                        </ul>
                    </div>
                </nav> 
    </div>
  )
}

export default Header
