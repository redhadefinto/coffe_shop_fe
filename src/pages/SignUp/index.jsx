import React, { useEffect, useMemo, useState } from "react";
import Footer from "../../components/Footer";
// import Header from '../../components/Header';
import background from "../../assets/login/background.webp";
import logo from "../../assets/Logo/logo-coffe.svg";
import google from "../../assets/Medsos/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../utils/https/auth";
import Loaders from "../../components/Loaders";
// import { parseInt } from 'lodash';

function SignUp() {
  const controller = useMemo(() => new AbortController(), []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState();
  const [form, setForm] = useState({
    email: "",
    password: "",
    phone_number: "",
  });

  const onChangeForm = (event) => {
    setForm((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  };

  const registerHandler = (event) => {
    event.preventDefault();
    console.log(form);
    if (form.email === "" || form.password === "" || form.phone_number === "") {
      setError(true);
      setMsgError(`Input can't be empty`);
      return;
    }
    setIsLoading(true);
    console.log(form);
    // parseInt(form.phone_number)
    // parseInt(form.phone_number)
    register(form.email, form.password, form.phone_number, controller)
      .then(() => {
        setIsLoading(false);
        // console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  return (
    <>
      <main className="font-rubik min-h-screen w-full">
        {isLoading && (
          <div className="fixed top-0 right-0 w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,.5)]">
            <Loaders />
          </div>
        )}
        <div className="lg:flex lg:flex-wrap">
          <section className="hidden lg:block lg:flex-[9] lg:bg-cover bg-center lg:bg-white">
            <img src={background} alt="background-benner" />
          </section>
          <section className="bg-login bg-cover bg-no-repeat lg:flex-[10] lg:bg-none lg:bg-white">
            <div className="bg-[rgba(0,0,0,.5)] min-h-[100vh] py-8 pb-16 lg:bg-white">
              <div className="flex text-white font-bold lg:text-dark-blue-cs">
                <div className="logo flex-1 flex items-center">
                  <Link
                    className="flex items-center pl-8 gap-1 w-max md:pl-12 "
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
                    to="/login">
                    Login
                  </Link>
                </div>
              </div>
              <div className="form text-white flex flex-col items-center py-8 gap-4 lg:text-grey-custom">
                <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
                <form className="w-full px-12 md:flex md:flex-col md:w-[70%] lg:w-[80%]">
                  <p className="mb-2 font-semi text-start">Email Adress : </p>
                  <input
                    type="text"
                    placeholder="Enter your email adress"
                    className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom"
                    id="login"
                    name="email"
                    defaultValue={form.email}
                    onChange={onChangeForm}
                  />
                  <p className="error mb-8 mt-4" id="email-error"></p>
                  <p className="mb-2 font-semibold">Password : </p>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom"
                    id="password"
                    defaultValue={form.password}
                    onChange={onChangeForm}
                  />
                  <p className="mt-4 mb-8" id="password-error"></p>
                  <p className="mb-2 font-semibold">Phone Number : </p>
                  <input
                    type="number"
                    placeholder="Enter your password"
                    className="w-full px-4 py-4 rounded-lg font-bold text-black bg-[rgba(255,255,255,.7)] lg:border-2 lg:border-solid lg:border-grey-custom"
                    // id="password"
                    name="phone_number"
                    defaultValue={form.phone_number}
                    onChange={onChangeForm}
                  />
                  {error && (
                    <p className="font-bold text-2xl my-4 bg-red-700">
                      {msgError}
                    </p>
                  )}
                  <button
                    className="bg-btn-yellow mt-8 text-brown-cs mb-4 font-bold w-full py-3 text-xl px-8 rounded-2xl hover:cursor-pointer hover:bg-[#a18818] hover:text-white"
                    onClick={registerHandler}>
                    Sign Up
                  </button>
                </form>
                {/* <br /> */}
                <button
                  className="flex bg-white text-black py-3 px-8 w-[80%] rounded-2xl justify-center items-center gap-4 md:w-[58%] lg:w-[68%]"
                  style={{ boxShadow: "0px 6px 20px 0px #C4C4C4AB" }}>
                  <img src={google} alt="" />
                  <a href="" className="font-bold text-lg">
                    Sign Up with Google
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
            <button className="py-3 px-4 bg-btn-yellow rounded-lg text-brown-cs font-bold hover:bg-[#a18818] hover:text-white">
              Create Now
            </button>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignUp;
