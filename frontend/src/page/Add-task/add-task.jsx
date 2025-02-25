// import image
import Homeimage1 from "../../assets/image/image1.jpg.jpg";
import Homeimage2 from "../../assets/image/image2.jpg";
import Homeimage3 from "../../assets/image/image3.jpg";
import Homeimage4 from "../../assets/image/image4.jpg";

// import component
import Data from "../../components/Date/date.jsx";
import BottomNav from "../../components/Bottomnav/bottomnav.jsx";
import Topnav from "../../components/topNav/topnav.jsx";
import Reward from "../../components/reads/reads.jsx";

// import react wol-carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import react icons
import { IoMdCheckmark } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";

// import State
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

// import css file
import "./add-task.css";
const addtask = () => {
  // import usePrams
  const { id } = useParams();

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

  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  // This is state actually mantence our hide and show
  const [showDiv, setShowDiv] = useState(true);

  // Show div handeler
  const showHandle = () => {
    setShowDiv(!showDiv);
  };

  // Store User task In this State
  const [productData, setProductData] = useState({
    name: "",
  });

  // Change a input value whent type user in input
  const handleProductChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/items/task",
        productData
      );
      console.log("Response:", response); // Debugging
      setProductData({ name: "" }); // Reset input field
      alert("Success! Task added. Reload you Page");
    } catch (err) {
      console.error("Error:", err);
      alert("Error saving task");
    }
  };

  // Create state for call restapi and sotre data
  const [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/items/task")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  // This is the save our check box icon when reload
  const [isChecked, setIsChecked] = useState(() => {
    return JSON.parse(localStorage.getItem("checked-state")) || {}; // Persist checkboxes only
  });

  // This is the State To localStorage when it changes
  useEffect(() => {
    // Save state to localStorage when it changes
    localStorage.setItem("checked-state", JSON.stringify(isChecked));
  }, [isChecked]);

  const [showReward, setShowReward] = useState(false);

  // Create useState  for menage usePrams Data
  const [productss, setProductss] = useState({ name: "" });

  // create api request for get data in backend data base with usePrams()
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/items/task/${id}`)
      .then((response) => setProductss(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  // This hande work post our data in database and showing check box per id
  const handleClick = async (id) => {
    const newCheckedState = !isChecked[id];

    setIsChecked((prev) => {
      const updatedChecked = { ...prev, [id]: newCheckedState };
      localStorage.setItem("checkedTasks", JSON.stringify(updatedChecked)); // Store checked state in localStorage
      return updatedChecked;
    });

    if (newCheckedState) {
      setShowReward(true);
      sessionStorage.setItem("rewardShown", "true"); // Prevent showing reward on reload

      setTimeout(() => {
        setShowReward(false);
        sessionStorage.removeItem("rewardShown"); // Reset after hiding
      }, 600000);
    }

    setCount(count + 1)

    // this is post our data in complete DataBase
    try {
      await axios.post("http://localhost:3000/api/items/complete", productss);
      alert("Complete your Task");
      setProductss({ name: "" });
    } catch (err) {
      console.error(err);
    }
    
  };

  // Handle reward visibility on page load
  useEffect(() => {
    if (sessionStorage.getItem("rewardShown")) {
      setShowReward(false); // Prevent showing reward on reload
    }
  }, []);

  // Hande complete data use the complete State
  const [complete, setComplete] = useState([]);
  // Get complete data use resapi
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/items/complete")
      .then((response) => setComplete(response.data))
      .catch((error) => console.error(error));
  }, []);

  // ✅ Delete Item (DELETE request)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/items/complete/${id}`); // Ensure this matches your backend
      setComplete(complete.filter((item) => item._id !== id)); // Remove from UI
      alert("Deleted your Complete Task?");
    } catch (error) {
      console.error(
        "Error deleting item:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // Create Counter State 
  const [count, setCount] = useState(0)

  return (
    <div className="" >
      <div className="app-container flex justify-center items-center h-screen bg-green-500 ">
        <div className="app  w-[400px] h-[932px] rounded-[40px] border-4  border-black shadow-lg relative overflow-hidden">
          <Topnav />
          <br />
          <div className="app-content  h-[745px] overflow-y-scroll -mt-5 ">
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
            </div>

            <div className="add-habbits">
              <div className="top-date">
                <h2 className=" font-bold text-4xl pl-5 text-gray-700 ">
                  Today work
                </h2>
                <p className=" pl-5 font-semibold pt-2 ">{formattedDate}</p>
              </div>

              <div className="week-list flex g-5 ">
                <div className="week">
                  <Data />
                </div>
              </div>

              {/*--------------- TO DO list section -------------*/}
              <div className="add-new-habbits ml-5 gap-3 mt-5">
                <h2 className=" font-bold text-2xl ">TO DO</h2>
                {product.map((task) => (
                  <div key={task._id} className="flex items-center mt-2 gap-3">
                    {/* Click to navigate and update visibility */}
                    <Link
                      to={`/proccess/${task._id}`}
                      className="w-full border mr-5 p-1 cursor-pointer rounded-md mt-1 bg-orange-500  hover:bg-orange-600 transition-all  text-gray-100 "
                    >
                      <span className="span capitalize ">{task.name}</span>
                    </Link>

                    <div className=" bg-orange-500 hover:bg-orange-600 transition-all  h-[32px] mt-1 rounded-md w-[40px] -ml-6 mr-2 flex justify-center items-center">
                      <Link to={`/about/${task._id}`} className="linke">
                        <div
                          className={`check-box  w-[25px] h-[25px] border-2 rounded-full p-1 flex items-center justify-center cursor-pointer 
                          ${isChecked[task._id] ? "bg-green-600" : ""}`}
                          onClick={() => handleClick(task._id)}
                        >
                          {isChecked[task._id] && (
                            <div className=" relative ">
                              <IoMdCheckmark className="text-white" />
                            </div>
                          )}
                        </div>
                        {/*----------- showing Reads ----------- */}
                        {isChecked[task._id] && (
                          <div>{showReward && <Reward />}</div>
                        )}
                      </Link>
                    </div>
                    {/* Task name */}
                  </div>
                ))}
              </div>

              {/*---------------------- import Done work components --------------------- */}

              <div className="done-work">
                <div className="work-content">
                  <h2 className=" ml-5 mt-5 text-2xl font-bold">Done</h2>
                  {complete.map((taskComplete) => (
                    <div key={taskComplete._id}>
                      <div>
                        <div className="task-work flex gap- items-center ml-5 mt-3 ">
                          <div className="task-name bg-green-600 hover:bg-green-700 transition-all w-full mr-5 p-1 rounded-md">
                            <span className="text-gray-100 capitalize">
                              {taskComplete.name}
                            </span>
                          </div>
                          <div className=" bg-green-600 hover:bg-green-700 transition-all h-[32px] mt- rounded-md w-[40px] -ml-3 mr-2 flex justify-center items-center">
                            <div className="icon-task-close w-[25px] h-[25px]  rounded-full flex justify-center items-center">
                              <RiDeleteBinFill
                                className="text-xl cursor-pointer text-black "
                                onClick={() => handleDelete(taskComplete._id)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="add-button">
                <button
                  onClick={showHandle}
                  className=" p-2 bg-amber-400 rounded-lg mt-5 ml-5 text-sm font-semibold "
                >
                  Add New Task
                </button>
              </div>

              {showDiv && (
                <form onSubmit={handleProductSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      value={productData.name}
                      onChange={handleProductChange}
                      required
                      className=" border border-green-400 p-2 rounded-lg outline-none ml-5 mt-5 z-30  w-[89%]"
                    />
                  </div>

                  <button
                    type="submit"
                    className=" bg-green-500 hover:bg-green-600 transition-all p-2 rounded-lg pl-5 pr-5 text-slate-100 ml-5 mt-2 "
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>

          {/*----------- Add bottom nav ------ */}
          <BottomNav count={count} />
        </div>
      </div>
    </div>
  );
};

export default addtask;
