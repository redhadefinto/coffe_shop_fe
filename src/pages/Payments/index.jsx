import React, { Component, Fragment } from "react";
import HeaderBase from "../../components/HeaderBase";
import Footer from "../../components/Footer";
import img1 from "../../assets/Products/Coffelatte.webp";
import img2 from "../../assets/Products/ayambakar.png";
import truck from "../../assets/Payment/truck.svg";
import bank from "../../assets/Payment/bank.svg";
import card from "../../assets/Payment/card.svg";

class Payment extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBase />
        <main>
          <section>
            <div className="bg-payment bg-cover bg-center  px-5 pt-10 py-40 md:px-20 lg:px-28 xl:px-32">
              <h1 className="text-white text-2xl lg:text-4xl font-bold">
                Checkout your <br /> item now!
              </h1>
              <div className="mt-10 lg:flex lg:justify-between">
                <div className="px-8 py-20 lg:w-2/5 lg:h-3/5 bg-white rounded-xl">
                  <h2 className="text-center text-4xl mb-14 font-bold lg:text-4xl">
                    Order Summary
                  </h2>
                  <div className="flex flex-col gap-3 border-b ">
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 md:w-16 md:h-16 relative bg-primary rounded-lg">
                          <img
                            src={img1}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <p>Hazelnut Latte</p>
                          <p>x 1</p>
                          <p>Regular</p>
                        </div>
                      </div>
                      <div>
                        <p>IDR 24.0</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-lg">
                          <img
                            src={img2}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p>Chicken Fire Wings</p>
                          <p>x 2</p>
                        </div>
                      </div>
                      <div>
                        <p>IDR 30.0</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <p>SUBTOTAL</p>
                      <p>IDR 120.000</p>
                    </div>
                    <div className="flex justify-between">
                      <p>TAX & FEES</p>
                      <p>IDR 20.000</p>
                    </div>
                    <div className="flex justify-between">
                      <p>SHIPPING</p>
                      <p>IDR 10.000</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <p>TOTAL</p>
                    <p>IDR 150.000</p>
                  </div>
                </div>
                <div className="flex flex-col gap-12 mt-10 lg:mt-0 lg:gap-6">
                  <div>
                    <div className="flex justify-between text-white font-bold mb-6">
                      <p>Address details</p>
                      <p className=" cursor-pointer">edit</p>
                    </div>
                    <div className="bg-white px-8 py-8 rounded-2xl">
                      <p className="pb-2">Delivery to Iskandar Street</p>
                      <p className="border-t border-b py-2">
                        Km 5 refinery road oppsite re public road, effurun,
                        Jakarta
                      </p>
                      <p className="pt-2">+62 81348287878</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-6">Payment method</p>
                    <div className="px-8 py-8 bg-white rounded-2xl">
                      <div className="flex items-center gap-4 pb-2">
                        <input type="radio" name="payments" />
                        <div className="w-10 h-10 bg-[#F47B0A] rounded-lg flex items-center justify-center">
                          <img src={card} />
                        </div>
                        <p>Card</p>
                      </div>
                      <div className="flex items-center gap-4 border-t border-b py-2">
                        <input type="radio" name="payments" />
                        <div className="w-10 h-10 bg-brown-cs rounded-lg flex items-center justify-center">
                          <img src={bank} />
                        </div>
                        <p>Bank account</p>
                      </div>
                      <div className="flex items-center gap-4 pt-2">
                        <input type="radio" name="payments" />
                        <div className="w-10 h-10 bg-[#FFBA33] rounded-lg flex items-center justify-center">
                          <img src={truck} />
                        </div>
                        <p>Cash on delivery</p>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center justify-center bg-brown-cs font-bold text-white rounded-3xl py-5">
                    <p>Confirm and Pay</p>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Payment;
