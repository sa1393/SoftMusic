import React from 'react';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 95beb86c2c20365b9fad6d04fd49abf8e2d06179

import './home.css';

class Home extends React.Component{
<<<<<<< HEAD
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
=======
    render(){
        return(
            <div className="home">         
                
>>>>>>> 95beb86c2c20365b9fad6d04fd49abf8e2d06179
            </div>
        )
    }
}

export default Home;