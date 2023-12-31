import React from "react";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Books</h2>
          <p className="text-gray-600">20</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
          <p className="text-gray-600">520</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Revenue</h2>
          <p className="text-gray-600">$20,000</p>
        </div>
      </div>
    </div>
  );
}
