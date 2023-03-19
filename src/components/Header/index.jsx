import React, { Component } from 'react'
import Logo from '../../assets/Logo/logo-coffe.svg'


export class Header extends Component {
  state = {
    isNavOpen: false,
  };

  toggleSidebar = () => {
    console.log('msok')
    if(this.state.isNavOpen === false) {
      this.setState({
        isNavOpen: true
      })
      return;
    }
    this.setState({
      isNavOpen: false
    })
  };

  render() {
    return (
      <>
        <header className="sticky top-0 bg-white border-b-2 border-solid z-50 font-rubik px-6 md:px-8 lg:px-20">
          <div className="flex py-4 lg:py-6">
            <section className="flex-1">
              <div className="flex flex-1 content-center text-center gap-2">
                <img src={Logo} alt="logo-coffe" />
                <h1 className="font-bold pt-1 text-dark-blue-cs text-xl lg:text-2xl">
                  Coffe Shop
                </h1>
              </div>
            </section>
            <div className="flex-1 flex justify-end lg:hidden">
              <label className=" btn-circle swap swap-rotate">
                <input type="checkbox" onClick={this.toggleSidebar} />
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
            <nav className="flex-1 hidden lg:flex lg:w-full">
              <ul className="flex gap-4 items-center justify-evenly w-full font-bold text-dark-blue-cs">
                <li>
                  <a href="" className="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="">Product</a>
                </li>
                <li>Your Cart</li>
                <li className="text-amber-700 cursor-pointer">History</li>
              </ul>
            </nav>
            <section className="flex-1 hidden lg:block">
              <div className="flex gap-12 justify-end items-center">
                <a className="" href="../Login/index.html">
                  Login
                </a>
                <button className="py-2 px-6 bg-btn-yellow text-brown-cs rounded-xl font-semibold">
                  <a href="./SignUp/index.html">SignUp</a>
                </button>
              </div>
            </section>
          </div>
        </header>

        {this.state.isNavOpen ? (
          <div
            className="h-screen w-screen fixed bg-[rgba(0,0,0,.6)] top-[80px] text-white py-12 z-20 lg:hidden"
            id="hidden-nav">
            <nav className="navLink-hidden">
              <ul className="flex justify-center flex-col items-center gap-4 font-bold text-xl">
                <li>Home</li>
                <li>
                  <a href="./ProductCust/index.html">Product</a>
                </li>
                <li>Your Cart</li>
                <li>
                  <a href="../HistoryCust/index.html">History</a>
                </li>
              </ul>
            </nav>
            <section>
              <div className="flex items-center justify-center mt-12 gap-28 font-bold text-xl">
                <a className="" href="../Login/index.html">
                  Login
                </a>
                <button className="py-2 px-6 bg-btn-yellow text-brown-cs rounded-xl font-semibold">
                  <a href="./SignUp/index.html">SignUp</a>
                </button>
              </div>
            </section>
          </div>
        ) : (
          false
        )}
      </>
    );
  }
}

export default Header