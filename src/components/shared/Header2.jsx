
import {PiBellLight} from "react-icons/pi"
import Profile from "../../assets/profile.jpeg"
const Header2 = () => {
    return (
        <div className="font-Poppins">
          <div className="bg-white flex gap-5 items-center justify-end h-[5rem] p-3  ">
            <h1>DASHBOARD</h1>
            <div className="">
            <PiBellLight/>
            </div>
            <div className="flex items-center gap-5">
              
              <div className="">
               <img
                  src={Profile}
                  alt=""
                  className="rounded-[50%] w-[4rem] h-[4rem] sm:w-[5rem]"
                />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Header2