import React from 'react'

const Footer = () => {
  return (
    <>
    <footer >
    <hr/>
    <div className="container">
      <div className="row align-items-center justify-content-md-between">
        <div className="col-md-6">
          <div className="copyright">
            &copy; 2022 <a href="" target="_blank">SOS Animaux</a>.
          </div>
        </div>
        <div className="col-md-6">
          <ul className="nav nav-footer justify-content-end">
            <li className="nav-item">
              <a href="" className="nav-link" target="_blank">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </footer>
    </>
  )
}

export default Footer
