import React, { useEffect ,useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './MainPage.css'
import Footer from '../Components/Footer'
import logo from '../Components/transperantlogo.png'
import img1 from '../Components/cargame.png'
import img2 from '../Components/FPSlogo.png'
import ss1 from '../Components/ss1.jpg'
import ss2 from '../Components/ss2.jpg'
import ss3 from '../Components/ss3.jpg'
import ss4 from '../Components/ss4.jpg'
import ss5 from '../Components/ss5.jpg'
import ss6 from '../Components/ss6.jpg'
import ss7 from '../Components/TT.jpg'
import ss8 from '../Components/Coming-soon.webp'
import Beats from '../Components/Beats';
import { auth, db } from "../Components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'
import CarGame from './My Car.apk'
import Loading from './Loading';
import GameSphere from '../Components/GameSphere';

const MainPage = () => {

  useEffect(()=>{
    AOS.init({
      duration: 900,
      offset: 300,
    });
  },[]);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  


  return (
    <>
    {userDetails ?(
    <>
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
                                <Link class="nav-link active" aria-current="page" onClick={handleLogout}>Log Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <GameSphere/>                      

      <div className="logo-body">
        <div className="intro-text" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <h1 className='hey' data-aos="zoom-in-right">Hey! {userDetails.Username}</h1>
          <br />
          <h5 data-aos="zoom-in-left">Welcome to GameSphere, your ultimate destination for immersive gaming experiences! Dive into a universe where every click, swipe, and tap unlocks a new adventure. Join our vibrant community, explore our games. Ready to play? Let's get started!</h5>
        </div>
        
      </div>
    
      <div className="main-body">
        <div className="game-card" data-aos="fade-up-right" >
          <h1 className="title">My Car</h1>
          <div className="pic-boder">
          <img src={img1} className='car-img' />
          </div>
          <div className="desc">My Car is an open world game Car controller mobile game. Here you will get a gorgeous car to drive in a city. Explore the city and enjoy the game.</div>
          <a download href={CarGame}><button className="see-more btn1 fa fa-download">    Get</button></a>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide slider1" data-aos="zoom-in-up">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ss1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={ss2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={ss3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={ss4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={ss5} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={ss6} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="game-card one " data-aos="fade-up-left">
          <h1 className="title"> Urban Chaos</h1>
          <img src={img2} className='fps-img' />
          <div className="desc">Step into the chaotic world of Urban Chaos, an immersive first-person shooter where you have the freedom to explore a sprawling cityscape. Navigate through bustling streets, dark alleys, and towering skyscrapers as you take control of your destiny. Whether you choose to engage in intense combat with NPCs, complete daring missions, or simply cruise around the city in your car, the choice is yours. Experience the thrill of unrestricted exploration and high-octane action in a city that never sleeps. Are you ready to embrace the chaos?</div>
          <button className="see-more btn2">Coming Soon</button>
        </div>

        <div id="carouselExample" class="carousel slide slider2" data-aos="zoom-in-up">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={ss7} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ss8} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <Beats className='beats'/>
      </div>

      <Footer/>
    </>
                            ) : (
                              <Loading/>
                            )}
                            </>
  );
}

export default MainPage
