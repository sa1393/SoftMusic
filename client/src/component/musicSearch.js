import React, {Component} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons';

import "../css/musicSearch.css";

let api = 'AIzaSyDwP6JLC7qLGriFg4_ljicOWP_JLt7-IVc';

let MusicSearch = ()=>{

    return(
        <div className="search">
            <div className="searchBarArea">
                <FontAwesomeIcon icon={faSearch} className="searchIcon"></FontAwesomeIcon>
                <input type="text" className="searchBar"></input>
            </div>
        </div>
    )
}

export default MusicSearch;
