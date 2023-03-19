import React, { Component } from 'react'
import Footer from '../../components/Footer/'

class Forgot extends Component {
  render() {
    return (
      <>
        <main>
          <div className="bg-forgot min-h-screen text-white bg-cover bg-center bg-no-repeat">
            <section className="bg-[rgba(0,0,0,.5)] h-screen">
              <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-2">Forgot your password?</h1>
                <p className="text-xl font-semibold mb-12">
                  Don&apos;t worry, we got your back!
                </p>
                <div className="flex gap-7 mb-12 w-full px-8 md:w-[75%] lg:w-[60%]">
                  <input
                    type="text"
                    className="py-4 px-8 rounded-xl flex-1"
                    placeholder="Enter your email adress to get link"
                    id="email"
                  />
                  <button className="py-4 px-8 bg-btn-yellow font-bold text-brown-cs rounded-xl" id="btn-send">
                    Send
                  </button>
                </div>
                <p className="error" id="email-error"></p>
                <p className="text-center font-bold mb-8">
                  Click here if you didn&apos;t receive any link
                  <br /> in 2 minutes
                </p>
                <button className="py-4 px-12 bg-brown-cs w-[60%] rounded-xl font-bold mb-4 md:w-[40%] lg:w-[30%] btn text-white border-none hover:bg-orange-800">Resend Link</button>
                <p className="text-xl font-bold">01:54</p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Forgot