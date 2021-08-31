import React from 'react';
import axios from 'axios';

import '../css/home.css';


const api = {
    key : process.env.REACT_APP_YOUTUBE_API_KEY,
}

let Home = ()=>{
    //await axios.get(api.key);
    return(
        <div className="home">
            <h1>추천 음악</h1>        
            <span className="suggest-artist"></span>
            <div className="home-container">
                <div>
                    <div></div>
                </div>
                <span></span>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;