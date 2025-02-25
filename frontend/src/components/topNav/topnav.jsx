
// import image 
 
// import react icon
import { IoMdNotifications } from "react-icons/io";
import { FiImage } from "react-icons/fi";

const topnav = () => {
  return (
    <div>
        <div className="topnav-container">
            <div className="top-nav flex justify-between items-center p-2 pl-5 pr-5 border-2  ">
                <div className="profile h-[50px] w-[50px] ">
                    <FiImage className=" h-[40px] w-[40px] p-2 rounded-full border bg-gray-100 "/>
                </div>
                <div className="notification flex flex-col ">
                   <div className="count w-[16px] h-[16px] -mb-2 z-20 text-[11px] font-semibold text-white rounded-full bg-red-600 flex items-center justify-center ">0</div>
                   <IoMdNotifications className=" w-[30px] h-[30px] bg-gray-100 border rounded-full text-md text-gray-600 p-1 "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default topnav
