import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyInterestsTable from "../Components/MyInterestsTable";
import { MdErrorOutline } from "react-icons/md";

const MyInterests = () => {
  const { user } = useContext(AuthContext);
  const [interestsData, setInterestsData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://krishi-link-server-ten.vercel.app/myInterests/${user.email}`
    )
      .then((res) => res.json())
      .then((info) => {
        setInterestsData(info);
      })
      .catch((err) => console.log("Error:", err));
  }, [user?.email]);

  return interestsData && interestsData.length > 0 ? (
    <div className="m-8">
      <h1 className="text-2xl font-bold my-3 text-center text-primary">
        Your Interests
      </h1>
      <MyInterestsTable interestsData={interestsData} />
    </div>
  ) : (
    <div className="flex justify-center items-center gap-2 text-center mx-auto m-8">
      <MdErrorOutline className="text-xl" />
      <span>You haven't made any interest yet</span>
    </div>
  );
};

export default MyInterests;
