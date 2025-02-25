// import compontents
import Topnav from "../../components/topNav/topnav.jsx";
import Bottomnav from "../../components/Bottomnav/bottomnav.jsx";
import UserData from "../../components/userData/userdata.jsx";
import AddNotification from "../../components/addNotification/addNotifi.jsx";

// import use state from react
import { useState, useEffect } from "react";
import axios from "axios";

// step 1 import io
// step 2 import

// import react icons
import { MdCircleNotifications } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";

// import All image
import DemoPrfileImage from "../../assets/image/profile.jpg";

// import css file
import "./profile.css";
const profile = () => {
  // create State for showing user input compontent
  const [userShow, setUserShow] = useState(false);
  // Create State for Logout State menage
  const [logout, setLogOut] = useState(false);
  // Create State for menage Clear History and
  const [showClear, setShowClear] = useState(false);
  // Create State for menage Add Notification systems
  const [notification, setNotification] = useState(true);

  // Hendeler click show and hide
  const userShowHandle = () => {
    setUserShow(!userShow);
  };

  // Hendler for Click show and hide for logout option
  const logOutHandle = () => {
    setLogOut(!logout);
  };

  // Handle Show Clear History
  const HandleClear = () => {
    setShowClear(!showClear);
  };

  // Handle show AddNotification
  const HandleNotification = () => {
    setNotification(!notification);
  };

  // Create useState for Api call and get user data in backend
  const [getUser, setUserGet] = useState([]);

  console.log(getUser);
  // Create State for Get Task List
  const [TaskList, setTaskList] = useState([]);
  const [error, setErrors] = useState(false);

  // Get User Data in bakend server
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/items/getAllImage")
      .then((response) => {
        if (response.data.length > 0) {
          setUserGet(response.data);
          setErrors(false);
        } else {
          setErrors(true);
        }
      })

      .catch((error) => {
        console.error("Eorror Fething image", error);
        setErrors(true);
      });
  }, []);

  // Get User Data in bakend server
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/items/task")
      .then((response) => setTaskList(response.data))
      .catch((error) => console.error(error));
  }, []);

  // ✅ Delete Item (DELETE request)
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/items/userDataDelete/${id}`
      ); // Ensure this matches your backend
      setUserGet(getUser.filter((item) => item._id !== id)); // Remove from UI
      alert("Deleted your Task meneger pro Account?");
    } catch (error) {
      console.error(
        "Error deleting item:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // ✅ Delete Item (DELETE request)
  const HandleDeleteOne = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/items/task/${id}`); // Ensure this matches your backend
      setTaskList(TaskList.filter((item) => item._id !== id)); // Remove from UI
      alert("Deleted your Task ?");
    } catch (error) {
      console.error(
        "Error deleting item:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // Delete All data this api actually delete all data
  const handleDeleteMany = async () => {
    const confirmDelete = window.confirm(
      " Are you sure you want to delete all tasks? "
    );
    if (!confirmDelete) return; // If user cancels, exit the function

    try {
      const response = await fetch(
        "http://localhost:3000/api/items/DeleteManyTask",
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("All tasks deleted successfully!");
        setTaskList([]); // Clear the local state
      } else {
        console.error("Failed to delete tasks");
      }
    } catch (error) {
      console.error("Error deleting tasks:", error);
    }
  };

  return (
    <div className=" bg-green-500 h-screen pt-1 ">
      <div className="profile-container flex flex-col m-auto mt-2  w-[400px] h-[932px] rounded-[40px] border-4  border-black shadow-lg relative overflow-hidden bg-white ">
        {/*---------- Import Topnav componets ------------ */}
        <Topnav />
        <div className="profile h-[745px] overflow-y-scroll mt-5 ">
          <div className="container">
            <div className="profile border-b-2 w-full pb-4  flex items-center gap-5 pl-5  ">
              <div className="profile-show-data  ">
                <div className="profile-image border shadow-md rounded-full ">
                  {error ? (
                    <div>
                      <img
                        src={DemoPrfileImage}
                        className=" border w-[80px] h-[80px] rounded-full shadow-md "
                        alt=""
                      />
                    </div>
                  ) : (
                    <div>
                      {getUser.map((img, index) => (
                        <div key={index} className="data-content">
                          <img
                            src={img.url}
                            alt={`getUser ${index + 1}`}
                            className="w-[80px] h-[80px] rounded-full  shadow-md border  "
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="profile-info">
                {getUser.map((user) => (
                  <div key={user._id}>
                    <h3 className=" font-semibold capitalize  ">{user.name}</h3>
                    <p className="text-sm">{user.gmail}</p>

                    <div className=" ">
                      {logout && (
                        <div>
                          <p className=" text-red-600 ">
                            Are you sure delete your Account !
                          </p>
                          <div className="flex justify-between absolute mt-[73px] z-20 w-[90%] left-3 border  bg-white  p-2 rounded-md ">
                            <button
                              className="border p-1 pl-5 pr-5 rounded-md bg-white hover:bg-gray-100 transition-all"
                              onClick={logOutHandle}
                            >
                              Cancel
                            </button>

                            <button
                              className="border p-1 pl-5 pr-5 rounded-md bg-red-600 hover:bg-red-700 transition-all text-gray-100 "
                              onClick={() => handleDelete(user._id)}
                            >
                              Ok
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <div
                  className="button cursor-pointer text-center bg-green-600 pl-5 pr-5 p-1 hover:bg-green-700 transition-all rounded-md shadow-md text-gray-100 mt-1 "
                  onClick={userShowHandle}
                >
                  Edit profile
                </div>
              </div>
            </div>

            {/*--------- import userData components ------- */}
            {userShow && (
              <div>
                <UserData />
              </div>
            )}

            {/*----------------- Gear-option 4 ------------------------ */}
            <div className="gear-option mt-5 m-3 p-2 pl-2 rounded-md flex justify-between border ">
              <div
                className="notification flex gap-5 items-center "
                onClick={HandleNotification}
              >
                <MdCircleNotifications className="text-3xl" />
                <h3 className=" font-semibold ">Add your notification</h3>
              </div>
              <div className="icon">
                <IoIosArrowForward className="text-lg font-semibold mt-2 mr-5" />
              </div>
            </div>
            {/*--------------- Show notification ---------------- */}
            <div>
              {notification && (
                <div>
                  <AddNotification />
                </div>
              )}
            </div>
            {/*----------------- Gear-option 4 ------------------------ */}
            <div
              className="gear-option mt-5  m-3 pl-2 p-2 rounded-md flex justify-between border "
              onClick={HandleClear}
            >
              <div className="notification flex gap-5 items-center ">
                <RiDeleteBin5Fill className="text-2xl" />
                <h3 className=" font-semibold ">Clear all History</h3>
              </div>
              <div className="icon">
                <IoIosArrowForward className="text-lg font-semibold mt-2 mr-5" />
              </div>
            </div>
            <div>
              {showClear && (
                <div className=" border m-3 rounded-md bg-gray-100 max-h-[270px] overflow-y-auto  ">
                  <div className="button">
                    <button
                      className=" p-1 mb-2 pl-5 pr-5 bg-red-600 mt-2 ml-3 rounded-md text-gray-100 hover:bg-red-700 transition-all "
                      onClick={handleDeleteMany}
                    >
                      Delete All
                    </button>
                  </div>
                  {TaskList.map((task) => (
                    <div key={task._id}>
                      <div className="">
                        <div className=" flex justify-between items-center rounded-md m-3 shadow-md p-2 bg-orange-600 hover:bg-orange-700 transition-all ">
                          <h2 className=" text-gray-100 ">{task.name}</h2>
                          <div className="delete-icon">
                            <RiDeleteBin5Fill
                              className=" cursor-pointer text-red-600 w-[25px] h-[25px] bg-white p-1 rounded-full "
                              onClick={() => HandleDeleteOne(task._id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/*----------------- Gear-option 4 ------------------------ */}
            <div className="gear-option  mt-5  m-3 pl-2 p-2 rounded-md flex justify-between border ">
              <div className="notification flex gap-5 items-center ">
                <IoIosTime className="text-2xl" />
                <h3 className=" font-semibold ">
                  {" "}
                  Clear notification History{" "}
                </h3>
              </div>
              <div className="icon">
                <IoIosArrowForward className="text-lg font-semibold mt-2 mr-5" />
              </div>
            </div>
            {/*----------------- Gear-option 4 ------------------------ */}
            <div className="gear-option  mt-5  m-3 pl-2 z-20 p-2 rounded-md border flex justify-between">
              <div className="notification flex gap-5 items-center ">
                <BsBoxArrowLeft className="text-2xl" />
                <h3 className=" font-semibold " onClick={logOutHandle}>
                  Log Out
                </h3>
              </div>
              <div className="icon">
                <IoIosArrowForward className="text-lg font-semibold mt-2 mr-5" />
              </div>
            </div>
          </div>
        </div>
        {/*------------ import Topnav components ---------- */}
        <Bottomnav />
      </div>
    </div>
  );
};

export default profile;
