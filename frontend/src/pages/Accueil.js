import React from 'react'

function Accueil(){
  return (
    <div>
       <section className="section section-hero section-shaped">
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
                   <div className='page-header'>
                   <div className="container shape-container d-flex align-items-center py-lg">
                       <div className="row row-grid justify-content-between align-items-center">

                          <div className="col-lg-5">
                            <h3 className="display-3 text-white">SOS Animaux<span className="text-white"/></h3>
                            <p className="lead text-white">Une plate-forme pour protéger, soigner et abriter les animaux</p>
                            <div className="btn-wrapper mt-5">
                              <a href="/login" className="btn btn-white">
                              <img src="assets/img/icons/common/user.png" className='btn-icon'></img>
                              <span className="btn-inner--text"> Login</span>
                             
                              </a>
                              <a href="/register" className="btn btn-white">
                              <img src="assets/img/icons/common/add-user.png" className='btn-icon'></img>
                               <span className="btn-inner--text">Register </span>
                              </a>
                            </div>
                          </div>

                          <div className="col-4 col-lg-6 mb-lg-auto">
                              <div className="">
                                <img src="./assets/img/faces/cat.png"  style={{width: '460px',height: '340px'}}></img>
                              </div>   
                          </div>
                       </div>
                   </div>
                   </div>
                  
               </section>

    </div>
  )
}

export default Accueil
