'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { db } from '@/firebase.config'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
// import { timeStamp } from 'console'
import { toast } from 'react-hot-toast'



const OAuth = () => {
  const pathName = usePathname();
  const router = useRouter()

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Check for user
      const docRef = doc(db,'users', user.uid )
      const docSnap = await getDoc(docRef)

      // If user exist, create user
      if(!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp()
        })
      }
      router.push('/profile')
    } catch (error) {
      toast.error('Could not authorise with Google')
    }
  }

  return (
    <div className='my-5 text-center text-sm'>
      <p>Sign {pathName === '/login' ? 'in' : 'up'} with </p>
      <button onClick={onGoogleClick}>
        <img 
          className='w-6 m-1'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLQmL6MrQdyrmcqs7hqL51DtWLIKPVr7Znr7ndd9Fiw&s" 
          alt="google" />
      </button>
    </div>
  )
}

export default OAuth