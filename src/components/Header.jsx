import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { Logo } from "../assets/index";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import Home from "./HeadingMenu/Home";
import { WavyLink } from "react-wavy-transitions";







const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {

    if (!user) {
      const {
        user: { providerData },

      } = await signInWithPopup(firebaseAuth, provider);
      console.log(providerData)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-0 px-4 md:p-6 md:px-8 mx-auto  py-0 md:py-1 shadow-2xl bg-slate-100 ">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-self-stretch">
        <div className="hidden md:flex w-full h-full items-center justify-between">
          <Link to={'/'} className="flex items-center gap-2">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Logo} className=" h-[50px] object-cover " alt="logo" />
            <p className="text-headingColor text-xl font-bold"> BrrrGerrr</p>
          </Link>



          <div className="flex items-center  gap-8">
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}

              className="flex items-center md:gap-10 ml-auto justify-between relative md:pl-20  md:justify-end "
            >
              <WavyLink to={"/Home"} color="#FB8C00" >   <motion.li
                whileTap={{ scale: 0.6 }}
                className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                onClick={Home}
              >
                Home
              </motion.li>
              </WavyLink>

              <WavyLink to={"/Menu"} direction="up" color="#AF0171" >
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Menu
                </motion.li>
              </WavyLink>
              <WavyLink to={"/Aboutus"} color="#FFFF00">
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  About
                </motion.li>
              </WavyLink>
              <WavyLink to={"/Service"} direction="up" color="#FB8C00" >
                <motion.li
                  whileTap={{ scale: 0.6 }}
                  className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Service
                </motion.li>
              </WavyLink>
            </motion.ul>




            {/* cart and profile */}
            <div className="bg-bla flex items-center  gap-10 justify-between">

              {/* cart */}
              <motion.div
                whileTap={{ scale: 0.6 }}
                className="relative flex items-center justify-center "
                onClick={showCart}
              >
                <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
                {cartItems && cartItems.length > 0 && (
                  <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">
                      {cartItems.length}
                    </p>
                  </div>
                )}
              </motion.div>
              {/* profile */}

              <div className="relative">
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={user ? user.photoURL : Avatar}
                  className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                  alt="userprofile"
                  onClick={login}
                />
                {isMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                  >
                    {user && user.email === "vartikkanand@gmail.com" && (
                      <Link to={"/createItem"}>
                        <p
                          className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                        // onClick={() => setIsMenu(false)}
                        >
                          Add Items <MdAdd />
                        </p>
                      </Link>
                    )}

                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={logout}
                    >
                      Brrrgurr Out <MdLogout />
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> BrrrGerrr</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "vartikkanand@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
