
// import React icons
import { AiOutlineClose } from "react-icons/ai";

// import Fucntion state
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const donework = () => {
  
  // import usePrams
  const { id } = useParams()
    

  // Create useState  for menage Getdata
  const [product, setProduct] = useState([]);
  

  // create api request for get data in backend data base with usePrams()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(`https://taskmenegerpro-backend.onrender.com/api/items/task/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error))
  }, [id]);

 

  return (
    <div className=" w-[400px] m-auto ">

      {/*------------- Import Topnav componnents ------------------------ */}
   
      {/*------------- Done work ------------------------ */}
      <div className="add-new-habbits  ml-5 gap-3 mt-5">
        <h2 className=" font-bold text-2xl ">Done</h2>
        <div className="">
          <div className="task task-2">
            <h3 className="text">
              {
                product ? (
                   <div>
                      <p>{product.name}</p>
                   </div>
                ): (
                   <div>...</div>
                )
              }
            </h3>
          </div>
          <div className="icon-check-mark">
            <div
              className="div w-[25px] h-[25px] border-2 flex justify-center items-center border-gray-100 shadow-md rounded-md "
          
            >
              <AiOutlineClose className="check-mark-icon text-gray-100" />
            </div>
          </div>
        </div>
      </div>
      {/*------------- Import BottomNav componnents ------------------------ */}
     
    </div>
  );
};

export default donework;
