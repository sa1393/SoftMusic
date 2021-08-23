import React from "react";

function DownloadButton({ id, type, img }) {
  return (
    <div className="download">
      {/* <h2>Download {type === "mp3" ? "music" : "video"} file</h2> */}
      <>
        <img src="https://i.ytimg.com/vi/AAOyOZ3GeZ0/default.jpg"></img>
        <iframe
          className="button-api-frame"
          src={`https://api.vevioz.com/@api/button/${type}/${id}`}
          allowtransparency="true"
          scrolling="no"
          style={{ width: "100%", fontSize: "30px", border: 0 }}
        />
      </>
     
    </div>
  );
}

export default DownloadButton;
