import React from 'react'
import Navbar from '../Components/Navbar'
import BG from '../Components/bg4.avif'
import './AboutMe.css'
import Footer from '../Components/Footer'
const AboutMe = () => {
  return (
    <div>
        < Navbar/>

        <div className="bg" >
            <div className="about">
                <h5 className='text'>Welcome to GameSphere, where creativity meets technology in the most captivating ways! I am Sayandeep Pal, trying to develop game on a quest to weave immersive experiences that resonate with players on a profound level. With a blend of passion, determination, and a sprinkle of pixelated magic, I embark on the exhilarating journey of game development. From the solitary depths of coding to the boundless horizons of artistic expression, I channel my love for storytelling and interactive design into every pixel and line of code. Each game I craft is a testament to my unwavering dedication to creating worlds that inspire wonder, provoke thought, and ignite the imagination. Join me as I venture into the limitless expanse of game development, where dreams become realities and adventures await around every corner.</h5>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default AboutMe
