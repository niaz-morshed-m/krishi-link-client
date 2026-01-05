import React from "react";
import { BiCookie } from "react-icons/bi";
import { FaInfoCircle, FaCheckCircle, FaTools } from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
            <BiCookie className="text-warning" /> Cookie Policy
          </h1>
          <p className="text-lg opacity-80">
            How KrishiLink uses cookies to improve your experience.
          </p>
        </div>

        <div className="collapse collapse-plus bg-base-100 shadow-sm mb-4">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium flex items-center gap-2">
            <FaInfoCircle className="text-info" /> What are Cookies?
          </div>
          <div className="collapse-content">
            <p>
              Cookies are small text files stored on your device that help our
              website remember your preferences and login status[cite: 116].
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 shadow-sm mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium flex items-center gap-2">
            <FaCheckCircle className="text-success" /> Why We Use Them
          </div>
          <div className="collapse-content">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Authentication:</strong> To keep you logged in as you
                navigate between pages[cite: 21, 28].
              </li>
              <li>
                <strong>Security:</strong> To protect your account from
                unauthorized access[cite: 116].
              </li>
              <li>
                <strong>Performance:</strong> To ensure the application loads
                efficiently on your device[cite: 196].
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 shadow-sm mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium flex items-center gap-2">
            <FaTools className="text-error" /> Managing Cookies
          </div>
          <div className="collapse-content">
            <p>
              You can choose to disable cookies through your browser settings.
              However, please note that certain features of KrishiLink, like
              staying logged in, may not work correctly without them[cite: 21].
            </p>
          </div>
        </div>

        <div className="alert shadow-lg mt-8">
          <div>
            <FaInfoCircle className="text-info" />
            <span>
              By using KrishiLink, you consent to our use of essential cookies.
              [cite: 4]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
