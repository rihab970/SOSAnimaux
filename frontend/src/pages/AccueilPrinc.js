import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Publication from '../components/Publication'
import axios from 'axios';
axios.defaults.baseURL="http://127.0.0.1:5000";
const AccueilPrinc = () => {
  const [pub, setPub] = useState([]);
  useEffect(()=>{
  async function fetchData() {
     await axios.get('/api/pub/show').then(res=>{
      setPub(res.data)
    })
  }
  fetchData();
 });
  const navigate = useNavigate();
  
  return (
    <div>   
    <section className="section section-shaped section-lg">
         <div className="shape shape-style-1 shape-primary">
            <span className="span-150"></span>
            <span className="span-50"></span>
            <span className="span-50"></span>
            <span className="span-75"></span>
            <span className="span-100"></span>
            <span className="span-75"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
          </div>
          <div className="row justify-content-center">
            <div className="col px-4">
              <div className="card card-profile shadow mt--400">
                <div className="row justify-content-center">
                   <div className="col-lg-3 order-lg-2"></div> 
                    <div className="col-lg-4 order-lg-1 text-lg-right align-self-lg-center">
                      <div className="py-4 mt-lg-0">
                       <a href="/publication" className="btn badge-pill badge-primary text-uppercase mr-4">Publication</a>
                       <a href="/conseille" className="btn badge-pill badge-primary text-uppercase mr-4">Conseillers</a>
                       <a href="/membres" className="btn badge-pill badge-primary text-uppercase float-right">Membres</a>
                      </div>
                    </div>
                    <div className="col-lg-4 order-lg-3 text-lg-right align-self-lg-center" >
                    <ul className="navbar-nav align-items-lg-center ml-lg-auto" style={{paddingTop:"20px"}}>
                         <a href="/profile" className="avatar avatar-xs rounded-circle" >
                               <img alt="Image placeholder" src="./assets/img/faces/team-4.jpg"></img>
                          </a>
                          <a className="btn btn-outline" target="_blank" onClick={() =>
                            {
                              localStorage.removeItem("userInfo");
                               navigate('/');
                            }}>
                              <span className="nav-link-inner--text">Déconnecter</span>
                          </a>
                         
                           </ul> 
                    </div>
                </div>
                <hr/>
                {
                   pub.map(({description, pic})=>(
                     <Publication description={description} pic={pic}/>
                   ))
                }
                 
                <div className="mt-5 py-5 border-top text-center">
                
               </div>
               <div className="mt-5 py-5 border-top text-center">
                
               </div>
              </div>
            </div>
          </div>
    </section>
    
  </div>
  )
}

export default AccueilPrinc
