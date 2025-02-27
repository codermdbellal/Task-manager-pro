
// import all notification 
import { useState } from "react";

// import react icons 
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const addNotifi = () => {
  // import all useState in this components
  const [time, setTime] = useState();
  const [unit, setUnit] = useState("hours");

  // Selector State
  const [isSelect, setSelect] = useState("Number");
  const [isOpen, setOpen] = useState(false);

  // Create array
  const options = Array.from({ length: 30 }, (_, i) => i + 1); // Generates [1, 2, ..., 30]7

  return (
    <div>
      <div className="notification-container">
        <div className="notification">
          <div className="content border w-[90%] ml-3 rounded-md ">
            <form className="flex flex-col p-2 ">
              <input
                type="text"
                placeholder="Write notification message..."
                required
                className=" p-2 border border-green-600 rounded-md shadow-md "
              />
              
              <button onClick={() => setOpen(!isOpen)} className=" border border-green-600 mt-3 flex justify-between items-center p-1 rounded-md ">
               {isSelect !== null ? isSelect : "Select a number"}
               <MdOutlineKeyboardArrowDown className="text-[20px] -mr-1 "/>
              </button>

              {isOpen && (
                <div>
                  <ul className=" border h-[200px] overflow-x-auto sha mt-3 rounded-md ">
                    {options.map((num) => (
                      <li
                        key={num}
                        className=" p-1 rounded-md bg-gray-100 border hover:bg-green-600 hover:text-gray-100 cursor-pointer m-2 "
                        onClick={() => {
                          setSelect(num); // Store selected number in state
                          setOpen(false); // Close dropdown
                        }}
                         
                      >
                        {num}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <select className=" border border-green-600 p-1 rounded-md mt-3 ">
                <option value="hours">Hours</option>
                <option value="Days">Days</option>
              </select>

              <button
                type="submit"
                className="  p-1 pl-5 pr-5 mt-3 bg-green-600 text-gray-100 rounded-md hover:bg-green-700 transition-all "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addNotifi
