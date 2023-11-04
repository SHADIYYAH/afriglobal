import { useFormik } from "formik";
import axios from "axios";
import { validateLogin } from "../../validations/login";
import { network } from "../../components/url/network";
import { API_URL } from "../../services/api";
import { useNavigate } from 'react-router-dom';
import Africover from "../../assets/africover.png";

const Login = () => {
  const redirect = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateLogin,
    onSubmit: async (values) => {
      try {
        const response = await axios({
          method: "POST",
          url: `${network.baseURL}${API_URL.LOGINURL}`,
          data: values,
        });
        console.log("response", response.data);

        if (response.data.status === false)
          throw new Error(response.data.message);

        localStorage.setItem("userToken", response.data.token);
        redirect("/dashboard");
      } catch (error) {
        console.log("error", error.response.data.message);
        alert(error.response.data.message || "Sorry something went wrong");
      }
    },
  });
  return (
    <div className="  bg-blue-950 items-center">
      <div className="ml-[35rem] ">
        <div>
          <img src={Africover} alt="" className="w-[5rem]" />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <h1 className="font-bold">Customer's Login</h1>
          <label htmlFor="">Email Address </label>

          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-[25rem] border-b-2  rounded-md  hover:border-blue-300  block outline-none"
            placeholder="shadiyyah@gmail.com"
          />

          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <label htmlFor="">Password </label>

          <input
            type="password"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="w-[25rem] border-b-2  rounded-md  hover:border-blue-300  block outline-none"
            placeholder="Password"
          />

          {formik.errors.password ? <div>{formik.errors.password}</div> : null}

          <p>Forgot Password ?</p>
          <button className="w-[25rem] mt-[2rem] text-center py-[0.8rem] px-[1rem] text-white font-semibold rounded-lg hover:bg-orange-700 bg-[#f88b0b] ">
            Sign In
          </button>

          <div className="flex flex-row gap-2 font-thin">
            <p>Are you a new customer?</p>
            <button className="">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
