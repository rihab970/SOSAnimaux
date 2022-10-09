import React, { useEffect, useState } from 'react'


const Publication = ({description, pic}) => {
  
  
  
  return (
    <div>
        <div className="row justify-content-center">
           <div className="col-lg-7" >
             <div className="card" style={{background:"#e0c0f0"}}>
               <div style={{ padding: '15px',display: 'flex'}}>
                  <a href="#" className="avatar rounded-circle">
                    <img alt="Image placeholder" src="./assets/img/faces/team-4.jpg"></img>
                  </a>
                  <h4 style={{ margin: '0 12px'}}>Rihab Mribah</h4>
                  <a href="#"  type="button" name="button" style={{ paddingLeft:"550px"}}>
                      <img src="assets/img/icons/common/edit.png"></img>
                  </a>
               </div>
            
               <div style={{color:"black", fontSize:"18px", textAlign:"left", paddingLeft:'40px', paddingRight:'12px'}}>
                {description}
               </div>
               <br/>
               <div className="center col-10">
                 <img src={pic} alt="Rounded image" className="img-fluid rounded shadow" style={{width: "600px", height:"350px"}}></img>
               </div>
               <br/>


               <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 14px',background:'#a0a1a3'}}>
                 <div style={{ paddingLeft:'13px'}}>
                 <img src='assets/img/icons/common/emoji_like.png' style={{width: '25px',marginRight: '-3px'}}></img>
                 <img src='assets/img/icons/common/emoji_surprised.png' style={{width: '25px',marginRight: '-3px'}}></img>
                 <img src='assets/img/icons/common/lovd.png' style={{width: '25px',marginRight: '-3px'}}></img>
                 </div>
                 <div>
                 <span >89  </span>
                 <span><a href='#'>Commentaire</a></span>
                 </div>
               </div>

               <div className="input-group input-group-alternative" style={{paddingLeft:'10px', padding:'10px 12px'}}>
                    <input className="form-control" placeholder="Ajouter un commentaire" type="text" />
                    <a href="/" className="btn btn-icon-only" type="button" name="button" >
                      <img src="assets/img/icons/common/check.png"></img>
                   </a>
              </div>
             </div>
           </div>
        </div>
        <hr/>
      
      

       




        
    </div>
  )
}

export default Publication
