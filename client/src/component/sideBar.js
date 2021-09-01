import React from 'react';
import '../css/sideBar.css';

import { Link} from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles"
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles(theme => ({  // style 요소 선언
    ic: { 
      margin: theme.spacing(1)
    }
  }));

let SideBar = ()=>{
    return(
        <div className="side">
            <div className="title">
                <span>SOFT MUSIC</span>
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

            {/* <ul className="playList">
                <Button className="playList-btn" variant="contained" color="secondary">NEW PLAYLIST</Button>
                <li></li>
            </ul> */}
        </div>
    )
}

export default SideBar;