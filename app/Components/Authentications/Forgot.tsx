'use client'
import React from "react"
import Link from "next/link"
import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import toast, { Toast } from "react-hot-toast"

export default function ForgotPassword () {
    const [email, setEmail] = useState('')

    const onChange = (e: { target: { value: React.SetStateAction<string> } }) => setEmail(e.target.value)

    const onSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success('Email was sent')
        } catch (error) {
            toast.error('Could not send reset email')
        }
    }

    return (
        <div className="flex-row-reverse lg:flex items-center justify-center">
            <div className="bg-white text-black m-auto lg:w-2/3">
                <div className="pt-5 text-3xl font-bold m-auto mt-20 p-5">Forgot Password</div>
                <form onSubmit={onSubmit} className="max-w-sm mx-auto">
                    <div className=" font-light my-5 flex-start">We will send a new password  to your account from email.</div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block my-3 text-sm font-medium text-gray-900 dark:text-black flex-start">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                
                    <button type="submit" className="btn btn-active">Send Mail</button>
                    <div className="mb-5 text-sm">Don't have an account? <Link className="font-medium" href="/signup">Sign up</Link></div>
                </form>
                <Link className="my-6" href="/login">
                    <img 
                    src="https://icon2.cleanpng.com/20180920/ur/kisspng-computer-icons-clip-art-vector-graphics-symbol-ima-instagram-home-icon-gallery-5ba3893d645047.4226597815374441574109.jpg" 
                    alt="Back to login page" 
                    className="w-10 p-1 m-auto"
                    />
                    <p className="text-center text-xs">Back to login</p>
                </Link>
            </div>
        </div>
    )
}