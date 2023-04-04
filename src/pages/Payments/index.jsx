/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import HeaderBase from "../../components/HeaderBase";
import Footer from "../../components/Footer";
// import img1 from "../../assets/Products/Coffelatte.webp";
// import img2 from "../../assets/Products/ayambakar.png";
import truck from "../../assets/Payment/truck.svg";
import bank from "../../assets/Payment/bank.svg";
import card from "../../assets/Payment/card.svg";
import Loaders from "../../components/Loaders";
import CardPayment from "./cardPayment";
import { useDispatch, useSelector } from "react-redux";
import { transactionsActions } from "../../redux/slices/transactions";
import { parseInt } from "lodash";
import { cartActions } from "../../redux/slices/cart";
// import classNames from "classnames";
import centangHijau from '../../assets/Payment/centang-hijau-removebg-preview.png'
// import { historyActions } from "../../redux/slices/history";

function Payment () {
  const controller = new AbortController()
    const cartState = useSelector((state) => state.cart);
    const [isLoading, setIsLoading] = useState(false);
    const [notes, setNotes] = useState()
    const [payment, setPayment] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [succes, setSucces] = useState(false)
    const dataProfile = useSelector((state) => state.profile.data.data);
    const productsCart = useSelector((state) => state.cart)
    const delivery = useSelector((state) => state.cart.delivery)
    const token = useSelector((state) => state.auth.data.token);
    const dispatch = useDispatch()
    const [subtotal, setSubtotal] = useState(0)
    const onCart = cartState.shoppingCart;
    let subtotalOnCart = 0;
    useEffect(() => {
      document.title = "Payments"
      setIsLoading(true);
      cartState.shoppingCart.forEach((prod) => {
        subtotalOnCart += prod.subtotal;
      });
      setSubtotal(subtotalOnCart);
      setIsLoading(false);
    }, []);

    const taxFee = subtotal * 0.1;
    let shipping = 0;
    if(delivery === "Dine In") {
      shipping;
    }
    if(delivery === 'Door Delivery') {
      shipping = 5000
    }
    if(delivery === 'Pick Up') {
      shipping = 5000
    }
    const grandTotal = subtotal + taxFee + shipping;
    const handlePayment = (e) => {
      let value = e.target.value;
      if(value === "card") {
        value = 1
      }
      if(value === 'bank') {
        value = 2
      }
      if(value === 'cod') {
        value = 3
      }
      setPayment(value)
    }
    // console.log(token)
const handleTransactions = (e) => {
  e.preventDefault();
  let deliveryValue;
  if (delivery === "Dine In") {
    deliveryValue = 1;
  } else if (delivery === "Door Delivery") {
    deliveryValue = 2;
  } else if (delivery === "Pick Up") {
    deliveryValue = 3;
  }
  const products = productsCart.shoppingCart.map((prod) => ({
    product_id: parseInt(prod.id),
    size_id:
      prod.selectedSize === "Regular"
        ? 1
        : prod.selectedSize === "Large"
        ? 2
        : 3,
    quantity: prod.qty,
    subtotal: prod.subtotal,
  }));
  if (payment === undefined) {
    return;
  }
  const datas = {
    payment_id: payment,
    delivery_id: deliveryValue,
    promo_id: 1,
    notes,
    status_id: 1,
    products,
  };
  setIsLoading(true);
  dispatch(
    transactionsActions.createTransactionsThunk({ datas, token, controller })
  )
    .then(() => {
      dispatch(cartActions.resetCart());
      setSucces(true)
      subtotal(0)
      taxFee(0)
      shipping(0)
      grandTotal(0)
      delivery()
      // return;
      // console.log(res)
    })
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false));
};

    // console.log(address)
    // console.log(onCart)
    return (
      <>
        <HeaderBase />
        {isLoading ? (
          <div className="h-[100vh] w-full">
            <div className="flex items-center absolute justify-center h-full w-full z-20 bg-[rgba(0,0,0,.4)]">
              <Loaders />
            </div>
          </div>
        ) : (
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
                      {onCart.length < 1 || onCart == undefined ? (
                        <h1 className="text-center font-bold text-2xl text-brown-cs mb-14">
                          No products are stored in the cart.
                        </h1>
                        
                      ) : (
                        onCart.map((product) => (
                          <CardPayment
                            key={product.id}
                            img={product.img}
                            prodName={product.prodName}
                            size={product.selectedSize}
                            qty={product.qty}
                            subtotal={product.subtotal}
                          />
                        ))
                      )}
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between">
                        <p>SUBTOTAL</p>
                        {/* {console.log(subtotal)} */}
                        <p>IDR {subtotal.toLocaleString("id-ID")}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>TAX & FEES</p>
                        <p>IDR {taxFee.toLocaleString("id-ID")}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>SHIPPING</p>
                        <p>IDR {shipping.toLocaleString("id-ID")}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Delivery Methods</p>
                        <p>{delivery}</p>
                      </div>
                    </div>
                    <div className="flex justify-between mt-8 font-bold text-dark-blue-cs text-xl">
                      <p>TOTAL</p>
                      <p>IDR {grandTotal.toLocaleString("id-ID")}</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:w-[40%] gap-12 mt-10 lg:mt-0 lg:gap-6">
                    <div>
                      <div className="flex justify-between text-white font-bold mb-6">
                        <p>Address details</p>
                        <p className=" cursor-pointer">edit</p>
                      </div>
                      <div className="bg-white px-8 py-8 rounded-2xl">
                        <label
                          htmlFor="address"
                          className="mb-10 font-bold text-dark-blue-cs text-2xl">
                          Address
                        </label>
                        {!dataProfile ? (
                          <Loaders />
                        ) : (
                          <>
                            <textarea
                              className="pb-2 w-full border-b-2 border-solid border-grey-custom mt-4"
                              placeholder="Please enter your address"
                              id="address"
                              defaultValue={dataProfile[0].address}
                              onChange={(e) =>
                                setAddress(e.target.value)
                              }></textarea>
                            <label
                              htmlFor="phone"
                              className="mb-10 font-bold text-dark-blue-cs text-2xl">
                              Phone Number
                            </label>
                            <input
                              type="number"
                              className="pt-2 mb-4 mt-4 border-b-2 border-solid border-grey-custom w-full"
                              defaultValue={dataProfile[0].phone_number}
                              onChange={(e) => {
                                setPhone(e.target.value);
                              }}></input>
                            <label
                              htmlFor="notes"
                              className="mt-4 font-bold text-dark-blue-cs text-2xl">
                              Notes
                            </label>
                            <textarea
                              id="notes"
                              type="text"
                              className="pt-2 mt-4 border-b-2 border-solid border-grey-custom w-full"
                              placeholder="Please enter your note"
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold mb-6">
                        Payment method
                      </p>
                      <div className="px-8 py-8 bg-white rounded-2xl">
                        <div className="flex items-center gap-4 pb-2">
                          <input
                            type="radio"
                            name="payments"
                            value="card"
                            onChange={handlePayment}
                          />
                          <div className="w-10 h-10 bg-[#F47B0A] rounded-lg flex items-center justify-center">
                            <img src={card} />
                          </div>
                          <p>Card</p>
                        </div>
                        <div className="flex items-center gap-4 border-t border-b py-2">
                          <input
                            type="radio"
                            name="payments"
                            value="bank"
                            onChange={handlePayment}
                          />
                          <div className="w-10 h-10 bg-brown-cs rounded-lg flex items-center justify-center">
                            <img src={bank} />
                          </div>
                          <p>Bank account</p>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                          <input
                            type="radio"
                            name="payments"
                            value="cod"
                            onChange={handlePayment}
                          />
                          <div className="w-10 h-10 bg-[#FFBA33] rounded-lg flex items-center justify-center">
                            <img src={truck} />
                          </div>
                          <p>Cash on delivery</p>
                        </div>
                      </div>
                    </div>
                    <button
                      className="flex items-center justify-center bg-brown-cs font-bold text-white rounded-3xl py-5"
                      onClick={handleTransactions}>
                      <p>Confirm and Pay</p>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {succes ? (
              <div className="h-[233vh] lg:h-[168vh] w-full absolute top-0">
                <div className="h-full w-full bg-[rgba(0,0,0,.5)] flex justify-center items-center">
                  <div className="h-[300px] w-[400px] lg:h-[300px] lg:w-[500px] px-12 bg-white rounded-3xl flex place-content-center justify-center items-center mt-20 flex-col">
                    <img
                      src={centangHijau}
                      alt=""
                      className="mb-4"
                      width={100}
                    />
                    <p className="text-green-600 font-bold text-2xl">
                      Transactions Success
                    </p>
                    <button
                      className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold mt-8 hover:bg-green-400"
                      onClick={() => setSucces(false)}>
                      Done!
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              false
            )}
          </main>
        )}
        <Footer />
      </>
    );
}

export default Payment;
