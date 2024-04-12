import React from "react";
import Login from "../Components/Authentications/Login";
import SideBar from "../Components/sidebar/SideBar";
import Link from "next/link"

export default function LoginPage () {
    return (
        <div className="flex-row-reverse lg:flex items-center justify-center">
            <div className="bg-white text-black lg:h-screen lg:w-2/3">
                <Login />
            </div>
            <div className="lg:w-1/3  text-white bg-black lg:bg-slate-800 lg:h-screen">
                <SideBar />
            </div>   
        </div>
    )
}