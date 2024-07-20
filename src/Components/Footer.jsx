import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer"> 
        <div className="container"> 
            <div className="row"> 
                <div className="col-md-3"> 
                    <h3>Game Sphere</h3> 
                </div> 
                <div className="col-md-3"> 
                    <h5>About Me</h5> 
                    <p> 
                    This is  GameSphere, where creativity meets technology in the most captivating ways! Join into the limitless expanse of game development, where dreams become realities and adventures await around every corner. 
                   </p> 
                   <br />
                </div> 
                <div className="col-md-3"> 
                    <h5>Contact Me</h5> 
                    <ul className="list-unstyled"> 
                        <li>Email: gamesphereofficial06@gmail.com</li>  
                        <br/> 
                    </ul> 
                </div> 
                <div className="col-md-3"> 
                    <h5>Follow Me</h5> 
                    <ul className="list-inline footer-links"> 
                        {/* <li className="list-inline-item"> 
                            <a href="#"> 
                                <i className="fab fa-facebook"></i> 
                            </a> 
                        </li>  */}
                        <li className="list-inline-item"> 
                            <a href="https://twitter.com/SayandeepPal06?t=L0tgdPSlYFQChE8IGvZSfA&s=09"> 
                                <i className="fab fa-twitter"></i> 
                            </a> 
                        </li> 
                        <li className="list-inline-item"> 
                            <a href="https://www.instagram.com/_sayandeep_pal_/"> 
                                <i className="fab fa-instagram"></i> 
                            </a> 
                        </li>
                        <li className="list-inline-item"> 
                            <a href="https://github.com/Sayandeep-Pal"> 
                                <i className="fab fa-github"></i> 
                            </a> 
                        </li>  
                        <li className="list-inline-item"> 
                            <a href="https://www.linkedin.com/in/sayandeep-pal-273979282"> 
                                <i className="fab fa-linkedin"></i> 
                            </a> 
                        </li> 
                    </ul> 
                </div> 
            </div> 
            <hr/>
            <div className="row"> 
                <div className="col-md-6"> 
                    <p>© 2024 Game Sphere.</p> 
                    <p>Designed by <c style={{color:'green'}}>Sayandeep Pal</c></p>
                </div> 
                {/* <div className="col-md-6 text-end"> 
                    <ul className="list-inline footer-links"> 
                        <li className="list-inline-item"> 
                            <a href="#">Privacy Policy</a> 
                        </li> 
                        <li className="list-inline-item"> 
                            <a href="#">Terms of Service</a> 
                        </li> 
                        <li className="list-inline-item"> 
                            <a href="#">Sitemap</a> 
                        </li> 
                    </ul> 
                </div>  */}
            </div> 
        </div> 
    </footer> 
    </div>
  )
}

export default Footer
