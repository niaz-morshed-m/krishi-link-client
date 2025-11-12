import React from 'react';

const InterestForm = () => {
    return (
      <div className="w-full lg:w-2/5 space-y-6">
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
          View as Crop Owner (Toggle Ownership)
        </button>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="text-xl font-bold text-gray-800">
            Express Your Interest
          </h3>

          <form className="space-y-4">
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
                defaultValue="1"
                min="0"
                step="0.1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="0.0"
                readOnly
              />
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
                readOnly
              ></textarea>
            </div>

            {/* Total Price Display (Hardcoded) */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-lg font-bold text-gray-800">
                Total Price: $2.75
              </h4>
            </div>

            {/* Submit Button */}
            <button
              type="button"
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