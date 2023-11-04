import React from 'react'
import SideNav from './SideNav'
import Header2 from './Header2'

const Container = ({children}) => {
  return (
    <div className="flex font-Poppins">
        <div className="w-[20%] " >
            <SideNav/>
        </div>

        <div className="bg-mainBG w-[80%]">
        <Header2/>
        {children}
        </div>
    </div>
  )
}

export default Container