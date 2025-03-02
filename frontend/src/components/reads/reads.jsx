// import video
import myVideo from "../../assets/video/Animated Present Box.mp4";

// import useState
import { useState, useEffect } from "react";

// import components
 

// import css file
import "./reads.css";
const reads = () => {

  const [hide, setHide] = useState(true); // Default: show div
  
  const HideHandle = () => {
    setHide(false); // Hide the div immediately
  };

 
  return (
    <div>
      {hide && (
        <div>
          <div className="read-container">
            <div className="reads">
              <div className="reads-conten">
                <video className="video-content " autoPlay muted loop controls>
                  <source className="video" src={myVideo} type="video/mp4" />
                </video>

                <div className="button mt-5 ">
                  <button onClick={HideHandle} className=" bg-blue-600 transition-all p-2 w-[100%] z-30 rounded-md text-white hover:bg-blue-700">
                    Close
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default reads;
