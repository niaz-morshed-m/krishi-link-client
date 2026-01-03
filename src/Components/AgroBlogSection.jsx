import React from "react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const AgroBlogSection = () => {
  // Static data for blogs
  const blogs = [
    {
      id: 1,
      title: "Best Time for Planting Winter Vegetables",
      date: "Dec 10, 2024",
      summary: "Learn which crops thrive during the cold season in Bangladesh.",
      image:
        "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Organic Pest Control Methods",
      date: "Jan 05, 2025",
      summary:
        "Protect your crops without using harmful chemicals using these natural tips.",
      image:
        "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Modern Irrigation Techniques",
      date: "Feb 12, 2025",
      summary: "Save water and increase yield with drip irrigation systems.",
      image:
        "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Farming Tips & News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <figure>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <FaCalendarAlt className="mr-2" /> {blog.date}
                </div>
                <h3 className="card-title text-lg font-bold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.summary}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-link text-green-600 no-underline hover:text-green-800 p-0">
                    Read More <FaArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgroBlogSection;
