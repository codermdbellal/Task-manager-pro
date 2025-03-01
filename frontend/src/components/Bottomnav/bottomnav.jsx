// import react icons
import { IoHome } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

// import Linke in react-router-dom
import { NavLink } from "react-router-dom";

import "./bottomnav.css";
const bottomnav = ({ count }) => {
  return (
    <div>
      <div className="bottomnav-container">
        <div className="bottomnav">
          <div className="nav-item flex justify-between p-5 border absolute w-[430px] bottom-0 bg-white ">
            {/* Home Icon */}
            <div className="item flex justify-center items-center flex-col">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : ""
                }
              >
                <IoHome className="text-2xl" />
              </NavLink>
              <p className="text-sm">Home</p>
            </div>

            {/* About Icon */}
            <div className="item flex justify-center items-center flex-col">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : ""
                }
              >
                <FaUserCircle className="text-2xl" />
              </NavLink>
              <p className="text-sm">Profile</p>
            </div>

            {/* Process Icon */}
            <div className="item flex justify-center items-center flex-col">
              <NavLink
                to="/proccess/:id"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : ""
                }
              >
                <TbBrandGoogleAnalytics className="text-2xl" />
              </NavLink>
              <p className="text-sm">Process</p>
            </div>

            {/* Notification Icon */}
            <div className="item flex justify-center items-center flex-col">
              <div className="count w-[16px] h-[16px] -mb-3 ml-2 z-20 text-[11px] font-semibold text-white rounded-full bg-red-600 border flex items-center justify-center">
                {count}
              </div>
              <NavLink
                to="/notification"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : ""
                }
              >
                <IoMdNotifications className="text-2xl" />
              </NavLink>
              <p className="text-sm">Notification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bottomnav;
