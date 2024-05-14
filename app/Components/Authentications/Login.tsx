"use client"
import Link from "next/link"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import OAuth from "./OAuth"
import { useRouter } from "next/navigation"
import { toast } from 'react-hot-toast'



const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData

    const onChange = (e: { target: { id: any; value: any } }) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const router = useRouter()

    const onSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        try {
            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if(userCredential.user) {
                router.push('/profile')
            }
        } catch (error) {
            console.log(error)

            toast.error('Incorrect username or password')
        }

        
    }

  return (
    <div>
        <div className="flex-row-reverse lg:flex items-center justify-center">
            <div className="bg-white text-black m-auto lg:w-2/3">
                <div className="pt-5 text-3xl font-bold m-auto mt-20 p-5">Welcome to Canine Connect</div>
                <form onSubmit={onSubmit} className="max-w-sm mx-auto">
                    <div className=" font-light my-5 flex-start">Login to your account</div>
                <div className="mb-5">
                    <label htmlFor="email" className="block my-3 text-sm font-medium text-gray-900 dark:text-black flex-start">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Email"
                        value={email}
                        onChange={onChange} 
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        id="password" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required 
                        placeholder="Password"
                        value={password}
                        onChange={onChange}
                    />

                    {/* <input 
                        placeholder="Show Password?" 
                        type="checkbox" 
                        id="showPassword"
                        onClick={() => setShowPassword((prevState) => !prevState)}
                    /> */}

                    <img 
                        src="https://static.thenounproject.com/png/743351-200.png" 
                        alt="show password"
                        className="w-10"
                        onClick={() => setShowPassword((prevState) => !prevState)} 
                    />
                </div>
                <div className="flex items-start mb-5">
                <Link href="/forgot">
                    <div className="ms-2 text-sm font-medium text-black-900">Forgot password?</div>
                </Link>
                </div>
                <button type="submit" className="btn btn-active">LOGIN</button>
                <div className="mb-5 text-sm">Don't have an account? 
                    <Link className="font-medium" href="/signup">Sign Up</Link>
                </div>
                </form>

                <OAuth />
            </div>
        </div>
    </div>
  )
}

export default Login