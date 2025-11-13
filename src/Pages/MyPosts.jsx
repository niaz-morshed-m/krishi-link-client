import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import EditForm from '../Components/EditForm';

const MyPosts = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState([])

     useEffect(() => {
        fetch("http://localhost:3000/crop/all")
          .then((res) => res.json()) // convert response to JSON
          .then((info) => {
            setData(info)
          }) // set the fetched data
          .catch((err) => console.log("Error:", err)); // handle error
      }, [user]);
  
const filteredData = data.filter(
  (post) => (user?.email === post.owner.ownerEmail)
);
const handleDelete = (id)=>{
fetch(`http://localhost:3000/crop/delete/${id}`, {
  method: "DELETE",
  headers: { "content-type": "application/json" },
})
  .then((res) => res.json())
  .then(() => navigate("/myPosts"));
}
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th></th>
              <th>Crop Name</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredData.map((post, index) => (
              <tr className="text-center">
                <th>{index + 1}</th>
                <td>{post.name}</td>
                <td>{post.type}</td>
                <td>
                  TK {post.pricePerUnit} / {post.unit}
                </td>
                <td>
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}

                  <dialog id={`my_modal_${post._id}`} className="modal">
                    <div className="modal-box text-start">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <EditForm post={post}></EditForm>
                    </div>
                  </dialog>
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <button
                      type="submit"
                      onClick={() =>
                        document
                          .getElementById(`my_modal_${post._id}`)
                          .showModal()
                      }
                      className="btn btn-sm"
                    >
                      Edit
                    </button>
                    <button onClick={()=>handleDelete(post._id)} className="btn btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyPosts;