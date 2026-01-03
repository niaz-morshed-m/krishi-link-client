import React from 'react';
import { FiPieChart, FiUsers } from 'react-icons/fi';

const DashboardHome = () => {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Card 1 */}
          <div className="stat bg-base-100 shadow-md rounded-2xl border border-base-200">
            <div className="stat-figure text-primary">
              <FiUsers className="w-8 h-8" />
            </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          {/* Card 2 */}
          <div className="stat bg-base-100 shadow-md rounded-2xl border border-base-200">
            <div className="stat-figure text-secondary">
              <FiPieChart className="w-8 h-8" />
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">14% more than last month</div>
          </div>

          {/* Card 3 */}
          <div className="stat bg-base-100 shadow-md rounded-2xl border border-base-200">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>

          {/* Card 4 */}
          <div className="stat bg-base-100 shadow-md rounded-2xl border border-base-200">
            <div className="stat-title">Revenue</div>
            <div className="stat-value">$34,200</div>
            <div className="stat-desc">From Jan 1st - Feb 1st</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-base-100 rounded-2xl shadow-md p-6 h-96 border border-base-200">
            <h2 className="text-xl font-bold mb-4">Revenue History</h2>
            <div className="flex h-full items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
              Chart Component Here
            </div>
          </div>
          <div className="bg-base-100 rounded-2xl shadow-md p-6 h-96 border border-base-200">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <ul className="steps steps-vertical w-full">
              <li className="step step-primary">Register</li>
              <li className="step step-primary">Choose plan</li>
              <li className="step">Purchase</li>
              <li className="step">Receive Product</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardHome;