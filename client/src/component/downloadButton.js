import React, { useEffect } from "react";

function DownloadButton({ id, type, img }) {


  useEffect(()=> {
    const iframe = document.getElementsByName("buttom-api-frame");
    console.log(iframe);
    
    
  }, [])
  
  return (
    <div className="download">
      {/* <h2>Download {type === "mp3" ? "music" : "video"} file</h2> */}
      <>
        {/* <h3>{id}</h3> */}
        <img src={img}></img>
        
        <iframe
          name="buttom-api-frame"
          className="button-api-frame"
          src={`https://api.vevioz.com/@api/button/${type}/${id}`}
          allowtransparency="true"
          scrolling="no"
        />
      </>
     
    </div>
  );
}

export default DownloadButton;
