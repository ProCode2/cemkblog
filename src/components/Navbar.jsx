import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

// bottom navigation bar
const Navbar = () => {
  const { user, logIn, logOut } = useAuth();
  const [userData, setUser] = useState({});

  useEffect(() => {
    setUser(user);
  }, [user]);
  return (
    <div className="nav-white-glassmorphism nav-gradient shadow-md fixed bottom-10 left-2 right-2 mx-auto h-12 px-4 rounded-full overflow-hidden max-w-max z-10">
      <ul className="w-full h-full nav-text-shadow flex justify-center items-center text-sm soft-text-color max-w-max">
        <Link href="/">
          <li className="flex-1 nav-text-shadow flex justify-center items-center border-r-2 w-32 cursor-pointer soft-border-color">
            Home
          </li>
        </Link>
        {user ? (
          <Link href={`/profile/${userData.uid}`}>
            <li className="flex-1 nav-text-shadow flex justify-center items-center border-r-2 w-32 cursor-pointer soft-border-color">
              Profile
            </li>
          </Link>
        ) : null}
        {user ? (
          <Link href="/posts/new">
            <li className="flex-1 nav-text-shadow flex justify-center items-center border-r-2 w-32 cursor-pointer soft-border-color">
              New
            </li>
          </Link>
        ) : null}
        {user ? (
          <li
            onClick={logOut}
            className="flex-1 nav-text-shadow flex justify-center items-center w-32 cursor-pointer"
          >
            Logout
          </li>
        ) : (
          <li
            onClick={logIn}
            className="flex-1 nav-text-shadow flex justify-center items-center w-32 cursor-pointer"
          >
            Login
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
