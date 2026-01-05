import React from "react";
import {
  FaShieldAlt,
  FaDatabase,
  FaUserLock,
  FaEnvelopeOpenText,
  FaEye,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
            <FaShieldAlt className="text-primary" /> Privacy Policy
          </h1>
          <p className="text-lg opacity-80">
            Your privacy is our priority at KrishiLink.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Information Collection */}
          <div className="card bg-base-100 shadow-md border-t-4 border-primary">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaDatabase className="text-primary" /> 1. Data We Collect
              </h2>
              <p>
                To provide our services, we collect the following information
                when you register[cite: 132]:
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="badge badge-outline">Name [cite: 134]</div>
                <div className="badge badge-outline">
                  Email Address [cite: 135]
                </div>
                <div className="badge badge-outline">
                  Profile Photo [cite: 136]
                </div>
                <div className="badge badge-outline">
                  Crop Post Details [cite: 153]
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Data */}
          <div className="card bg-base-100 shadow-md border-t-4 border-primary">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaEye className="text-primary" /> 2. How We Use Information
              </h2>
              <ul className="list-disc list-inside space-y-2 opacity-90">
                <li>
                  To create your personal profile and manage your crop
                  posts[cite: 184, 189].
                </li>
                <li>
                  To facilitate connections between farmers, traders, and
                  consumers[cite: 4].
                </li>
                <li>
                  To show your contact info to owners when you submit an
                  interest request[cite: 62, 63].
                </li>
              </ul>
            </div>
          </div>

          {/* Security */}
          <div className="card bg-base-100 shadow-md border-t-4 border-primary">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaUserLock className="text-primary" /> 3. Data Security
              </h2>
              <p>
                We use secure authentication methods to protect your
                account[cite: 116]. While we strive to protect your data, no
                method of transmission over the internet is 100% secure.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body items-center text-center">
              <FaEnvelopeOpenText className="text-3xl text-primary mb-2" />
              <h2 className="card-title">Questions?</h2>
              <p>
                If you have any questions about your data, contact the
                KrishiLink team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
