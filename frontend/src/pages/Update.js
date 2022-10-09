import React from 'react'

const Update = () => {
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
               <a className="navbar-brand mr-lg-5" >
                    <img src="assets/img/brand/blue.png" style={{width: '300px', height: '100px'}} className="img-fluid"></img>
                </a>
             <div className="card-body px-lg-5 py-lg-5">
               <form >
               <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-favourite-28"></i></span>
                    </div>
                    <input className="form-control" placeholder="Username" 
                    type="name"
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" placeholder="Email" 
                    />
                  </div>
                </div>
                <div className="form-group focused">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Password"
                     type="password"
                     />
                  </div>
                </div>
                <div className="form-group focused">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-camera-compact"></i></span>
                    </div>
                    <input className="custom-control-label" 
                    id="custom-file"
                    type="file"
                    label="Upload Profile Picture"
                    />
                  </div>
                </div>
               
                <div className="text-center">
                  <button type="submit" value="Connecter" 
                  className="btn btn-primary my-4"
                   >Modifier</button>
                  <a href="/profile" className="btn btn-danger my-4" type="button" name="button" >
                    Annuler
                  </a>
                </div>
               </form>
               </div>

                   <div className="mt-5 py-5 border-top text-center"> </div>
                </div>
            </div>
        </div>
    </section>
  
      
    </div>
  )
}

export default Update
