import React from "react";
// import WithNavigate from "../../utils/wrapper/withNavigate";
// import { Link } from "react-router-dom";
import Veggie from "../../assets/Products/veg.png";
import HeaderBase from "../../components/HeaderBase";
import Footer from "../../components/Footer";

function History() {
  return (
    <>
      <HeaderBase />
      <main className="w-full h-full py-6 lg:px-12 lg:py-24 lg:gap-12 bg-history bg-cover bg-center">
        <section className="modal hidden" id="modal">
          <div className="modal-content" id="modal-content">
            <p className="items-center">
              Are you sure want to delete <br />
              the selected items?
            </p>
            <div className="button-modal">
              <button className="cancel" id="cancel">
                Cancel
              </button>
              <button className="ok" id="ok">
                Delete
              </button>
            </div>
          </div>
        </section>
        <div className="head flex flex-col gap-1 justify-center font-semibold items-center mb-20">
          <p className="text-white text-[20px] lg:text-[40px]">
            Let’s see what you have bought!
          </p>
          <p className="text-white text-[15px] lg:text-[20px]">
            Long press to delete item
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex rounded-[20px] p-4 gap-2 lg:w-full lg:p-1"
            id="card">
            <div className="mr-[16px] flex justify-center items-center">
              <div className="img-content">
                <img
                  className="w-[83px] h-[83px] object-contain rounded-full"
                  src={Veggie}
                  alt=""
                />
              </div>
            </div>
            <div className="text-card">
              <div className="text-[25px] font-bold font-[Poppins] text-dark-blue-cs">
                <p>Veggie tomato mix</p>
              </div>
              <div className="price text-[20px] text-brown-cs font-normal">
                <p>IDR 34.000</p>
              </div>
              <div className="deliver text-[20px] text-brown-cs font-normal">
                <p>Delivered 1</p>
              </div>
            </div>
            <div className="click-delete hidden">
              <div className="delete">
                <img src="/assets/delete.png" alt="" />
              </div>
              <div className="close">
                <p>&times;</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default History;
