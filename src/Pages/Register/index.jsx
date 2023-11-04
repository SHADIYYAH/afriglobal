import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { network } from "../../components/url/network";
import Africover from "../../assets/africover.png";
// import VerifyOtp from "./VerifyOtp";

const Register = () => {
  const redirect = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios({
        method: "post",
        // url: `${network.baseURL}${API_URL.SIGNUPURL}`,
        url: "http://127.0.0.1:9990/api/v1/user/register",
        data: formData,
        headers: { "Content-Type": "application/json" },
      });

      console.log(response)
      
      if (response.data.status === false) throw new Error(response.data.message);

      alert(response.data.message)
      
      
      localStorage.setItem("email", formData.email);
      // redirect("/auth/verify-otp");

      
    } catch (error) {
      console.log(error );
      // alert(error.response.data.message || "Sorry something went wrong");
    }
  };
  return (
    <div className="items-center h-screen  bg-blue-950">
      
      <div className="ml-[35rem] ">
      <div>
        <img src={Africover} alt="" className="w-[5rem]" />
      </div>
        <form
          onSubmit={handleSubmit}
          className="  space-y-4 w-[35rem] p-[5rem] h-[40rem] bg-white drop-shadow-lg rounded-lg "
        >
          <h1 className="font-bold">Customer's Registration</h1>
          <label className="text-[1rem] font-medium block" htmlFor="">
            First Name{" "}
          </label>


          <input
            type="  "
            name="firstname"
            onChange={(e) =>
              setFormData({ ...formData, firstname: e.target.value })
            }
            value={formData.firstname}
            className="w-[25rem] border-b-2 rounded-md block   hover:border-blue-300 outline-none"
            placeholder="First Name"
          />
          <label className="text-[1rem] font-medium block" htmlFor="">
            Last Name{" "}
          </label>

          <input
            type="  "
            name="lastname"
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
            }
            value={formData.lastname}
            className="w-[25rem] border-b-2 rounded-md block   hover:border-blue-300 outline-none"
            placeholder="Last Name"
          />

          <label className="text-[1rem] font-medium block" htmlFor="">
            Email
          </label>
          <input
            type="  "
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            className="w-[25rem] border-b-2  rounded-md  hover:border-blue-300  block outline-none"
            placeholder="shadiyyah@gmail.com"
          />

          <label className="text-[1rem] font-medium block" htmlFor="">
            Phone Number{" "}
          </label>
          <input
            type="  "
            name="phone"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            value={formData.phone}
            className="w-[25rem] border-b-2  rounded-md  hover:border-blue-300  block outline-none"
            placeholder="Phone Number"
          />

          <label className="text-[1rem] font-medium block" htmlFor="">
            Password{" "}
          </label>
          <input
            type="  "
            name="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
            className="w-[25rem] border-b-2  rounded-md  hover:border-blue-300  block outline-none"
            placeholder="Password"
          />

          <button className="w-[25rem] mt-[2rem] text-center py-[0.8rem] px-[1rem] text-white font-semibold rounded-lg hover:bg-orange-700 bg-[#f88b0b] "
          >
            CREATE ACCOUNT
          </button>
          <div className="flex flex-row gap-2 font-thin">
            <p>Are you an existing customer ?</p>
            <button className="">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
