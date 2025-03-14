// import components
import Topnav from "../../components/topNav/topnav.jsx";
import Bottomnav from "../../components/Bottomnav/bottomnav.jsx";

// import usetade defind
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import react icons
import { FaBook } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LuNotepadText } from "react-icons/lu";

// import css file
import "./proccess.css";
const proccess = () => {
  // call use prams for get id in the backend database
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();

  // get product state for handle api
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [product, setProduct] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(`https://taskmenegerpro-backend.onrender.com/api/items/task/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  // store all Data
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [day, setDay] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [month, setMonth] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [year, setYear] = useState("");

  const handleUpdate = async () => {
    if (!day || !month || !year) {
      alert("Plase fill your all fields");
      return;
    }

    const updatedData = { day, month, year };
    try {
      const response = await axios.put(
        `https://taskmenegerpro-backend.onrender.com/api/items/taskupdate/${id}`,
        updatedData
      );
      alert("Update successful!");
      console.log("Update successful:", response.data);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  // Create Taskget State for sotre data
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [taskget, setTaskGet] = useState([]);

  console.log(taskget);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get("https://taskmenegerpro-backend.onrender.com/api/items/task")
      .then((response) => setTaskGet(response.data))
      .catch((error) => console.error(error));
  }, []);

  // hide and show function
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(true);

  const [hiddenTasks, setHiddenTasks] = useState({});
  const handleDelete = (itemKey) => {
    setHiddenTasks((prev) => ({ ...prev, [itemKey]: true })); // Hide only clicked item
  };

  return (
    <div className=" pt-2  ">
      <div className="proccess-container  laptop m-auto ">
        {/*------------------ import Topnav components -------------- */}
        <Topnav />
        <div className="process all-content ">
          <div className="content">
            <h2 className=" text-3xl font-semibold pl-5 ">Proccess</h2>
            <div className="task-heading">
              <h3 className="text-center p-2 m-5 rounded-md flex items-center justify-between pl-5 bg-gray-100 border font-semibold">
                {product ? (
                  <>
                    <h1 className="text-lg font-serif font-semibold capitalize text-orange-600 ">
                      {product.name}
                    </h1>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
                <FaBook className=" text-red-600 text-3xl " />
              </h3>
            </div>

            <div className="Data m-5 rounded-md shadow-sm p-3 border ">
              <div className="">
                <div className=" ">
                  <form className="rounded-lg  space-y-4">
                    <h2 className="text-xl border-b pb-3 font-semibold text-gray-800 ">
                      Set your work Date ?
                    </h2>

                    <div className=" selctor flex flex-col ">
                      {/* Day Selector */}
                      <input
                        type="number"
                        placeholder="Day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        min="1"
                        max="31"
                        className=" p-2 border border-blue-400 rounded-md shadow-lg "
                      />

                      {/* Month Selector */}
                      <select
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className=" p-2 border mt-5 mb-5  border-blue-400  rounded-md shadow-lg "
                      >
                        <option value="">
                          <p>Select mounth</p>
                        </option>
                        {[
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December",
                        ].map((m) => (
                          <option className="border" key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>

                      {/* Year Selector */}
                      <input
                        type="number"
                        placeholder="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        min="1900"
                        max="2100"
                        className=" p-2 border  border-blue-400  rounded-md shadow-lg "
                      />
                    </div>

                    <button
                      onClick={handleUpdate}
                      type="submit"
                      className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/*------------------ Your all work list --------------- */}
            <div className="title mt-10">
              <h2 className=" text-xl font-semibold pl-6 text-gray-600 font-sans mt-5 flex justify-between items-center ">
                My work List !
                <LuNotepadText className=" mr-8 text-green-800 bg-gray-100 border p-1 w-[30px] h-[30px] rounded-full cursor-pointer " />
              </h2>
              <hr className=" m-5 mt-2 " />
            </div>

            {/*------------------ Proccess data 1 show --------------- */}
            {product ? (
              <div>
                {visible && (
                  <div>
                    <div className="full-task border m-5 rounded-md p-3 bg-green-600 shadow-md">
                      <TbBrandGoogleAnalytics className=" text-blue-600 border bg-gray-100 w-[30px] h-[30px] p-1 rounded-full " />
                      <h2 className="  text-[17px] capitalize mt-2 text-gray-100  ">
                        {product.name}
                      </h2>
                      <div className="content flex justify-between">
                        <div className="date flex gap-1 text-sm text-gray-100 ">
                          <h4>{product.month},</h4>
                          <h5>{product.day},</h5>
                          <h5>{product.year}</h5>
                        </div>

                        <div className="icon">
                          <AiOutlineInfoCircle className=" text-red-500 mb-2 -mt-10 border bg-gray-100 w-[30px] h-[30px] p-1 rounded-full " />
                          <RiDeleteBin5Fill
                            onClick={() => setVisible(!visible)}
                            className=" text-red-600 cursor-pointer border bg-gray-100 w-[30px] h-[30px] p-1 rounded-full "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p>Loading...</p>
            )}

          </div>
        </div>
        {/*--------------------- import Bottomnav components -------------- */}
        <Bottomnav />
      </div>
    </div>
  );
};

export default proccess;
