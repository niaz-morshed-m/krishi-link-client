import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

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
  (post) => (user.email === post.owner.ownerEmail)
);

    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
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
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="btn"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyPosts;