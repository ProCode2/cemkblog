import React from "react";

const CategoryCatalogue = () => {
  return (
    <div className="p-4 my-4">
      <div className="flex justify-center items-center overflow-y-auto space-x-4 max-w-6xl mx-auto">
        <span className="py-2 px-4 border border-gray-600 dark:border-gray-100 rounded-md shadow-md dark:shadow-gray-300 bg-slate-300 dark:bg-slate-900 text-sm">
          IOT
        </span>
        <span className="py-2 px-4 border border-gray-600 dark:border-gray-100 rounded-md shadow-md dark:shadow-gray-300 bg-slate-300 dark:bg-slate-900 text-sm">
          Interview
        </span>
        <span className="py-2 px-4 border border-gray-600 dark:border-gray-100 rounded-md shadow-md dark:shadow-gray-300 bg-slate-300 dark:bg-slate-900 text-sm">
          PPO
        </span>
        <span className="py-2 px-4 border border-gray-600 dark:border-gray-100 rounded-md shadow-md dark:shadow-gray-300 bg-slate-300 dark:bg-slate-900 text-sm">
          Placements
        </span>
        <span className="py-2 px-4 border border-gray-600 dark:border-gray-100 rounded-md shadow-md dark:shadow-gray-300 bg-slate-300 dark:bg-slate-900 text-sm">
          ARP
        </span>
      </div>
    </div>
  );
};

export default CategoryCatalogue;
