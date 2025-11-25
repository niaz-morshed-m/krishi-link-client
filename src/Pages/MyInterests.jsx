import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyInterestsTable from '../Components/MyInterestsTable';



const MyInterests = () => {
    const {user} = useContext(AuthContext)
    const [interestsData, seInterestsData] = useState([])
     useEffect(() => {
            fetch(`https://krishi-link-server-ten.vercel.app/interests/${user?.email}`)
              .then((res) => res.json()) 
              .then((info) => {
                seInterestsData(info);
              }) 
              .catch((err) => console.log("Error:", err));
          }, [user]);
          
    return (
        <div className='mt-30'>
          <MyInterestsTable interestsData={interestsData}></MyInterestsTable>
        </div>
    );
};

export default MyInterests;