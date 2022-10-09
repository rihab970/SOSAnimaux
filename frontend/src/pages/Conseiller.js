import React from 'react'

const Conseiller = () => {
  return (
    <div>
       <section className="section section-shaped section-lg" style={{background:'#e0c0f0'}}>
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
                                 <img src="assets/img/faces/vermifuge-pour-chat.jpg"  className="img-fluid  shadow-lg" style={{width:'300px',height:'160'}}></img>
                               </a>
                           </div>
                       </div>
                    </div>
                    <div className="text-center mt-5">
                        <h3 style={{color:'#8965e0'}}>LES VERMIFUGES EN PIPETTE CHEZ LE CHAT</h3>
                        <div className="h6 font-weight-300" style={{marginLeft:'16px',marginRight:'10px'}}>Les parasites vivant dans les intestins des chats sont des vers intestinaux qui peuvent être dangereux sans traitement, notamment en cas de transmission à de jeunes enfants. Il est donc indispensable pour la santé de votre animal mais aussi pour éviter toute transmission à l’homme, de traiter régulièrement votre chat, et de le faire
                         examiner par un vétérinaire en cas de symptômes dus aux vers.</div>
                   </div>
                </div>
            </div>

            <div className="col-lg-4">
               <div className="card card-profile shadow mt--400">
                   <div className="row justify-content-center">
                       <div style={{padding:"16px 18px", marginTop:"20px" }}>
                           <div className="card-profile-image">
                              <a href="#">
                                 <img src="assets/img/faces/diabete-chat.jpg"  className="img-fluid  shadow-lg" style={{width:'300px',height:'290'}}></img>
                               </a>
                           </div>
                       </div>
                    </div>
                    <div className="text-center mt-5">
                        <h3 style={{color:'#8965e0'}}>LE DIABÈTE SUCRÉ CHEZ LE CHAT</h3>
                        <div className="h6 font-weight-300" style={{marginLeft:'16px',marginRight:'10px'}}>Le diabète sucré est une maladie causée par l’incapacité de faire ou d’utiliser l’insuline, qui est une hormone normalement produite et excrétée par le pancréas, et dont l’une des fonctions les plus importantes est de 
                        capturer les molécules de sucre (glucose) du sang pour être utilisées pour le métabolisme.
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

export default Conseiller
