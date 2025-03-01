// import react icon
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

// import components
import Profile from "../../page/profile/profile.jsx";

// import State all linke
import { useState } from "react";
import axios from "axios";

function userdata() {
  // Call our our all useState
  const [show, setShow] = useState(true);

  // Create handler for click show and hide
  const HideHandle = () => {
    setShow(!show);
  };

  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [nameError, setNameError] = useState("");
  const [gmailError, setGmailError] = useState("");

  // Create Handle for file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    const { data: existingUsers } = await axios.get(
      "https://taskmenegerpro-backend.onrender.com/api/items/getAllImage"
    );

    if (existingUsers.length > 0) {
      alert("Only one user is allowed!");
      return;
    }

    // Reset previous error messages
    setNameError("");
    setGmailError("");

    let hasError = false;

    // Validate name
    if (!name.trim()) {
      setNameError("Please enter your name.");
      hasError = true;
    }

    // Validate Gmail
    if (!gmail.trim()) {
      setGmailError("Please enter your Gmail.");
      hasError = true;
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(gmail)) {
        setGmailError("Please enter a valid Gmail address.");
        hasError = true;
      }
    }

    // Validate image
    if (!image) {
      alert("Plase select your Image");
    }

    if (hasError) return; // Stop execution if there are validation errors

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("gmail", gmail);

    try {
      await axios.post("https://taskmenegerpro-backend.onrender.com/api/items/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(" Upload your image ");
      setName("");
      setGmail("");
      setImage(null);
      setTimeout(() => {
        setShow(false);
      }, 1000);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      {show && (
        <div>
          <div>
            <div className="setYourData  shadow-lg absolute  bg-white w-[100%] p-5 ">
              {/*------- import colse icon ------- */}
              <IoMdCloseCircleOutline
                onClick={HideHandle}
                className="w-[30px] h-[30px] p-1 text-red-600 cursor-pointer  mb-3 -mt-3 border border-red-200 shadow-md hover:bg-gray-100 transition-all rounded-md "
              />

              <div className="user flex flex-col ">
                <input
                  type="name"
                  className=" border p-2 rounded-md  border-green-600 shadow-md "
                  placeholder="Enter Your Name!"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                <input
                  type="gmail"
                  className="border mt-5 p-2 rounded-md border-green-600 shadow-md "
                  placeholder="Enter Your Gmail"
                  value={gmail}
                  onChange={(e) => setGmail(e.target.value)}
                  required
                />
                {gmailError && <p style={{ color: "red" }}>{gmailError}</p>}
                <div className="div mt-5 ">
                  <label htmlFor="fileUpload" className="">
                    <FaCloudUploadAlt className=" text-4xl cursor-pointer text-green-600 absolute rounded-md -mt-1 bg-white w-[90%] h-[60px] border border-green-600 " />
                  </label>
                  <input
                    id="fileUpload"
                    type="file"
                    accept="image/*"
                    className=" w-[100%]"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              {/*---------------- User Data post ---------------- */}
              <div className="profile hidden ">
                <Profile preview={preview} />
              </div>
              <div className="button flex justify-center mt-10 mb-5 ">
                <button
                  className=" p-2 shadow-md border w-[100%] hover:bg-blue-700 transition-all rounded-lg text-white bg-blue-600"
                  onClick={handleUpload}
                >
                  Submit
                </button>
              </div>

              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className=" h-[80px] w-[80px] rounded-md shadow-md border "
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default userdata;
