"use client"
import { useEffect, useState } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { db } from '@/firebase.config'
import { updateDoc, doc } from 'firebase/firestore'
import { toast } from 'react-hot-toast'

const Profile = () => {
    const auth = getAuth()
    const [changeDetails, setChangeDetails] = useState(false)
    const [formData, setFormData] = useState({
      name: auth.currentUser?.displayName,
      email: auth.currentUser?.email
    })

    const { name, email } = formData

    const router = useRouter()

    const onLogout = () => {
      auth.signOut()
      router.push('/login')
    } 

    const onSubmit = async () => {
      try {
        
        if(auth.currentUser?.displayName !==name) {
          //update display name in firebase
          await updateProfile(auth.currentUser, {
            displayName: name
          })

          //update in firestore
          const userRef = doc(db, 'users', auth.currentUser.uid)
          await updateDoc(userRef, {
            name
          })
        }
      } catch (error) {
        toast.error('could mot upadte profile details')
      }
    }

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id] : e.target.value,
      }))  
    }

  return (
    <div>
      <header>
        <p>My profile</p>
        <button
          type='button'
          className=''
          onClick={onLogout}
        >
          Logout
        </button>
      </header>

      <main>
        <div>
          <p>Personal Details</p>
          <p onClick={() => {
            changeDetails && onSubmit()
            setChangeDetails((prevState) => !prevState)
          }}>
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>

        <div>
          <form action="">
            <input 
              type="text"
              id='name'
              className={!changeDetails ? '' : ''}
              disabled={!changeDetails} 
              value={name}
              onChange={onChange}
            />
            <input 
              type="email" 
              id='email'
              className={!changeDetails ? '' : ''}
              disabled= {!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>
      </main>
    </div>
  )
}
export default Profile