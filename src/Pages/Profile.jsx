import React from 'react';
import ProfilePage from '../Components/ProfilePage';

const Profile = () => {
    return (
      <div className="min-h-screen bg-base-200 p-4 sm:p-8 flex items-center justify-center mt-10">
        <div className="card w-full max-w-3xl bg-base-100 shadow-xl p-6 sm:p-8">
          <ProfilePage />
        </div>
      </div>
    );
};

export default Profile;