import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyInterestsTable from '../Components/MyInterestsTable';



const MyInterests = () => {
    const {user} = useContext(AuthContext)
    const [interestsData, seInterestsData] = useState([])
     useEffect(() => {
            fetch(`http://localhost:3000/interests/${user?.email}`)
              .then((res) => res.json()) // convert response to JSON
              .then((info) => {
                seInterestsData(info);
              }) // set the fetched data
              .catch((err) => console.log("Error:", err)); // handle error
          }, [user]);
          
    return (
        <div>
          <MyInterestsTable interestsData={interestsData}></MyInterestsTable>
        </div>
    );
};

export default MyInterests;