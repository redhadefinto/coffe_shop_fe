import React, { useEffect, useMemo, useState } from "react";
import Footer from "../../components/Footer/";
import { forgot, getOtp } from "../../utils/https/auth";
import { useNavigate } from "react-router-dom";
import Loaders from "../../components/Loaders";

function Forgot() {
  const controller = useMemo(() => new AbortController(), []);

  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [form, setForm] = useState({
    code_otp: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onChange = (event) => {
    setEmail(event.target.value);
  };

  const emailSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(email);
    setIsLoading(true);
    getOtp(email, controller)
      .then((res) => {
        console.log(res.data);
        setTimeLeft(120);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    // console.log(timeLeft)
    document.title = "Forgot Password ?";
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const inputOtpCode = (event) => {
    setForm((form) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };
  const otpSubmitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    forgot(email, form.code_otp, form.password, controller)
      .then((res) => {
        console.log(res);
        setTimeLeft(0);
        navigate("/login");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <main>
        {isLoading && (
          <div className="fixed top-0 right-0 w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,.5)]">
            <Loaders />
          </div>
        )}
        <div className="bg-forgot min-h-screen text-white bg-cover bg-center bg-no-repeat">
          <section className="bg-[rgba(0,0,0,.5)] h-screen">
            <div className="h-screen flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold mb-2">Forgot your password?</h1>
              <p className="text-xl font-semibold mb-12">
                Don&apos;t worry, we got your back!
              </p>
              {timeLeft < 120 && timeLeft > 0 ? (
                <form className="flex gap-7 mb-12 w-full px-8 md:w-[75%] lg:w-[60%]">
                  <input
                    type="text"
                    className="py-4 px-8 rounded-xl flex-1 text-black"
                    id="otp"
                    name="code_otp"
                    onChange={inputOtpCode}
                    placeholder="Enter your OTP code..."
                    value={form.code_otp}
                  />
                  <input
                    className="py-4 px-8 rounded-xl flex-1 text-black"
                    type="password"
                    id="password"
                    name="password"
                    onChange={inputOtpCode}
                    placeholder="Enter your New Password..."
                  />
                  <button
                    className="py-4 px-8 bg-btn-yellow font-bold text-brown-cs rounded-xl"
                    id="btn-send"
                    onClick={otpSubmitHandler}>
                    Send
                  </button>
                </form>
              ) : (
                <form className="flex gap-7 mb-12 w-full px-8 md:w-[75%] lg:w-[60%]">
                  <input
                    type="text"
                    className="py-4 px-8 rounded-xl flex-1 text-black"
                    placeholder="Enter your email adress to get link"
                    id="email"
                    value={email}
                    onChange={onChange}
                  />
                  <button
                    className="py-4 px-8 bg-btn-yellow font-bold text-brown-cs rounded-xl"
                    id="btn-send"
                    onClick={emailSubmitHandler}>
                    Send
                  </button>
                </form>
              )}
              <p className="error" id="email-error"></p>
              <p className="text-center font-bold mb-8">
                Click here if you didn&apos;t receive any link
                <br /> in 2 minutes
              </p>
              <button
                className="py-4 px-12 bg-brown-cs w-[60%] rounded-xl font-bold mb-4 md:w-[40%] lg:w-[30%] text-white border-none hover:bg-orange-800"
                onClick={emailSubmitHandler}>
                Resend Link
              </button>
              <p className="text-xl font-bold">{`${minutes} : ${seconds}`}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Forgot;
