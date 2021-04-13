import React from 'react';
import axios from 'axios';

import './home.css';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    getApi = async()=> {
        await axios.get("AIzaSyCVgHKbtb3VaXgPz0nNcYT8RBMr_bQo9qs");
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