import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import EditForm from '../Components/EditForm';
import { MdErrorOutline } from 'react-icons/md';
import Swal from "sweetalert2";


const MyPosts = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState([])

     useEffect(() => {
        fetch("http://localhost:3000/crop/all")
          .then((res) => res.json())
          .then((info) => {
            setData(info);
          })
          .catch((err) => console.log("Error:", err)); 
      }, [user]);
  
const filteredData = data.filter(
  (post) => (user?.email === post.owner.ownerEmail)
);


const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    customClass: {
      confirmButton: "my-confirm-btn",
      cancelButton: "my-deny-btn",
    },
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3000/crop/delete/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then(() => {
          setData((prevData) => prevData.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Your post has been deleted.", "success");
        });
    }
  });
};





    return filteredData && filteredData.length > 0 ? (
      <div className="overflow-x-auto m-8">
        <h1 className="text-2xl font-bold my-3 text-center text-primary">Your Posts</h1>
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
              <tr key={post._id} className="text-center">
                <th>{index + 1}</th>
                <td>{post.name}</td>
                <td>{post.type}</td>
                <td>
                  TK {post.pricePerUnit} / {post.unit}
                </td>
                <td>
                  <dialog id={`my_modal_${post._id}`} className="modal">
                    <div className="modal-box text-start">
                      <form method="dialog">
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
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="btn btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="flex justify-center items-center gap-2 text-center mx-auto m-8">
        <MdErrorOutline /> <span>You haven't Posted any Crop Yet</span>
      </div>
    );
};

export default MyPosts;