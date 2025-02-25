// import all controller file and request in route file
const {
  PostUserData,
  TaskGetData,
  TaskGetDataID,
  Taskupdate,
  completeTask,
  getComplete,
  deleteComplete,
  deleteUserData,
  DeleteTaskOne,
  DeleteTasks,
  uploadImage,
  getAllImages,
  upload,


} = require("../controllers/controllers.js");

// express js require for create router
const express = require("express");

// finally create express router
const router = express.Router();

// Create route this is post route name is task
router.post("/task", PostUserData);
router.get("/task", TaskGetData);
router.get("/task/:id", TaskGetDataID);
router.put("/taskupdate/:id", Taskupdate);
router.post("/complete", completeTask);
router.get("/complete", getComplete);
router.delete("/complete/:id", deleteComplete);
router.post("/upload", upload.single("image"), uploadImage);
router.get("/getAllImage", getAllImages);
router.delete("/userDataDelete/:id", deleteUserData);
router.delete("/task/:id", DeleteTaskOne);
router.delete("/DeleteManyTask", DeleteTasks );

module.exports = router;
