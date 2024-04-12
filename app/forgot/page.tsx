import React from "react";
import Forgot from "../Components/Authentications/Forgot";
import SideBar from "../Components/sidebar/SideBar";


const ForgotPage = () => {
    return (
        <div className="flex-row-reverse lg:flex items-center">
            <div className="bg-white text-black h-screen lg:h-screen lg:w-2/3">
                <Forgot />
            </div>
            <div className="lg:w-1/3 text-white lg:h-screen bg-black lg:bg-slate-800">
                <SideBar />
            </div>  
        </div>
    );
}

export default ForgotPage;
