import React from 'react'
import SignUp from '../Components/SignUp'
import SideBar from '../Components/SideBar'

const SignInPage = () => {
  return (
    <div className="flex-row-reverse lg:flex items-center justify-center">
        <div className="bg-white text-black h-screen lg:w-2/3">
            <SignUp />
        </div>
        <div className="lg:w-1/3 text-white h-screen bg-slate-900 text-center items-center align-center">
            <SideBar />
        </div>  
    </div>
  )
}

export default SignInPage