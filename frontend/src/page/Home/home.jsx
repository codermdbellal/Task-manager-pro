
// Linke react router dom 


// import icons
import { FaArrowRightLong } from "react-icons/fa6";

// Link State reactrouter-dom
import {Link} from "react-router-dom"

// import image
import Homeimage from "../../assets/image/homeimage.jpg";
// Add css
import "./home.css";
const home = () => {
  return (
    <div>
      <div className="app-container flex justify-center items-center bg-green-600 min-h-screen ">
        <div className="app w-[400px] h-[932px] border-4  border-black shadow-lg relative overflow-hidden">
          
          <br />

          <div className="app-content">
            <div className="image -mt-6 ">
              <p className="absolute pt-10 pl-5 font-semibold text-3xl">
                Hi,
              </p>
              <img
                src={Homeimage}
                alt=""
                className=""
              />
            </div>
            <div className="data-content flex flex-col justify-center items-center mt-10">
              <h3>Are you Ready </h3>
              <h3 className="text-3xl font-semibold">To build some habbits</h3>
             
              <Link to="/about" className="text-blue-500">
                <button className="border flex items-center gap-5 bg-amber-300 p-2 rounded-full pl-10 pr-10 text-gray-800 mt-20 ">
                    Continue <FaArrowRightLong className="text-white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
