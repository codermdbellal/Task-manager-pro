// controllers/userController.js
const Product = require("../models/items.js"); // Assuming you have a User model
const Complete = require("../models/complete");
const User = require("../models/user.js");



// import package 
const multer = require('multer');
const path = require('path');
require("dotenv").config();

// Controller function to handle user creation and [Post] data in user data base
const PostUserData = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully!" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Create get Request and get our task list
const TaskGetData = async (req, res) => {
   try {
     const taskData = await Product.find();
     res.status(201).json(taskData);
   } catch (error) {
     res.status(401).json({ error: "Error Fething Product Data" });
   }
}

// Create get Request and getId our task list
const TaskGetDataID = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
}

// we are update our product database adding new like day mouth or year
const Taskupdate = async (req, res) => {
  try {
    const { name, day, month, year } = req.body; // Get updated data from request body
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, // Find product by ID
      { name, day, month, year }, // Fields to update
      { new: true } // Return updated product
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error updating product" });
  }
};

// Create post request in our Complete Data base 
const completeTask = async (req, res) => {
  try {
    const newTask = new Complete(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get our complete data base 
const getComplete = async (req, res) => {
  try {
    const completeTask = await Complete.find()
    res.status(203).json(completeTask)
  } catch (error) {
    res.status(402).json({error: "Error Fething data "})
  }
}

// Create Delete Route for delete complete div 
const deleteComplete  = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Complete.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file
  },
});

const upload = multer({ storage });

// Upload Image & Save to Database
const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    
    const { name, gmail } = req.body;
    
    imageUrl =  ` http://localhost:3000/uploads/${req.file.filename}`;

    // Save to MongoDB
    const newImage = new User({ filename: req.file.filename, url: imageUrl, name , gmail, });
    const newImageSave = await newImage.save()

    res.json({ message: "Upload successfully" , imageUrl, name, gmail, newImageSave });
  } catch (error) {
    res.status(500).json({ error: "Error saving image to database" });
  }
};

// Fetch all images
const getAllImages = async (req, res) => {
  try {
    const images = await User.find(); // Latest messages first;
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images" });
  }
};

// Delete User data and logout proccess
const deleteUserData  = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await User.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete task list one by one
const DeleteTaskOne = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Product.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete multiple tasks at once
const DeleteTasks = async (req, res) => {
  try {
    await Product.deleteMany({}); // Deletes all tasks from MongoDB
    res.status(200).json({ message: "All tasks deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting tasks", error });
  }
};

module.exports = {
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
  upload
};
