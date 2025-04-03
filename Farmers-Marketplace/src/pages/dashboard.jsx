import { useEffect } from "react";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiBarChart2, FiUser, FiBell, FiLogOut } from "react-icons/fi";


export const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
  if (!user) {
    navigate("/login");
  }
}, [user, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <FiShoppingCart />
              <a href="/marketplace">Marketplace</a>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <FiBarChart2 />
              <a href="/analytics">Analytics</a>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <FiUser />
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.email}</h1>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Analytics Section */}
        <section className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-700">Total Sales</h3>
            <p className="text-2xl font-bold">$12,500</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-700">Active Orders</h3>
            <p className="text-2xl font-bold">34</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-yellow-700">New Customers</h3>
            <p className="text-2xl font-bold">17</p>
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="mt-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
          <table className="w-full mt-4">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Product</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Organic Apples</td>
                <td className="p-2">$120</td>
                <td className="p-2 text-green-500">Completed</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Fresh Milk</td>
                <td className="p-2">$80</td>
                <td className="p-2 text-yellow-500">Pending</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Farm Fertilizer</td>
                <td className="p-2">$300</td>
                <td className="p-2 text-red-500">Failed</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Notifications */}
        <section className="mt-6 bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
            <FiBell className="text-gray-500 text-2xl" />
          </div>
          <ul className="mt-4 space-y-2">
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm text-gray-600">
              📢 Your recent order has been shipped!
            </li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm text-gray-600">
              📌 Reminder: Farm Expo happening this weekend.
            </li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm text-gray-600">
              ⚠️ Payment failed for Farm Fertilizer. Please retry.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};
