import React, { Component } from 'react'
import Logo from "../../assets/Logo/logo-coffe.svg"
import facebook from "../../assets/Medsos/facebook.svg"
import twitter from "../../assets/Medsos/twitter.svg"
import instagram from "../../assets/Medsos/instagram.svg"


class Footer extends Component {
  render() {
    return (
      <footer className="min-h-[300px] bg-[#F8F8F8] lg:flex">
        <div className="flex content-center flex-col text-center place-items-center py-8 px-4 gap-4 flex-1 lg:content-start lg:place-content-start lg:text-start lg:px-0 lg:justify-start lg:items-start lg:pl-28">
          <div className="flex gap-2 items-center justify-center">
            <img src={Logo} alt="" />
            <p className="font-bold text-dark-blue-cs text-xl">Coffe Shop</p>
          </div>
          <p className="text-grey-custom font-semibold md:w-[60%] lg:w-[50%]">
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </p>
          <div className="flex gap-4 mt-4">
            <img
              src={facebook}
              alt=""
              className="cursor-pointer bg-[#6A4029] rounded-full h-12 hover:cursor-pointer hover:bg-white"
            />
            <img
              src={twitter}
              alt=""
              className="cursor-pointer bg-[#6A4029] rounded-full h-12 hover:cursor-pointer hover:bg-white"
            />
            <img
              src={instagram}
              alt=""
              className="cursor-pointer bg-[#6A4029] rounded-full h-12 hover:cursor-pointer hover:bg-white"
            />
          </div>
          <p className="mt-2">©2020CoffeeStore</p>
        </div>
        <div className="flex mb-8 flex-1 lg:py-8">
          <div className="flex-1 flex place-content-center">
            <ul className="flex flex-col gap-3 text-grey-custom">
              <li className="font-bold text-dark-blue-cs hover:cursor-pointer">
                Product
              </li>
              <li className="mt-3 hover:cursor-pointer">Download</li>
              <li className="hover:cursor-pointer">Pricing</li>
              <li className="hover:cursor-pointer">Locations</li>
              <li className="hover:cursor-pointer">Countries</li>
              <li className="hover:cursor-pointer">Blog</li>
            </ul>
          </div>
          <div className="flex-1 flex place-content-center">
            <ul className="flex flex-col gap-3 text-grey-custom">
              <li className="font-bold text-dark-blue-cs hover:cursor-pointer">
                Engage
              </li>
              <li className="mt-3 hover:cursor-pointer">Caffe Shop ?</li>
              <li className="hover:cursor-pointer">FAQ</li>
              <li className="hover:cursor-pointer">About Us</li>
              <li className="hover:cursor-pointer">Privacy Policy</li>
              <li className="hover:cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer