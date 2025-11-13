import React from 'react';

const Interest = ({data}) => {
    const {interests} = data
    return (
      <div>
        <div className="overflow-x-auto">
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
            {interests.map((post, index) => (
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>{post.userName}</td>
                  <td>{post.quantity}</td>
                  <td>{post.message}</td>
                  <td>{post.status}</td>
                </tr>
                <tr>
                  <td className="text-center" colSpan="5">
                    <div className="flex justify-center items-center gap-2">
                      <button className="btn btn-sm">Accept</button>
                      <button className="btn btn-sm">Reject</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
};

export default Interest;