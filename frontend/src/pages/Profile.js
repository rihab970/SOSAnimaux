import React from 'react'

const Profile = () => {
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
                   <div className="row justify-content-center">
                       <div style={{padding:"16px 18px", marginTop:"20px" }}>
                           <div className="card-profile-image">
                              <a href="#">
                                 <img src="assets/img/faces/team-4.jpg"  className="img-fluid rounded-circle shadow-lg" style={{width:'150px'}}></img>
                               </a>
                           </div>
                       </div>
                    </div>
                    <div className="text-center mt-5">
                        <h3>Rihab Mribah</h3>
                        <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i>RihabMribah@gmail.com</div>
                        <div className="py-4 mt-lg-0">
                          <a href="/update" className="btn badge-pill badge-primary text-uppercase">Modifier</a>
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

export default Profile
