import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons';

import "../css/musicSearch.css";
import DownloadButton from "./downloadButton";

let MusicSearch = ()=>{
    const [musicList, setMusicList] = useState(['1', '2', '3', '4']);
    const [text, setText] = useState('');

    const onKeyPress=(e, value)=> {
        if(e.key == 'Enter') {
            searchMusic();
        }
    }

    const searchMusic= (e)=> {
        
        var request=require('request');
        
        var optionParams={
            q:"",
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
            for(var content in data){
                //youtube downloader에 videoId 넘기면 됨.
                // console.log(data[content].snippet.title+" : "+data[content].id.videoId);
                musicList.push(data[content]);
            }
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
                {
                    musicList.map((data, idx) => {
                        console.log(data);
                        return data;
                    })
                }
                {/* <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" /> */}
            </div>
        </div>
    )
}

export default MusicSearch;
