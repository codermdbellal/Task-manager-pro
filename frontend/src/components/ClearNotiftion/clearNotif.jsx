// import react icons
import { MdNotificationsActive } from "react-icons/md";

// import css file
import "./clearNotif.css";
const clearNotif = () => {
  return (
    <div className="Clear-noti border shadow-md m-3 rounded-md  ">
       

      <div className="get-notification-data mt-2 ">
        <div className="button-menu flex items-center justify-between ">
          <button className=" p-2 pl-5 pr-5 shadow-md h-[] bg-red-600 hover:bg-red-700 transition-all rounded-md text-gray-100 ml-2 ">
            Delete
          </button>
          <div className="notification-icon flex justify-center mr-2 ">
            <MdNotificationsActive className=" w-[40px] h-[40px] border rounded-full p-1 bg-amber-300 text-black shadow-md " />
          </div>
        </div>
        <div className="main-get-data mb-2 ">
          <p className=" shadow-md p-2 cursor-pointer hover:bg-green-700 transition-all rounded-md mr-2 mt-3 ml-2 bg-green-600 text-gray-100 ">
            Lorem ipsum dolor sit amet.
          </p>
          <p className=" shadow-md p-2 rounded-md mr-2 mt-3 ml-2 bg-green-600 text-gray-100 ">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="shadow-md p-2 rounded-md mr-2 mt-3 ml-2 bg-green-600 text-gray-100 ">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default clearNotif;
