import React from 'react';
import './sideBar.css';

import { Link} from 'react-router-dom';

<<<<<<< HEAD
import { makeStyles } from "@material-ui/core/styles"
=======

>>>>>>> 95beb86c2c20365b9fad6d04fd49abf8e2d06179
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons'


<<<<<<< HEAD
const useStyles = makeStyles(theme => ({  // style 요소 선언
    ic: { 
      margin: theme.spacing(1)
    }
  }));
=======
// const useStyles = makeStyles(theme => ({  // style 요소 선언
//     margin: {
//       margin: theme.spacing(1)
//     }
//   }));
>>>>>>> 95beb86c2c20365b9fad6d04fd49abf8e2d06179

class SideBar extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="side">
                <div className="title">
                    <span>BROWSE MUSIC</span>
                </div>
                <ul className="menu">
                    <li>
                        <FontAwesomeIcon icon={faHome} className="icon"></FontAwesomeIcon>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSearch} className="icon"></FontAwesomeIcon>
                        <Link to="/Search" className="link">Search</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faChartLine} className="icon"></FontAwesomeIcon>
                        <Link to="/Charts" className="link">Top Charts</Link>
                    </li>

                </ul>

                <ul className="playList">
                    <Button className="playList-btn" variant="contained" color="secondary">NEW PLAYLIST</Button>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default SideBar;