import React from 'react';
import axios from 'axios';

import './home.css';


const api = {
    key : process.env.REACT_APP_YOUTUBE_API_KEY,
}

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    getApi = async()=> {
        await axios.get(api.key);
    }

    render(){
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
}

export default Home;