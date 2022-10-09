import React, { useEffect } from 'react'
import { useState } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import axios from 'axios';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL="http://127.0.0.1:5000";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
   const userInfo = localStorage.getItem("userInfo");
     if (userInfo)
     navigate('/accueil');
  });


  const submitHandler = async (e) => {
     e.preventDefault();
    
    try{
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    
      setLoading(true)
      const { data } = await axios.post("/api/users/login",
      {
        email,
        password,
      },
      config
      );
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      

    } catch(error){ 
      setError(error.response.data.message);
      setLoading(false);
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
             {loading && <Loading/>}
              <form onSubmit={submitHandler}>

                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" 
                    placeholder="Email" type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                </div>
                <div className="form-group focused">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" 
                    placeholder="Password" type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className='row mt-3'>
                <div className="custom-control custom-control-alternative custom-checkbox ">
                  <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                  <label className="custom-control-label"><span>Remember me</span></label>
                </div>
                </div>
                <div className="text-center">
                  <button type="submit"
                  className="btn btn-primary my-4"
                   >Connexion</button>
                </div>
               </form>


              <div className="row mt-3">
                   <div className="col-6 text-right">
                     <a href="/register" className="btn btn-white mt-4"><small>Créer un compte </small></a>
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

export default Login
