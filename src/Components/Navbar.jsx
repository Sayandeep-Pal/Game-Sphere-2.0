import React from 'react'
import logo from './transperantlogo.png'
import { Link } from 'react-router-dom'
import { auth, db } from "./Firebase";

const Navbar = () => {

    
    async function handleLogout() {
        try {
          await auth.signOut();
          window.location.href = "/";
          console.log("User logged out successfully!");
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
      }

    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary"data-bs-theme="dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/mainContent">
                    <img src={logo} alt="Logo" width="30" height="30" class="d-inline-block align-text-top"/>
                        Game Sphere</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to='/aboutme'>About Me</Link>
                            </li>
                            
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">My Games</a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" onClick={handleLogout}>Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
