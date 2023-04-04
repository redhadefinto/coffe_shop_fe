import React, { useState } from 'react'
import Footer from '../../components/Footer';
// import Header from '../../components/Header';
import background from '../../assets/login/background.webp'
import logo from '../../assets/Logo/logo-coffe.svg'
import google from '../../assets/Medsos/google.svg'
import { Link, useNavigate } from "react-router-dom";
// import { login } from '../../utils/https/auth';
// import { save } from "../../utils/localStorage/index"
import { useEffect } from 'react';
import {  useDispatch } from "react-redux";
// import { counterAction } from "../../redux/slices/counter";
import { authAction } from "../../redux/slices/auth";
import Loaders from '../../components/Loaders';
// import { profileAction } from '../../redux/slices/profile';
// import jwt  from 'jsonwebtoken';
// import { isExpired, decodeToken } from "react-jwt";

function Login() {
  const controller = React.useMemo(() => new AbortController(), []);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  })
  const loginHandler = (e) => {
    e.preventDefault();
        if (form.email === "" || form.password === "") {
          setMsg("Input Empty !");
          setIsWrong(true);
          return;
        }
        setIsLoading(true)
      dispatch(
        authAction.getAuthThunk(
          { email: form.email, password: form.password },
          controller
        )
      ).then((result) => {
        if (result.payload.message === "Request failed with status code 401") {
          setIsLoading(false);
          setMsg("Email / Password is Invalid !");
          setIsWrong(true);
          setForm({ ...form, password: "" });
          return;
        }
        // console.log(result);
        if (result.payload && result.payload.token) {
          setIsLoading(false);
          navigate("/");
        }
      }).catch((err) => console.log(err)).finally(() => setIsLoading(false))
  };
  useEffect(() => {
    document.title = 'Login'
    return () => {
      controller.abort();
    };
  }, []);
  
  // const token = useSelector((state) => state.auth.data.token);
  const onChangeForm = (e) =>
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
    document.title = "Home";
    // console.log(data)
    return (
      <>
        <main>
          {isLoading && (
            <div className='absolute w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,.5)]'>
              <Loaders />
            </div>
          )}
          <div className="lg:flex lg:flex-wrap">
            <section className="hidden lg:block lg:flex-[2] lg:bg-cover">
              <img src={background} alt="background-benner" height="120vh" />
            </section>
            <section className="bg-login bg-cover bg-no-repeat lg:flex-[3] lg:bg-none lg:bg-white">
              <div className="bg-[rgba(0,0,0,.5)] min-h-[100vh] py-8 pb-16 lg:bg-white">
                <div className="flex text-white font-bold lg:text-dark-blue-cs">
                  <div className="logo flex-1 flex items-center">
                    <Link
                      className="flex items-center pl-8 gap-1 md:pl-12 w-max"
                      to="/">
                      <img src={logo} alt="logo" />
                      <h1 className="logo-title text-xl md:text-2xl">
                        Coffe Shop
                      </h1>
                    </Link>
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
                  <form className="w-full px-12 md:flex md:flex-col md:w-[70%] lg:w-[80%]">
                    <p className="mb-2 font-semi text-start">Email Adress : </p>
                    <input
                      type="text"
                      placeholder="Enter your email adress"
                      className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom mb-8"
                      name="email"
                      value={form.email}
                      onChange={onChangeForm}
                    />
                    <p className="mb-2 font-semibold">Password : </p>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom mb-8"
                      name="password"
                      value={form.password}
                      onChange={onChangeForm}
                    />
                    {isWrong && (
                      <p className='font-bold text-2xl text-red-700'>{msg}</p>
                    )}
                    <Link
                      to="/forgot"
                      className="block mb-8 lg:text-brown-cs lg:font-bold">
                      Forgot password?
                    </Link>
                    <button
                      className="bg-btn-yellow text-brown-cs mb-4 font-bold w-full py-3 text-xl px-8 rounded-2xl hover:cursor-pointer hover:bg-[#a18818] hover:text-white"
                      id="btn-login"
                      onClick={loginHandler}>
                      <a>Login</a>
                    </button>
                  </form>
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
                  "rgba(50, 50, 93, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.7) 0px 3px 7px -3px",
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

export default Login