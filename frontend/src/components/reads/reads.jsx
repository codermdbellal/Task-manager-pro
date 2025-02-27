// import video
import myVideo from "../../assets/video/Animated Present Box.mp4";

// import useState
import { useState, useEffect } from "react";

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
          <div className="read-container z-50 w-[390px] h-[84%] flex  m-auto top-[60px] rounded-[10px] fixed ">
            <div className="reads flex justify-center items-center">
              <div className="reads-content w-[95%] absolute m-auto  left-2  rounded-md p-2 mt-12 ">
                <video className="rounded-md w-full shadow-md  border " autoPlay muted loop controls>
                  <source className=" h-[100%] rounded-md " src={myVideo} type="video/mp4" />
                </video>

                <div className="button mt-10 ">
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
