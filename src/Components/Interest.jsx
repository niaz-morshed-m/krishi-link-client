import Aos from 'aos';
import React, { useContext, useEffect, useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Interest = () => {

  useEffect(() => {
             Aos.init();
           }, []);
         

const {user} = useContext(AuthContext)

      
    const [data, setData] = useState([]);
               useEffect(() => {
              fetch(`http://localhost:3000/interests/${user?.email}`)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((err) => console.log("Error:", err)); 
            }, [user?.email]);
         

const handleStatusUpdate = (id, status) => {
  Swal.fire({
    title:
      status === "accepted" ? "Accept this interest?" : "Reject this interest?",
    text:
      status === "accepted"
        ? "The buyer will be notified."
        : "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: status === "accepted" ? "#16a34a" : "#dc2626",
    cancelButtonColor: "#6b7280",
    confirmButtonText: status === "accepted" ? "Yes, Accept" : "Yes, Reject",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3000/interest/status/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then(() => {
          // update UI instantly
          setData((prev) =>
            prev.map((item) => (item._id === id ? { ...item, status } : item))
          );

          Swal.fire({
            icon: "success",
            title: status === "accepted" ? "Accepted!" : "Rejected!",
            text:
              status === "accepted"
                ? "Interest has been accepted."
                : "Interest has been rejected.",
            timer: 1500,
            showConfirmButton: false,
          });
        })
        .catch(() => {
          Swal.fire("Error!", "Something went wrong.", "error");
        });
    }
  });
};



    return (
      <div>
        {data && data.length > 0 ? (
          <div
            className="overflow-x-auto"
            data-aos-duration="5000"
            data-aos="fade-right"
          >
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Buyer Name</th>
                  <th>Quantity</th>
                  <th>Message</th>
                  <th>Status</th>
                </tr>
              </thead>
              {data.map((post, index) => (
                <tbody className="text-center">
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>{post.userName}</td>
                    <td>{post.quantity}</td>
                    <td>{post.message}</td>
                    <td
                      className={`font-semibold ${
                        post.status === "accepted"
                          ? "text-green-600"
                          : post.status === "rejected"
                          ? "text-red-600"
                          : "text-yellow-500"
                      }`}
                    >
                      {post.status || "pending"}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center" colSpan="5">
                      {post.status === "pending" ? (
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() =>
                              handleStatusUpdate(post._id, "accepted")
                            }
                            className="btn btn-sm bg-green-600 text-white"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() =>
                              handleStatusUpdate(post._id, "rejected")
                            }
                            className="btn btn-sm bg-red-600 text-white"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="italic text-gray-500">
                          Action completed
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ) : (
          <div
            className="flex justify-center items-center gap-2 text-center mx-auto"
            data-aos-duration="5000"
            data-aos="fade-right"
          >
            <MdErrorOutline /> <span>No Interests Received Yet</span>
          </div>
        )}
      </div>
    );
};

export default Interest;