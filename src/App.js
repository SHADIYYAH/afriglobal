import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register";
import VerifyOtp from "./Pages/Register/VerifyOtp";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/sign-up" element={<Register />} />
          <Route path="/auth/verify-otp" element={<VerifyOtp />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
