import React from 'react'
import SignUp from '../Components/Authentications/SignUp'
import SideBar from '../Components/sidebar/SideBar'

const SignInPage = () => {
  return (
    <div className="flex-row-reverse lg:flex items-center justify-center">
        <main className="bg-white lg:h-screen text-black lg:w-2/3">
          <SignUp />
        </main>
        <footer className="lg:w-1/3 text-white lg:h-screen bg-black lg:bg-slate-800">
          <SideBar />
        </footer>    
    </div>
  )
}

export default SignInPage