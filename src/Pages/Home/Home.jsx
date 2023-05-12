import React,{useState} from 'react'
import "./home.scss"
import { AiFillPhone, AiOutlineMail} from 'react-icons/ai';
import Video from "../../assets/sushi.mp4"
import HeaderHome from "../../components/HeaderHome/HeaderHome";



function Home() {
    const [loading,setLoading]= useState(true) 

    if(loading){
        setTimeout(() => {
            setLoading(false)
        }, 2200);
        return <div className="load-wrapp">
        <div className="load-9">
          <div className="spinner">
            <div className="bubble-1"></div>
            <div className="bubble-2"></div>
          </div>
        </div>
      </div>
    }
    
  return (
    <div className='home-container'>
        <div className='video-container'>
            <video src={Video} autoPlay muted loop></video>
        </div>
        <div className='greetings'>
            <HeaderHome />
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