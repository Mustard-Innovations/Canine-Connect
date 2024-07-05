'use client';
import { useEffect, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase.config';
import { updateDoc, doc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { useAuth } from '@/app/Components/SmartComp/AuthContext';

const Profile = () => {
  const auth = getAuth();
  const { user } = useAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || ''
  });

  const { name, email } = formData;

  const router = useRouter();

  const onLogout = () => {
    auth.signOut();
    router.push('/login');
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser?.displayName !== name) {
        // update display name in firebase
        await updateProfile(auth.currentUser, { displayName: name });

        // update in firestore
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, { name });
      }
    } catch (error) {
      toast.error('Could not update profile details');
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div>
      <header>
        <p>My profile</p>
        <button type='button' onClick={onLogout}>
          Logout
        </button>
      </header>

      <main>
        <div>
          <p>Personal Details</p>
          <p onClick={() => {
            if (changeDetails) onSubmit();
            setChangeDetails((prevState) => !prevState);
          }}>
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>

        <div>
          <form>
            <input
              type="text"
              id='name'
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input
              type="email"
              id='email'
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
