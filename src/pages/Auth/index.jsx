import React from 'react'
import Footer from '../../components/Footer'

import background from "../../assets/login/background.webp";
import logo from "../../assets/Logo/logo-coffe.svg";
import google from "../../assets/Medsos/google.svg";
import { Link } from "react-router-dom";

function Regist () {
  return (
    <>
      <form className="w-full px-12 md:flex md:flex-col md:w-[70%] lg:w-[80%]">
        <p className="mb-2 font-semi text-start">Email Adress : </p>
        <input
          type="text"
          placeholder="Enter your email adress"
          className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom"
          id="login"
        />
        <p className="error mb-8 mt-4" id="email-error"></p>
        <p className="mb-2 font-semibold">Password : </p>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom"
          id="password"
        />
        <p className="mt-4 mb-8" id="password-error"></p>
        <p className="mb-2 font-semibold">Phone Number : </p>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom"
          id="password"
        />
        <p className="mt-4 mb-8" id="password-error"></p>
        <Link
          className="bg-btn-yellow text-brown-cs mb-4 font-bold w-full py-3 text-xl px-8 rounded-2xl hover:cursor-pointer hover:bg-[#a18818] hover:text-white"
          to="login">
          Login
        </Link>
      </form>
    </>
  );
}

function Login () {
  return (
    <>
      <form className="w-full px-12 md:flex md:flex-col md:w-[70%] lg:w-[80%]">
        <p className="mb-2 font-semi text-start">Email Adress : </p>
        <input
          type="text"
          placeholder="Enter your email adress"
          className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom"
          id="login"
        />
        <p className="error mb-8 mt-4" id="email-error"></p>
        <p className="mb-2 font-semibold">Password : </p>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom"
          id="password"
        />
        <p className="mb-4 mt-4" id="password-error"></p>
        <Link to="/forgot" className="block mb-8 lg:text-brown-cs lg:font-bold">
          Forgot password?
        </Link>
        <button
          className="bg-btn-yellow text-brown-cs mb-4 font-bold w-full py-3 text-xl px-8 rounded-2xl hover:cursor-pointer hover:bg-[#a18818] hover:text-white"
          id="btn-login"
          onClick={() =>
            this.login(this.state.email, this.state.password, this.controller)
              .then((data) => console.log(data))
              .catch((err) => console.log(err))
          }>
          <a>Login</a>
        </button>
      </form>
    </>
  );
}

export default function Auth() {
  return (
    <>
      <main>
        <div className="lg:flex lg:flex-wrap">
          <section className="hidden lg:block lg:flex-[2] lg:bg-cover">
            <img src={background} alt="background-benner" height="120vh" />
          </section>
          <section className="bg-login bg-cover bg-no-repeat lg:flex-[3] lg:bg-none lg:bg-white">
            <div className="bg-[rgba(0,0,0,.5)] min-h-[100vh] py-8 pb-16 lg:bg-white">
              <div className="flex text-white font-bold lg:text-dark-blue-cs">
                <div className="logo flex-1 flex items-center pl-8 gap-1 md:pl-12">
                  <img src={logo} alt="logo" />
                  <h1 className="logo-title text-xl md:text-2xl">Coffe Shop</h1>
                </div>
                <div className="flex-1 justify-end flex pr-8 py-4 md:pr-12">
                  <Link
                    className="bg-btn-yellow text-brown-cs py-2 px-8 rounded-2xl hover:cursor-pointer hover:bg-brown-cs hover:text-white"
                    to="/signUp">
                    Sing Up
                  </Link>
                </div>
              </div>
              <div className="form text-white flex flex-col items-center py-8 gap-4 lg:text-grey-custom">
                <h1 className="text-3xl font-bold mb-8">Login</h1>
                
                {/* <br /> */}
                <button
                  className="flex bg-white text-black py-3 px-8 w-[80%] rounded-2xl justify-center items-center gap-4 md:w-[58%] lg:w-[68%]"
                  style={{ boxShadow: "0px 6px 20px 0px #C4C4C4AB" }}>
                  <img src={google} alt="" />
                  <a href="" className="font-bold text-lg">
                    Login with Google
                  </a>
                </button>
              </div>
            </div>
          </section>
        </div>
        <section className="h-[10rem] lg:flex-[1]">
          <section
            className="relative flex justify-center items-center py-8 px-4 w-[80%] m-auto top-[-5rem] bg-white rounded-2xl gap-2 lg:py-12 lg:px-16 lg:w-[70%]"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.7) 0px 3px 7px -3px;",
            }}>
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="title card-title lg:text-2xl lg:font-bold lg:text-dark-blue-cs">
                Get your member <br /> card now!
              </h2>
              <p className="description card-description lg:text-grey-custom lg:font-semibold">
                lets join with our member and enjoy the deals.
              </p>
            </div>
            <button className="py-3 px-8 bg-btn-yellow rounded-lg text-brown-cs font-bold hover:bg-[#a18818] hover:text-white">
              Create Now
            </button>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
