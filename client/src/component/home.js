import React from 'react';
import axios from 'axios';

import '../css/home.css';


const api = {
    key : process.env.REACT_APP_YOUTUBE_API_KEY,
}

let Home = ()=>{
    //await axios.get(api.key);
    let musicList 
    

    return(
        <div className="home">
            <h1>추천하는 음악</h1>        
            <span className="suggest-artist"></span>
            <div className="home-container">
                {
                    
                }
            </div>
            
        </div>
    )
}

let HomeHorizontal = () => {
    return (
        <div>

        </div>
    )
}

export default Home;