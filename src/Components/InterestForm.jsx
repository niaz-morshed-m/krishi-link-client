import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Aos from 'aos';
import { useNavigate } from 'react-router';

const InterestForm = ({data}) => {
const {user} = useContext(AuthContext)
const [error, setError] = useState(null)
const [quantity, setQuantity] =useState(0)
const [totalPrice, setTotalPrice] = useState(0)
const [status, setStatus] = useState(false)


 const [interestsData, seInterestsData] = useState([])
     useEffect(() => {
            fetch(`http://localhost:3000/myInterests/${user?.email}`)
              .then((res) => res.json())
              .then((info) => {
                seInterestsData(info);
              })
              .catch((err) => console.log("Error:", err));
          }, [user]);

console.log(interestsData)
 useEffect(() => {
   const userInterest = interestsData.find(
     (interest) => data._id  === interest.cropId
   );
   if (userInterest) {
     setError("You have already expressed interest in this crop.");
     setStatus(true);
   }
 }, [interestsData, user?.email]);


const handleTotalPrice = (e) => {
  const value = parseInt(e.target.value) || 0;



  if (value <= 0) {
    setError("Your quantity should be at least 1");
    setStatus(true);
    setQuantity(0);
    setTotalPrice(0);
  } 
  
  
  else if (value > parseInt(data.quantity)) {
    setError("This amount of Quantity Not Available");
    setStatus(true);
    setQuantity(0);
    setTotalPrice(0);
  } else {
    setError(null);
    setStatus(false);
    setQuantity(value);
    setTotalPrice(value * parseInt(data.pricePerUnit));
  }
};
const navigate = useNavigate();
const handleSubmitInterest = (e) => {
  e.preventDefault();

  // 🚨 If user is NOT logged in
  if (!user) {
    Swal.fire({
      title: "Login Required",
      text: "Please login to express your interest.",
      icon: "warning",
      confirmButtonText: "Go to Login",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
    return;
  }

  const form = e.target;
  const quantity = form.quantity.value;
  const message = form.message.value;

  const newInterest = {
    cropId: data._id,
    cropName: data.name,
    ownerName: data.owner.ownerName,
    userEmail: user.email,
    userName: user.displayName,
    ownerEmail: data?.owner.ownerEmail,
    quantity: quantity,
    message: message,
    status: "pending",
  };

  fetch(`http://localhost:3000/crop/addInterest`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newInterest),
  })
    .then((res) => res.json())
    .then(() => {
      Swal.fire({
        title: "Interest sent to the Owner",
        icon: "success",
      }).then(() => {
        form.reset();
        setQuantity(0);
        setTotalPrice(0);
        setError("You have already expressed interest in this crop.");
        setStatus(true);
      });
    });
};


  
  useEffect(() => {
             Aos.init();
           }, []);
         
         
 

    return (
      <div className="w-full lg:w-2/5 space-y-6">
        <div
          className="bg-white p-6 rounded-lg shadow-lg space-y-4"
          data-aos-duration="5000"
          data-aos="fade-right"
        >
          <h3 className="text-xl font-bold text-gray-800">
            Express Your Interest
          </h3>

          <form onSubmit={handleSubmitInterest} className="space-y-4">
  
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity (kg)
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Quantity"
                onChange={handleTotalPrice}
                required
              />
              {error && <span className="text-sm text-red-600">{error}</span>}
            </div>


            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

  
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-lg font-bold text-gray-800">
                Total Price: TK {totalPrice}
              </h4>
            </div>

            {/* Submit Button */}
            <button
              disabled={status || quantity <= 0}
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit Interest
            </button>
          </form>
        </div>
      </div>
    );
};

export default InterestForm;