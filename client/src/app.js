import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './reset.css';
import './app.css'
import Home from './component/home.js';
import musicSearch from './component/musicSearch.js';
import SideBar from './component/sideBar.js';
import MusicBar from './component/musicBar.js';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});



class App extends React.Component {
    componentDidMount(){
        fetch('/');
    }
    
    render(){
        return (
            <Router>
                <div className="wrapper">
                    <div className="music-app">
                        <div className="music-content">
                            <SideBar></SideBar> 
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/search" component={musicSearch}></Route>
                            
                        </div>
                        <MusicBar></MusicBar>

                    </div>

                </div>
            </Router>
        )
    }
}

export default withStyles(styles)(App);
