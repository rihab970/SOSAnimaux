import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';

const Register = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else{
       setMessage(null);
       try{
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);
        const{ data } = await axios.post(
          "/api/users",
          { name, pic, email, password},
          config
        );
        
        if(data) {
          alert("Data saved successfuly");
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setPic("");
       }
       setLoading(false);
       }catch(error){
          setError(error.reponse.data.message);
          setLoading(false);
       }
    }
  };


  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png"){
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "sosanimaux");
      data.append("cloud_name", "dz0tiaw59");
      fetch("https://api.cloudinary.com/v1_1/dz0tiaw59/image/upload", {
        method: "post",
        body: data,
      }).then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());})
        .catch((err) => {
            console.log(err);
        });
    } else{
      
    }

  };

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
           <div className="card bg-secondary shadow border-0">
               <a href="/" className="btn btn-white btn-icon-only back-to-top mt-2" type="button" name="button" >
                 <img src="assets/img/icons/common/fleche-gauche.png"></img>
               </a>
               <br/>
               <a className="navbar-brand mr-lg-5" >
                    <img src="assets/img/brand/blue.png" style={{width: '300px', height: '100px'}} className="img-fluid"></img>
                </a>
            <div className="card-body px-lg-5 py-lg-5">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
              {loading && <Loading/>}
              <form onSubmit={submitHandler} >
               <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-favourite-28"></i></span>
                    </div>
                    <input className="form-control" placeholder="Username" 
                    type="name" value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" placeholder="Email" 
                    type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group focused">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Password"
                     type="password" value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
                </div>
                <div className="form-group focused">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Confirm Password" 
                    type="password" value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                {picMessage && (<ErrorMessage variant="danger">{picMessage}</ErrorMessage>)}
                <div className="form-group focused">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-camera-compact"></i></span>
                    </div>
                    <input className="custom-control-label" 
                    onChange={(e) => postDetails(e.target.files[0])}
                    id="custom-file"
                    type="file"
                    label="Upload Profile Picture"
                    />
                  </div>
                </div>
               
                <div className="text-center">
                  <button type="submit" value="Connecter" 
                  className="btn btn-primary my-4"
                   >Créer</button>
                  <a href="/" className="btn btn-danger my-4" type="button" name="button" >
                    Annuler
                  </a>
                </div>
               </form>


              <div className="row mt-3">
                   <div className="col-6 text-right">
                     <a href="/login" className="mb-0"><small>Vous avez un compte ? </small></a>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </div>
   
  </section>


    </div>
  )
}

export default Register
