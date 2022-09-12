import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider, useAuth } from "../../context/AuthContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const { loading } = useAuth();

  useEffect(() => {}, [loading]);

  return (
    <ThemeProvider attribute="class">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AuthContextProvider>
        <main className="font-lato flex flex-col bg-white text-slate-800 dark:bg-slate-800 dark:text-white min-h-screen relative z-10">
          {loading && (
            <div className="absolute backdrop-blur-sm left-0 top-0 w-screen min-h-screen h-full z-50 flex justify-center items-center">
              <Loader />
            </div>
          )}
          <Header />
          <div className="grow">
            <Component {...pageProps} />
            <Navbar />
          </div>
        </main>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
