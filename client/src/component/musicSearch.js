import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons';

import "../css/musicSearch.css";
import DownloadButton from "./downloadButton";
import MusicList from "./musicList";

let MusicSearch = ()=>{
    const [musicList, setMusicList] = useState([]);
    const [text, setText] = useState('');

    const onKeyPress=(e, value)=> {
        if(e.key == 'Enter') {
            searchMusic();
        }
    }
    const searchMusic= (e)=> {
        
        var request=require('request');
        
        var optionParams={
            q:"ㅇㅇ",
            part:"snippet",
            key:"AIzaSyDXRkhYhznJVHsazwLBwPVz9pqR-u1zVRU",
            maxResults:2,
            type:"video",
            regionCode:"KR",
            videoDuration:"short"
        };
        optionParams.q = text;

        optionParams.q=encodeURI(optionParams.q);

        var url="https://www.googleapis.com/youtube/v3/search?";
        for(var option in optionParams){
            url+=option+"="+optionParams[option]+"&";
        }

        url=url.substr(0, url.length-1);

        request(url, function(err, res, body){
            
            setMusicList([]);
            //json형식을 서버로 부터 받음
            var data=JSON.parse(body).items;
            let tempMusicList = [];
            for(var content in data){
                //youtube downloader에 videoId 넘기면 됨.
                // console.log(data[content].snippet.title+" : "+data[content].id.videoId);
                tempMusicList.push(data[content]);
                
            }
            setMusicList([...tempMusicList]);
            console.log(musicList);
        });
        
    }

    const ChangeText = (e) => {
        setText(e.target.value);
    }
    
    return(
        <div className="search">
            <div className="searchBarArea">
                <FontAwesomeIcon icon={faSearch} className="searchIcon"></FontAwesomeIcon>
                <input type="text" value={text} onChange={ChangeText} className="searchBar" onKeyPress={onKeyPress}></input>
            </div>
            <div className="resultMusic">
                {<MusicList music={musicList}></MusicList>}
            </div>
        </div>
    )
}

export default MusicSearch;
