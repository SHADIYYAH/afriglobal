import React from 'react'
import Logo from "../../assets/logo.svg"
import {BiSolidDashboard} from "react-icons/bi"
import {FaHome} from "react-icons/fa"
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlinePlusCircle } from "react-icons/ai"
import {PiTagChevronLight} from "react-icons/pi"
import {PiBellLight} from "react-icons/pi"
import {GrUserSettings} from "react-icons/gr"
const SideNav = () => {
    return (
        <div className="bg-frame bg-cover bg-no-repeat h-[100%]">
          <div className="flex flex-col items-center ">
            <img src={Logo} alt="" />
    
            <div className="">
              <div className="flex items-center gap-5 pt-[3rem] hover:text-white ">
                <span>
                    <BiSolidDashboard/>
                </span>
                <p>Dashborad</p>
              </div>
              <div className="flex items-center gap-5 pt-[3rem] hover:text-white ">
                <span>
                    <FaHome/>
                </span>
                <p className="">SSLAG</p>
              </div>
              <div className="flex items-center gap-5 pt-[3rem] hover:text-white">
                <span>
                    <RxHamburgerMenu/>
                </span>
                <p className="">My Insurance</p>
              </div>
              <div className="flex items-center gap-5 pt-[3rem] hover:text-white">
                <span>
                  <AiOutlinePlusCircle/>
                </span>
                <p className="">Buy Insurance </p>
              </div>
              <div className="flex items-center gap-5 pt-[3rem] hover:text-white">
                <span>
                    <PiTagChevronLight/>
                </span>
                <p className="">Get a Quote</p>
              </div>
              <div className="flex items-center gap-5 pt-[3rem] hover:text-white ">
                <span>
                    <PiBellLight/>
                </span>
                <p className="">Insurance Claims</p>
              </div>
              <div className="flex items-center gap-5 mt-[6rem] hover:text-white ">
                <span>
               <GrUserSettings/>
                </span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SideNav