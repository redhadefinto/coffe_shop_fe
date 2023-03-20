import React, { Component } from 'react'
import iconCeklis from "../../assets/Home/icon/icon-ceklis-nobg.svg";


class CardHome extends Component {
  render() {
    return (
      <div
        className="w-[80%] m-auto rounded-xl mb-20"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}>
        <div className="card-header relative min-h-[50px] flex justify-center">
          <div className="bg-Hazelnut-Latte w-[100px] h-[100px] rounded-full bg-dark-blue-cs bg-cover bg-center absolute top-[-120%]"></div>
        </div>
        <div className="card-body">
          <h3 className="text-center font-bold text-dark-blue-cs text-2xl mb-8">
            Hazelnut Latte
          </h3>
          <div className="flex flex-col gap-4 mb-12">
            <div className="flex gap-2">
              <img
                src={iconCeklis}
                alt="icon-ceklis"
                width="20px"
                height="auto"
              />
              <p className="description-card">HazelnutSyrup</p>
            </div>
            <div className="flex gap-2">
              <img
                src={iconCeklis}
                alt="icon-ceklis"
                width="20px"
                height="auto"
              />
              <p className="description-card">Wanilla Whipped Cream</p>
            </div>
            <div className="flex gap-2">
              <img
                src={iconCeklis}
                alt="icon-ceklis"
                width="20px"
                height="auto"
              />
              <p className="description-card">Ice / Hot</p>
            </div>
            <div className="flex gap-2">
              <img
                src={iconCeklis}
                alt="icon-ceklis"
                width="20px"
                height="auto"
              />
              <p className="description-card">Sliced Banana on Top</p>
            </div>
            <div className="flex gap-2">
              <img
                src={iconCeklis}
                alt="icon-ceklis"
                width="20px"
                height="auto"
              />
              <p className="description-card">Sliced Banana on Top</p>
            </div>
            <div className="flex gap-2">
              <img
                src={iconCeklis}
                alt="icon-ceklis"
                width="20px"
                height="auto"
              />
              <p className="description-card">Sliced Banana on Top</p>
            </div>
          </div>
        </div>
        <div className="card-footer flex flex-col justify-center items-center gap-4 mb-12">
          <h3 className="price-card text-2xl font-bold text-dark-blue-cs text-center">
            IDR 25.000
          </h3>
          <button className="px-8 py-2 bg-white border-2 border-solid border-yellow-500 pointer rounded-xl text-brown-cs font-semibold w-[50%] md:w-[70%]">
            Order Now
          </button>
        </div>
      </div>
    );
  }
}

export default CardHome