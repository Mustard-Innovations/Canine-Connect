import React from "react";


const SideBar = () => {
    return (
        <div>
           <div className="bg-grey my-20 m-auto text-center items-center align-center lg:w-1/3">
                <div className="py-14 text-3xl font-bold my-10 mt-20  m-auto">
                    Canine Connect.
                </div>
                <div>
                    <img className="m-auto w-10"  src="https://banner2.cleanpng.com/20190504/blc/kisspng-scalable-vector-graphics-encapsulated-postscript-c-leaf-png-icon-18-png-repo-free-png-icons-5ccdc273b52358.445843551556988531742.jpg" alt="logo" />
                    Best quality materials
                    <div className="font-light text-xs p-3">Our products is made from at least 75% <br /> recycled polyester fibers</div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;


