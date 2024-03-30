import React from "react";
import Login from "../Components/Login";
import SideBar from "../Components/SideBar";
import Link from "next/link"

export default function LoginPage () {
    return (
        <div className="flex-row-reverse lg:flex items-center justify-center">
            <div className="bg-white text-black h-screen lg:w-2/3">
                <Login />
            </div>
            <div className="lg:w-1/3 text-white h-screen bg-slate-900 text-center items-center align-center">
                <SideBar />
            </div>  
        </div>
    )
}