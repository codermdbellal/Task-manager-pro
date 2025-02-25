
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require("path");
const userRoutes = require('./router/routers.js');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


// step 1 requere part => http and Server 
// step 2 confuger server and create server 
// step 3 Create websocket logic in server 
// step 4 Add a websokect in backend request get or post



// Middleware
app.use(express.json());
app.use(cors());

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect(process.env.MONGO_URI, {
   
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log(err));

// Simple Route
app.get('/', (req, res) => {
  res.send('Hello, Backend!');
});

app.use('/api/items', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

