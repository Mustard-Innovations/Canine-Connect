'use client'
import { useEffect, useState } from 'react'
import { getAuth, updateProfile, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { db } from '@/firebase.config'
import { updateDoc, doc } from 'firebase/firestore'
import { toast } from 'react-hot-toast'

const Profile: React.FC = () => {
  const auth = getAuth()
  const [user, setUser] = useState<User | null>(auth.currentUser)
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName || '',
    email: auth.currentUser?.email || ''
  })

  const { name, email } = formData

  const router = useRouter()

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser)
    }
  }, [auth.currentUser])

  const onLogout = () => {
    auth.signOut()
    router.push('/login')
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (auth.currentUser) {
        if (auth.currentUser.displayName !== name) {
          await updateProfile(auth.currentUser, {
            displayName: name
          })
        }

        // Update Firestore (if you are storing additional user info)
        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          name,
          email
        })

        toast.success('Profile updated successfully')
      }
    } catch (error) {
      toast.error('Could not update profile')
    }
  }

  return (
    <div className="profile">
      <header className="profile-header">
        <p className="page-header">My Profile</p>
        <button type="button" className="btn" onClick={onLogout}>
          Logout
        </button>
      </header>
      <main>
        <div className="profile-details">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
              disabled={!changeDetails}
              className="profile-name"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              disabled={!changeDetails}
              className="profile-email"
            />
            <button
              type="button"
              className="change-details"
              onClick={() => setChangeDetails(!changeDetails)}
            >
              {changeDetails ? 'Cancel' : 'Change Details'}
            </button>
            {changeDetails && (
              <button type="submit" className="save-details">
                Save
              </button>
            )}
          </form>
        </div>
      </main>
    </div>
  )
}

export default Profile
