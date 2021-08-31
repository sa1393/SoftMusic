import React, { useEffect } from "react";
import '../css/downloadbutton.css';

function DownloadButton({ id, type, img, channelTitle, title }) {


  useEffect(()=> {
    const iFrame = document.getElementsByName("buttom-api-frame");
    console.log(iFrame);

    for (var i = 0; i < iFrame.length; i++)
    {
      iFrame[i].frameBorder="0";   //  For other browsers.
      iFrame[i].setAttribute("frameBorder", "0");   //  For other browsers (just a backup for the above).
      iFrame[i].contentWindow.document.body.style.border="none";   //  For IE.
    }

    // document.body.appendChild(iframe);
  }, [])
  
  return (
    <div className="download">
      {/* <h2>Download {type === "mp3" ? "music" : "video"} file</h2> */}
      <div className="download-box">
        {/* <h3>{id}</h3> */}
        <img src={img} className="thumbnail"></img>
        <div className="texts">
          <span>{title}</span>
          <span>{channelTitle}</span>
        </div>
        <iframe
          name="buttom-api-frame"
          className="button-api-frame"
          src={`https://api.vevioz.com/@api/button/${type}/${id}`}
          allowtransparency="true"
          scrolling="no"
          celllspacing="0"
        />
      </div>
     
    </div>
  );
}

export default DownloadButton;
