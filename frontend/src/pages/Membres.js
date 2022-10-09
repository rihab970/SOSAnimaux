import React from 'react'

const Membres = () => {
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
           <div className="col-lg-4">
               <div className="card card-profile shadow mt--400">
                   <div className="row" style={{padding:"25px",marginTop:"10px"}}>
                      <div class="col-lg-2 order-lg-1">
                       <a href="#" className="avatar rounded-circle">
                         <img alt="Image placeholder" src="assets/img/faces/team-4.jpg"></img>
                        </a>
                        </div>
                        <div class="col-lg-6 order-lg-2">
                         <h5>Rihab Mribah</h5>
                         </div>
                         <div class="col-lg-4 order-lg-3">
                        <a href="/" className="btn btn-sm btn-danger" type="button" name="button" >Suivre</a>
                        </div>
                   </div>
                   <div className="row" style={{padding:"25px",marginTop:"10px"}}>
                      <div class="col-lg-2 order-lg-1">
                       <a href="#" className="avatar rounded-circle">
                         <img alt="Image placeholder" src="assets/img/faces/fezbot.jpg"></img>
                        </a>
                        </div>
                        <div class="col-lg-6 order-lg-2">
                         <h5>Nesrine Rouis</h5>
                         </div>
                         <div class="col-lg-4 order-lg-3">
                        <a href="/" className="btn btn-sm btn-danger" type="button" name="button" >Suivre</a>
                        </div>
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

export default Membres
