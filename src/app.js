import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './reset.css';
import './app.css'
import Home from './screens/home.js';
import musicSearch from './screens/musicSearch.js';
import SideBar from './screens/sideBar.js';
import MusicBar from './screens/musicBar.js';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});



class App extends React.Component {
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
