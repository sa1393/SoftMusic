import React, { useEffect } from "react";

function DownloadButton({ id, type, img }) {


  useEffect(()=> {
    const iFrame = document.getElementsByName("buttom-api-frame");
    console.log(iFrame);

    var cssLink = document.createElement("link");
    cssLink.href = "iframeStyle.css"; 
    cssLink.rel = "stylesheet"; 
    cssLink.type = "text/css"; 
    

    for (var i = 0; i < iFrame.length; i++)
    {
      // iFrame[i].document.head.appendChild(cssLink);
      console.log(iFrame[i].document);
      iFrame[i].frameBorder="0";   //  For other browsers.
      iFrame[i].setAttribute("frameBorder", "0");   //  For other browsers (just a backup for the above).
      iFrame[i].contentWindow.document.body.style.border="none";   //  For IE.
    }

    // document.body.appendChild(iframe);
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
