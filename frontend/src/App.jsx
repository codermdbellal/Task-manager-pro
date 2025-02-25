
// import react router dom
import { BrowserRouter as Router, Routes,  Route,} from 'react-router-dom';     


// import page 
import Home from "./page/Home/home.jsx";
import About from './page/Add-task/add-task.jsx';
import Notification from "./page/notification/notification.jsx";
import Profile from "./page/profile/profile.jsx";
import Proccess from "./page/Proccess/proccess.jsx";

// Add css file
import './App.css'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/proccess/:id" element={<Proccess/>} />
          <Route path="/about/:id" element={<About/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
