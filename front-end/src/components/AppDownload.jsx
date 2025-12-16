import React from "react";
import "../assets/styles/appdownload.css";

function AppDownload(){
 return(
    <div className="app-download" id="app-download">
        <p>For better experience download <br /> kibandaski app</p>
        <div className="app-download-platforms">
            <img src="/images/playstore.svg" alt="google playstore icon" />
            <img src="/images/appstore.svg" alt="app store icon" />
        </div>
    </div>
 )
}

export default AppDownload;