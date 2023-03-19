import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardPromo from '../../components/CardPromo';
import CardProduct from '../../components/CardProduct'

export class Products extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className="lg:flex">
            {/* <!-- section left --> */}
            <div className="container-bigCard px-8 border-r-2 border-solid border-[#d4d4d4] lg:px-12">
              <section className="bigCard py-8 mb-12">
                <div className="bigCard-center">
                  <h1 className="text-center text-brown-cs text-3xl font-bold mb-6">
                    Promo Today
                  </h1>
                  <p className="text-center mb-12">
                    Coupons will be updated every weeks. <br /> check them out!
                  </p>
                  <div className="w-full flex flex-col">
                    <div className="flex flex-col text-black gap-8 mb-12 md:w-[70%] md:self-center md:gap-12 lg:w-[120%]">
                      <CardPromo
                        title="HAPPY MOTHER’S DAY!"
                        desc="Get one of our favorite menu for free!"
                        bg="bg-[#88B788]"
                      />
                      <CardPromo
                        title="HAPPY MOTHER’S DAY!"
                        desc="Get one of our favorite menu for free!"
                        bg="bg-[#F5C361]"
                      />
                      <CardPromo
                        title="HAPPY MOTHER’S DAY!"
                        desc="Get one of our favorite menu for free!"
                        bg="bg-[#88B788]"
                      />
                      <CardPromo
                        title="HAPPY MOTHER’S DAY!"
                        desc="Get one of our favorite menu for free!"
                        bg="bg-[#C59378]"
                      />
                    </div>
                    <div className="w-full flex justify-center mt-4">
                      <button className="py-4 px-8 bg-brown-cs text-white self-center w-[100%] font-bold text-lg rounded-xl mb-16 md:w-[70%] lg:w-[100%]">
                        Apply Coupon
                      </button>
                    </div>
                    <div className="px-6 md:px-8 lg:px-0">
                      <h3 className="font-bold text-grey-custom text-lg">
                        Terms and Condition
                      </h3>
                      <ol className="text-grey-custom lg:px-0">
                        <li>1. You can only apply 1 coupon per day</li>
                        <li>2. it only for dine in</li>
                        <li>3. Buy 1 get 1 only for new user</li>
                        <li>4. Should make member card to apply coupon</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <hr className="hidden lg:block" />
            {/* <!-- section right --> */}
            <div className="container-product px-6 md:px-8 lg:px-4">
              <section className="product">
                <nav className="promoNav mb-28">
                  <div className="flex justify-center lg:hidden">
                    <select
                      name="menu-favorite"
                      id=""
                      className="border-b-2 border-solid border-brown-cs cursor-pointer font-semibold text-brown-cs">
                      <option value="">Favorite & Promo</option>
                      <option value="">Coffe</option>
                      <option value="">Non Coffe</option>
                      <option value="">Foods</option>
                      <option value="">Add-on</option>
                    </select>
                  </div>
                  <ul className="hidden lg:flex lg:justify-around lg:pt-8 lg:text-[#9F9F9F]">
                    <li className="">Favorite & Promo</li>
                    <li>Coffee</li>
                    <li>Non Coffee</li>
                    <li>Foods</li>
                    <li>Add-on</li>
                  </ul>
                </nav>
                <div className="grid grid-cols-2 mb-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:gap-0">
                  <CardProduct
                    name="Veggie tomato mix"
                    price="IDR 34.000"
                    discount="10%"
                  />
                  <CardProduct
                    name="Hazelnut Latte"
                    price="IDR 25.000"
                    discount={null}
                  />
                  <CardProduct
                    name="Summer fried rice"
                    price="IDR 32.000"
                    discount="13%"
                  />
                  <CardProduct
                    name="Creamy Ice Latte"
                    price="IDR 27.000"
                    discount={null}
                  />
                  <CardProduct
                    name="Drum Sticks"
                    price="IDR 30.000"
                    discount="20%"
                  />
                  <CardProduct
                    name="Salty Rice"
                    price="IDR 25.000"
                    discount={null}
                  />
                  <CardProduct
                    name="Hazelnut Latte"
                    price="IDR 20.000"
                    discount={null}
                  />
                </div>
                <p className="text-brown-cs font-semibold mb-12 pl-2">
                  *the price has been cutted by discount appears
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Products