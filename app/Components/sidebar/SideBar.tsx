import React from "react";


const SideBar = () => {



    
    return (
        <div>
           <div className="m-auto text-center lg:w-1/3">
                <div className="py-14 text-3xl font-bold my-10 mt-20  m-auto">
                    Canine Connect.
                </div>
                <div className="h-20 my-5"></div>
                <div className="whitespace-nowrap w-full">
                    <div className='inline-block p-5 overflow-hidden'>
                        <img className="m-auto w-10"  src="https://banner2.cleanpng.com/20190504/blc/kisspng-scalable-vector-graphics-encapsulated-postscript-c-leaf-png-icon-18-png-repo-free-png-icons-5ccdc273b52358.445843551556988531742.jpg" alt="logo" />
                        <div>Best quality materials</div>
                        <div className="font-light text-xs p-3">Our products is made from at least 75% <br /> recycled polyester fibers.</div>
                    </div>
                    <div className='inline-block p-5 overflow-hidden'>
                        <img className="m-auto w-10"  src="https://banner2.cleanpng.com/20190504/blc/kisspng-scalable-vector-graphics-encapsulated-postscript-c-leaf-png-icon-18-png-repo-free-png-icons-5ccdc273b52358.445843551556988531742.jpg" alt="logo" />
                        <div className="f">Secure payments</div>
                        <div className="font-light text-xs p-3">Payments with a guaranteed level of<br />security, you dont have to worry</div>
                    </div>
                    <div className='inline-block p-5 overflow-hidden'>
                        <img className="m-auto w-10"  src="https://banner2.cleanpng.com/20190504/blc/kisspng-scalable-vector-graphics-encapsulated-postscript-c-leaf-png-icon-18-png-repo-free-png-icons-5ccdc273b52358.445843551556988531742.jpg" alt="logo" />
                        <div>Free shipping</div>
                        <div className="font-light text-xs p-3">Free all shipping worldwide, with<br />applicable conditions</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center"><hr className="inline-block p-5 overflow-hidden w-5" /></div>
                    <div className="text-center px-0.5"><hr className="inline-block p-5 overflow-hidden w-5" /></div>
                    <div className="text-center"><hr className="inline-block p-5 overflow-hidden w-5" /></div>
                </div>
                
            </div>
        </div>
    );
}

export default SideBar;


