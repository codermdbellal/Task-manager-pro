// import video
import myVideo from "../../assets/video/Animated Present Box.mp4";

// import music
import myMusic from "../../assets/video/boxopen.mp3.mp3";

// import useState
import { useState,} from "react";

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
                <video className="video-content " autoPlay loop controls>
                  <source className="video" src={myVideo} type="video/mp4" />
                </video>

                <audio className=" opacity-0 hidden" autoPlay loop controls>
                  <source src={myMusic} type="audio/mp3" />
                </audio>

                <div className="button-1 mt-5 ">
                  <button
                    onClick={HideHandle}
                    className="button bg-blue-600 transition-all p-2 w-[100%] z-30 rounded-md text-white hover:bg-blue-700"
                  >
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
