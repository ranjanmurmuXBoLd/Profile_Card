import React from "react";
import './ProfileCart.css'
import profile from '../assets/ranjan.jpg';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';


export default function Profile(){

    return (
        <div className="profile-container">
            <div className="profile">
                <div className="img-container">
                <img className="img" src={profile} alt="" />
                </div>
                <h3 className="name">Ranjan Murmu</h3>
                <h4 className="working">Learning developer</h4>
                <samp className="description">A learning developer for now to become a best developer i want to become. This is my passion, when i study at 10th slandered. But i loss my passion in college, now i try to fixed every thing.</samp>
                <form action={import.meta.env.VITE_LINKEDIN_URL}>
                    <button className="btn" >Hire Me</button>
                </form>
                
            </div>
            <div className="social-handle">
                <form action={import.meta.env.VITE_INSTAGRAM_URL}>
                    <button className="btn-instagram">
                    <img className="img-instagram" src={instagram} alt="" />
                    </button>
                </form>
                <form action={import.meta.env.VITE_FACEBOOK_URL}>
                    <button className="btn-facebook">
                    <img src={facebook} alt="" />
                    </button>
                </form>
                <form action={import.meta.env.VITE_YOUTUBE_URL}>
                    <button className="btn-youtube">
                    <img src={youtube} alt="" />
                    </button>
                </form>
                
            </div>
        </div>
    )
}