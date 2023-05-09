import React from 'react'
import "./home.scss"
import { AiFillPhone, AiOutlineMail} from 'react-icons/ai';
import Video from "../../assets/sushi.mp4"
import Header from "../../components/Header/Header";



function Home() {
  return (
    <div className='home-container'>
        <div className='video-container'>
            {/* <img className='plate' src={Plate} alt="" /> */}
            <video src={Video} autoPlay muted loop></video>
        </div>
        <div className='greetings'>
            <Header />
            <div className='greetings-content'>
                <h3>ようこそ</h3>
                <h1 className='name'>Sushisma</h1>
                <h5>Your favorite sushi, now easier than ever</h5>
                <hr />
                <div className='social-net'>
                    <a href="https://www.instagram.com/amsiceza/"><AiFillPhone/></a>
                    <a href="https://github.com/amsiceza"><AiOutlineMail /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home