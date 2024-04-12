"use client"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import React from 'react'
import { useState } from "react"
import { 
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase.config"
import OAuth from "./OAuth"
import { toast } from 'react-hot-toast'



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
  })
  const { name, email, password } = formData

  const onChange = (event: { target: { id: any; value: any } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }))
  }

  const router = useRouter()

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      router.push('/login')
    } catch (error) {
      toast.error('Something went wrong with registration')
    }
  }

  return (
    <div>
      <div className="flex-row-reverse lg:flex items-center justify-center">
        <div className="bg-white text-black m-auto lg:w-2/3">
          <div className="pt-5 text-3xl font-bold m-auto mt-20 p-5">Canine Connect</div>
          <form onSubmit={onSubmit} className="max-w-sm m-auto font-light my-5 flex-start">
            <p className=" ">Create your account</p>
              <label htmlFor="name" className="block my-3 text-sm font-medium text-gray-900 dark:text-black flex-start">Name</label>
              <input 
                type="name" 
                id="name" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Name"
                value={name}
                onChange={onChange} 
                required
              />
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
            <div className="mb-5 ">
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
              
              <img
                src="https://static.thenounproject.com/png/743351-200.png" 
                alt="show password"
                className="w-10"
                onClick={() => setShowPassword((prevState) => !prevState)} 
              />
            </div>
            <button type="submit" className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
          </form>

          <div className="flex m-auto items-center justify-evenly mb-5">
            <Link className="my-6" href="/login">
              <img
                src="https://icon2.cleanpng.com/20180920/ur/kisspng-computer-icons-clip-art-vector-graphics-symbol-ima-instagram-home-icon-gallery-5ba3893d645047.4226597815374441574109.jpg" 
                alt="Back to login page" 
                className="w-10 p-1 m-auto"
              />
              <p className="text-center text-xs">Back to login</p>
            </Link>
            <OAuth />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SignUp