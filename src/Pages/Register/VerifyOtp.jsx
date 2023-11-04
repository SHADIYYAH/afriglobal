

import ReactCodeInput from 'react-code-input'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../services/api';
import { network } from '../../components/url/network';
import axios from 'axios'

const VerifyOtp = () => {
    const redirect = useNavigate()
    const [otp, setOtp] = useState('');
    
    const handleOtp = (_otp) => {
        setOtp(_otp);
      };

      const otpSubmit =async ()=>{
        const getCustomerEmail = localStorage.getItem('email')
        try {
            const response = await axios({
                method:"patch",
                 url: `${network.baseURL}${API_URL.VERIFYOTP}/${otp}/${getCustomerEmail}`,
            })

            if(response.data.status === false) throw new Error(response.data.message)
    
            alert(response.data.message)
            redirect('/auth/login')
        } catch (error) {
            console.log(error)
            alert(error.response.data.message || "What you seek is beyond this globe")
            
        }
      }
  return (
    <div>
    <h1>Verify OTP</h1>
    <div className=' w-full h-screen flex flex-col justify-center items-center bg-polygon bg-no-repeat bg-left-bottom' >

           <ReactCodeInput type='text' value={otp} onChange={handleOtp} fields={4} />
        
            <button onClick={otpSubmit} className=" mt-[3rem] text-[2rem] text-center text-white font-semibold w-[20rem] bg-blue-600 rounded-lg px-[1rem] py-[1rem] ">
             Verify
            </button>
            

            </div>
</div>
  )
}

export default VerifyOtp