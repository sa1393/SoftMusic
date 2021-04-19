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
            <span className="suggest-artist">Ed Sheeren</span>
            <div className="home-container">
                <div>
                    <div></div>
                </div>
                <span>Popular</span>
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