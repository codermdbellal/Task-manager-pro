// import useState from react
import { useState, useEffect } from "react";
import axios from "axios";

// import components
import Topnav from "../../components/topNav/topnav.jsx";
import BottomNav from "../../components/Bottomnav/bottomnav.jsx";

// import react icons
import { IoMdNotifications } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

// import image
import Homeimage1 from "../../assets/image/notification.jpg";
import Homeimage2 from "../../assets/image/notification.jpg";
import Homeimage3 from "../../assets/image/notification.jpg";
import Homeimage4 from "../../assets/image/notification.jpg";

// import react wol-carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./notification.css";
const notification = () => {
  // owl carousel option
  const option = {
    loop: true,
    nav: false,
    autoplay: true,
    margin: 10,
    autoplaySpeed: 10,
    responsive: {
      0: { items: 1 },
    },
  };

  // Hande complete data use the complete State
  const [complete, setComplete] = useState([]);

  // Get complete data use resapi
  useEffect(() => {
    axios
      .get("https://taskmenegerpro-backend.onrender.com/api/items/complete")
      .then((response) => setComplete(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Create Delete api request in backend
  const DeleteNotififacton = async (id) => {
    try {
      await axios.delete(`https://taskmenegerpro-backend.onrender.com/api/items/complete/${id}`);
      setComplete(complete.filter((item) => item._id !== id)); // Remove from UI
      alert("Deleted your Complete Task?");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" h-screen pt-1 bg-green-500 " >
      <div className="notification-container flex flex-col m-auto mt-2  w-[400px] h-[932px] shadow-lg relative overflow-hidden bg-white ">
        <div className="notification">
          {/*-------------- Topnav components import -------- */}
          <Topnav />
          <div className="content h-[745px] overflow-y-scroll ">
            <div className="carousel">
              <OwlCarousel {...option}>
                <div className="item">
                  <img src={Homeimage1} className="" alt="" />
                </div>

                <div className="item">
                  <img src={Homeimage2} alt="" />
                </div>

                <div className="item">
                  <img src={Homeimage3} alt="" />
                </div>

                <div className="item">
                  <img src={Homeimage4} alt="" />
                </div>
              </OwlCarousel>
              {/*------------------ complete task section -------------- */}
            </div>

            <div className="title">
              <h2 className=" text-xl pl-2 pb-2 flex gap-2 items-center justify-between  text-gray-600 font-semibold ">
                Complete Task !
                <FaCheck className="text-orange-600 mt-1 w-[30px] h-[30px] mr-3 rounded-full bg-gray-100 p-2 border " />
              </h2>
            </div>

            {complete.map((taskComplete) => (
              <div key={taskComplete._id}>
                <div className="notification-content mt-2 ml-2 border p-3 rounded-md shadow-md flex justify-between mr-2 bg-blue-600 ">
                  <div className="nt-demo flex items-center">
                    <div className="it mr-5 bg-green-400 rounded-full p-1 ">
                      <IoMdNotifications />
                    </div>
                    <div className="message">
                      <span className="text-gray-100">{taskComplete.name}</span>
                    </div>
                  </div>

                  <div className="it border  bg-gray-50 rounded-full p-1  ">
                    <RiDeleteBin5Fill
                      onClick={() => DeleteNotififacton(taskComplete._id)}
                      className=" text-red-800 cursor-pointer "
                    />
                  </div>
                </div>
              </div>
            ))}
            {/*------------------ personal notification  section -------------- */}
            <div className="title">
              <h2 className=" text-xl pl-2 pb-1 text-gray-600 pt-3 font-semibold  flex gap-2 items-center justify-between mr-3 ">
                Personal Notification !
                <IoMdNotifications className="text-orange-600 mt-1 w-[30px] h-[30px] rounded-full bg-gray-100 p-1 border " />
              </h2>
            </div>
            {complete.map((taskComplete) => (
              <div key={taskComplete._id}>
                <div className="notification-content mt-2 ml-2 border p-3 rounded-md flex justify-between mr-2 shadow-md bg-purple-600 ">
                  <div className="nt-demo flex items-center">
                    <div className="it mr-5 bg-green-400 rounded-full p-1 ">
                      <IoMdNotifications />
                    </div>
                    <div className="message">
                      <span className=" text-gray-100 ">
                        {taskComplete.name}
                      </span>
                    </div>
                  </div>

                  <div className="it border  bg-gray-50 rounded-full p-1  ">
                    <RiDeleteBin5Fill className=" text-red-800 cursor-pointer " />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*------------- BottomNav components import ----------*/}
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default notification;
