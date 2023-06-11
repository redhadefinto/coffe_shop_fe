/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Logo from "../../assets/Logo/logo-coffe.svg";
import { Link } from "react-router-dom";
// import { get } from "../../utils/localStorage";
import searchIcon from "../../assets/Header/search.svg";
import iconChat from "../../assets/Header/chat.svg";
// import profile from "../../assets/Header/profile.svg";
import { useSelector } from "react-redux";
import Loaders from "../Loaders";

function HeaderBase({ searchValue, title }) {
  const [search, setSearch] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const token = useSelector((state) => state.auth.data.token);
  const cartState = useSelector((state) => state.cart.shoppingCart.length);
  // console.log(cartState.length)
  const dataProfileImage = useSelector((state) => state.profile.data.data);
  const toggleSidebar = () => {
    navOpen == false ? setNavOpen(true) : setNavOpen(false);
  };
  const handleSearch = () => {
    searchValue(search);
  };
  const handleSeacrhValue = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <header className="sticky top-0 bg-white border-b-2 border-solid z-50 font-rubik px-6 md:px-8 lg:px-20">
        <div className="flex py-4 lg:py-6">
          <section className="flex-1">
            <div>
              <Link
                className="flex flex-1 content-center text-center gap-2 w-max"
                to="/">
                <img src={Logo} alt="logo-coffe" />
                <h1 className="font-bold pt-1 text-dark-blue-cs text-xl lg:text-2xl">
                  Coffe Shop
                </h1>
              </Link>
            </div>
          </section>
          <div className="flex-1 flex justify-end lg:hidden">
            <label className=" btn-circle swap swap-rotate">
              <input type="checkbox" onClick={toggleSidebar} />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <nav className="flex-[2] hidden lg:flex">
            <ul className="flex gap-8 items-center justify-center w-full font-bold text-dark-blue-cs xl:gap-12">
              <li>
                <Link
                  to="/"
                  className={
                    title === "home"
                      ? "text-brown-cs font-bold"
                      : "text-grey-custom"
                  }>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products?page=1&limit=8"
                  className={
                    title === "product"
                      ? "text-brown-cs font-bold"
                      : "text-grey-custom"
                  }>
                  Products
                </Link>
              </li>
              <div className="relative">
                {token ? (
                  <>
                    <Link
                      to="/payments"
                      className={
                        title === "cart"
                          ? "text-brown-cs font-bold"
                          : "text-grey-custom"
                      }>
                      Your Cart
                    </Link>
                    <p className="absolute bg-brown-cs rounded-full w-[20px] h-[20px] flex justify-center items-center top-[-40%] right-[-30%] text-white">
                      {cartState}
                    </p>
                  </>
                ) : (
                  <Link
                    to="/payments"
                    className={
                      title === "cart"
                        ? "text-brown-cs font-bold"
                        : "text-grey-custom"
                    }>
                    Your Cart
                  </Link>
                )}
              </div>
              <li>
                <Link
                  to="/history"
                  className={
                    title === "history"
                      ? "text-brown-cs font-bold"
                      : "text-grey-custom"
                  }>
                  History
                </Link>
              </li>
            </ul>
          </nav>
          {token ? (
            <section className="flex-[2] hidden lg:block">
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center h-full bg-[#EFEEEE] w-[60%] py-2 px-4 rounded-xl gap-4">
                  <button onClick={handleSearch}>
                    <img src={searchIcon} alt="" />
                  </button>
                  <label htmlFor="">
                    <input
                      type="search"
                      placeholder="search"
                      className="bg-[#EFEEEE] active:border-none focus:border-none focus:outline-none w-full"
                      value={search}
                      onChange={handleSeacrhValue}
                    />
                  </label>
                </div>
                <div className="relative">
                  <img src={iconChat} alt="" />
                  <p className="absolute bg-brown-cs rounded-full w-[20px] h-[20px] flex justify-center items-center top-[-40%] right-[70%] text-white">
                    1
                  </p>
                </div>
                {!dataProfileImage ? (
                  <Loaders />
                ) : (
                  (() => {
                    const profileImage = dataProfileImage[0].image;
                    return (
                      <Link to="/profile">
                        <img
                          src={profileImage}
                          alt=""
                          className="rounded-full"
                          width={50}
                        />
                      </Link>
                    );
                  })()
                )}
              </div>
            </section>
          ) : (
            <section className="flex-1 hidden lg:block">
              <div className="flex gap-12 justify-end items-center font-bold">
                <Link to="/login" className="text-dark-blue-cs">
                  Login
                </Link>
                <button className="py-2 px-6 bg-btn-yellow text-brown-cs rounded-xl font-semibold">
                  <Link to="/signUp" className="w-full h-full block">
                    Sign Up
                  </Link>
                </button>
              </div>
            </section>
          )}
        </div>
      </header>

      {navOpen ? (
        token ? (
          <div
            className="h-screen w-screen fixed bg-[rgba(0,0,0,.6)] top-[80px] text-white py-12 z-20 lg:hidden"
            id="hidden-nav">
            <nav className="navLink-hidden">
              <ul className="flex justify-center flex-col items-center gap-4 font-bold text-xl">
                <Link to="/">Home</Link>
                <Link to="/products?page=1&limit=8">Product</Link>
                <Link to="/payments">Your Cart</Link>
                <Link to="/history">History</Link>
              </ul>
            </nav>
            <section>
              <div className="flex justify-between items-center flex-col gap-12 mt-8">
                <div className="flex justify-center items-center h-full bg-[#EFEEEE] w-[60%] py-2 px-4 rounded-xl gap-4">
                  <img src={searchIcon} alt="" />
                  <label htmlFor="">
                    <input
                      type="search"
                      placeholder="search"
                      className="bg-[#EFEEEE] active:border-none focus:border-none focus:outline-none w-[100%] text-dark-blue-cs"
                    />
                  </label>
                </div>
                <div className="flex gap-12">
                  <div className="relative">
                    <img src={iconChat} alt="" />
                    <p className="absolute bg-brown-cs rounded-full w-[20px] h-[20px] flex justify-center items-center top-[-40%] right-[70%] text-white">
                      1
                    </p>
                  </div>
                  {!dataProfileImage ? (
                    <Loaders />
                  ) : (
                    (() => {
                      const profileImage = dataProfileImage[0].image;
                      return (
                        <Link to="/profile">
                          <img
                            src={profileImage}
                            alt=""
                            className="rounded-full"
                            width={40}
                          />
                        </Link>
                      );
                    })()
                  )}
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div
            className="h-screen w-screen fixed bg-[rgba(0,0,0,.6)] top-[80px] text-white py-12 z-20 lg:hidden"
            id="hidden-nav">
            <nav className="navLink-hidden">
              <ul className="flex justify-center flex-col items-center gap-4 font-bold text-xl">
                <Link to="/">Home</Link>
                <Link to="/products?page=1&limit=8">Product</Link>
                <Link to="/payments">Your Cart</Link>
                <Link to="/history">History</Link>
              </ul>
            </nav>
            <section>
              <div className="flex items-center justify-center mt-12 gap-28 font-bold text-xl">
                <Link to="/login" className="text-dark-blue-cs">
                  Login
                </Link>
                <button className="py-2 px-6 bg-btn-yellow text-brown-cs rounded-xl font-semibold">
                  <Link to="/signUp" className="w-full h-full block">
                    Sign Up
                  </Link>
                </button>
              </div>
            </section>
          </div>
        )
      ) : (
        false
      )}
    </>
  );
}

export default HeaderBase;
