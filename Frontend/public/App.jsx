import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppontment from "./pages/MyAppontment";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppForm from "./pages/AppForm";
import DoctorLogin from "./pages/DoctorLogin";
import Signup from "./pages/Signup";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="mx-4 sm:mx-[10%]">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor/:speciality" element={<Doctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/my-appointment" element={<MyAppontment />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          <Route path="/appform" element={<AppForm/>}/>
          <Route path="/doctorlogin" element={<DoctorLogin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>

        <Footer/>
      </div>
    </>
  );
}

export default App;
