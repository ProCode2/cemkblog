import React from "react";
import { FaSearch } from "react-icons/fa";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <header className="p-4 m-4">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <h1 className="text-3xl font-thin uppercase">CemkBlog</h1>
        <div className="flex justify-center items-center space-x-4 mt-4 md:mt-0">
          {/* <div className="flex space-x-2 items-center justify-center border border-gray-600 dark:border-gray-100 rounded-full px-3 py-2 md:w-88">
            <input
              type="text"
              className="bg-transparent focus:outline-none grow"
            />
            <FaSearch />
          </div> */}
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
