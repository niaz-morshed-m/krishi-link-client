import React from "react";
import {
  FaFileContract,
  FaUserShield,
  FaHandshake,
  FaSeedling,
  FaExclamationTriangle,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
            <FaFileContract className="text-primary" /> Terms of Use
          </h1>
          <p className="text-lg opacity-80">
            Welcome to KrishiLink. Please read our rules of engagement
            carefully.
          </p>
        </div>

        {/* Main Content: DaisyUI Card Layout */}
        <div className="flex flex-col gap-6">
          {/* Section 1: Introduction */}
          <div className="card bg-base-100 shadow-xl border-l-4 border-primary">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaSeedling className="text-green-600" />
                1. Platform Overview
              </h2>
              <p>
                <strong>KrishiLink</strong> is a social agro-network, not a
                traditional e-commerce site. We provide a digital space
                connecting farmers, traders, and consumers. We facilitate
                connections but are not a direct party to the transactions
                between users.
              </p>
            </div>
          </div>

          {/* Section 2: User Accounts */}
          <div className="card bg-base-100 shadow-xl border-l-4 border-primary">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaUserShield className="text-green-600" />
                2. Account Responsibility
              </h2>
              <p>
                To post crops or show interest, you must register an
                account[cite: 27, 28]. You agree to provide accurate information
                (Name, Email, etc.) and keep your password secure. You are
                responsible for all activities that occur under your account.
              </p>
            </div>
          </div>

          {/* Section 3: Buying & Selling */}
          <div className="card bg-base-100 shadow-xl border-l-4 border-primary">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaHandshake className="text-green-600" />
                3. Trading & Interactions
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Users can browse crops and show interest directly[cite: 7, 8].
                </li>
                <li>
                  The platform allows direct interaction between buyers and
                  sellers.
                </li>
                <li>
                  Negotiations regarding price, quality, and delivery are solely
                  between the involved parties.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4: Content Guidelines */}
          <div className="card bg-base-100 shadow-xl border-l-4 border-primary">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <MdSecurity className="text-green-600" />
                4. Content Guidelines
              </h2>
              <p>
                Users are responsible for the crop data they upload (images,
                prices, quantities)[cite: 6]. Posting false information, spam,
                or malicious content is strictly prohibited. We reserve the
                right to remove any post that violates these standards.
              </p>
            </div>
          </div>

          {/* Section 5: Liability Disclaimer */}
          <div className="card bg-base-100 shadow-xl border-l-4 border-primary">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaExclamationTriangle className="text-green-600" />
                5. Limitation of Liability
              </h2>
              <p>
                KrishiLink is an intermediary platform. We are not liable for:
              </p>
              <ul className="list-disc list-inside opacity-80">
                <li>The quality or safety of crops sold.</li>
                <li>Financial losses incurred during transactions.</li>
                <li>Disputes arising between users.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer / Last Updated */}
        <div className="mt-10 text-center">
          <div className="badge badge-outline p-4">Last Updated: 2024</div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
