import Aos from 'aos';
import React, { useEffect } from 'react';
import { MdErrorOutline } from 'react-icons/md';

const Interest = ({data}) => {
    const {interests} = data
  useEffect(() => {
             Aos.init();
           }, []);
         
          
    return (
      <div>
        {interests && interests.length > 0 ? (
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
              {interests.map((post, index) => (
                <tbody className='text-center'>
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
                        <button className="btn btn-sm bg-primary">Accept</button>
                        <button className="btn btn-sm bg-primary">Reject</button>
                      </div>
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