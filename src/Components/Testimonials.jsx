import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  // Real data instead of Lorem Ipsum (as per requirement )
  const reviews = [
    {
      id: 1,
      name: "Abdul Karim",
      role: "Farmer, Bogura",
      image: "https://i.ibb.co/mJ9zQqS/farmer-1.jpg", // You can replace with local images
      review:
        "KrishiLink has changed how I do business. Previously, I had to wait for middlemen. Now, I can post my potato harvest and get direct interest from wholesalers in Dhaka!",
    },
    {
      id: 2,
      name: "Salma Begum",
      role: "Wholesale Trader",
      image: "https://i.ibb.co/QnJD4zX/trader-1.jpg",
      review:
        "Finding organic vegetables in bulk was always a challenge. This platform lets me see exactly what farmers are growing and book my quantity before the harvest.",
    },
    {
      id: 3,
      name: "Rahim Uddin",
      role: "Consumer",
      image: "https://i.ibb.co/Bq92Y3S/consumer-1.jpg",
      review:
        "I love the transparency. I can connect directly with the owners and negotiate prices. It feels like a true community rather than just a cold online shop.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how farmers and traders are growing together on the
            KrishiLink network.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="card bg-base-100 shadow-xl border-t-4 border-green-500 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="card-body">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-4xl text-green-200 mb-4" />

                {/* Review Text */}
                <p className="text-gray-600 italic mb-6">"{review.review}"</p>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                      {/* Using a placeholder if image fails, or generic avatar */}
                      <img
                        src={review.image}
                        alt={review.name}
                        onError={(e) =>
                          (e.target.src =
                            "https://cdn-icons-png.flaticon.com/512/149/149071.png")
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <span className="text-xs text-green-600 uppercase font-semibold">
                      {review.role}
                    </span>
                  </div>
                </div>

                {/* Star Rating (Static for display) */}
                <div className="flex text-yellow-400 mt-4 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
