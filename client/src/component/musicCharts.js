import React, { useEffect } from "react";
import "../css/musicCharts.css";
import MusicList from "./musicList";


let MusicCharts = ()=>{
    let musicListArr = []
    
    useEffect(()=> {
        chartSearchMusic("신호등");
        chartSearchMusic("STAY");
        chartSearchMusic("바라만 본다");
        chartSearchMusic("Next Level");
        chartSearchMusic("Permission to Dance");
        chartSearchMusic("낙하 (with 아이유");
        chartSearchMusic("Weekend");
        chartSearchMusic("Butter");
        chartSearchMusic("OHAYO MY NIGHT");
        
    }, [])


    const chartSearchMusic= (text)=> {
        
        var request=require('request');
        
        var optionParams={
            q:"신호등",
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
        console.log(url);

        request(url, function(err, res, body){

            var data=JSON.parse(body).items;
            console.log(data);
            musicListArr.push(data[0]);
  
            console.log(musicListArr);
        });
    }
        

    return(
        <div className="charts">
            <h1>
                Charts
            </h1>
            {<MusicList music={musicListArr}></MusicList>}
            
 

        </div>
    )
}

export default MusicCharts;
