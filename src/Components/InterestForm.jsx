import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const InterestForm = ({data}) => {
const {user} = useContext(AuthContext)
const [error, setError] = useState(null)
const [quantity, setQuantity] =useState(0)
const [totalPrice, setTotalPrice] = useState(0)
const [status, setStatus] = useState(false)

  const { interests = [] } = data;

 useEffect(() => {
   const userInterest = interests.find(
     (interest) => interest.userEmail === user?.email
   );
   if (userInterest) {
     setError("You have already expressed interest in this crop.");
     setStatus(true);
   }
 }, [interests, user?.email]);


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

const handleSubmitInterest = (e) => {
  e.preventDefault();
  console.log("button clicked");
  const form = e.target;
  const quantity = form.quantity.value;
  const message = form.message.value;

  const newInterest = {
    cropId: data._id,
    userEmail: user.email,
    userName: user.displayName,
    quantity: quantity,
    message: message,
    status: "pending",
  };

  fetch(`http://localhost:3000/crop/addInterest/${data._id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newInterest),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      Swal.fire({
        title: "Interest sent to the Owner",
        icon: "success",
        draggable: true,
      }).then(() => {
        // ✅ Clear inputs
        form.reset();
        setQuantity(0);
        setTotalPrice(0);

        // ✅ Disable further submission instantly
        setError("You have already expressed interest in this crop.");
        setStatus(true);
      });
    });
};

  

 

    return (
      <div className="w-full lg:w-2/5 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="text-xl font-bold text-gray-800">
            Express Your Interest
          </h3>

          <form onSubmit={handleSubmitInterest} className="space-y-4">
            {/* Quantity Input */}
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
              />
              {error && <span className="text-sm text-red-600">{error}</span>}
            </div>

            {/* Message Input */}
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
              ></textarea>
            </div>

            {/* Total Price Display (Hardcoded) */}
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