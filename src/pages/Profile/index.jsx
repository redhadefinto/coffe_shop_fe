import React, { Component } from "react";
import Header from "../../components/HeaderBase";
import Footer from "../../components/Footer";
import picture from '../../assets/Header/profile.svg'
import iconPensil from '../../assets/Profile/iconPen.svg'
import '../../styles/Profile.css'
export class Profile extends Component {
  render() {
    return (
      <>
        <Header />

        <main className="bg-profile w-full h-auto flex justify-center">
          <div className="w-full mx-4 justify-center items-center flex flex-col md:w-full">
            <h1 className="font-medium text-4xl text-white py-10 lg:text-start">
              User Profile
            </h1>
            <form action="" className="md:w-[70%] md:mx-12 lg:w-full lg:px-20">
              <div className="flex gap-8 flex-col items-center px-8 lg:flex-row">
                <div className="w-full flex flex-col justify-between items-center rounded-2xl border overflow-hidden bg-white relative pb-12 border-b-[20px] border-solid border-brown-cs lg:w-[50%] lg:pt-12">
                  <button
                    className="w-8 h-8 flex justify-center items-center rounded-full bg-brown-cs cursor-pointer absolute top-[30%] right-[24%] bg-center bg-no-repeat md:right-[34%] lg:right-[23%] lg:top-[40%] xl:right-[30%]"
                    style={{
                      backgroundImage: `url('${iconPensil}')`,
                    }}></button>
                  <div
                    className={`w-32 h-32 rounded-full border-2 overflow-hidden mt-8 bg-center bg-cover`}
                    style={{ backgroundImage: `url('${picture}')` }}></div>
                  <h2 className="font-bold text-2xl mt-8">Zulaikha</h2>
                  <h3 className="text-base text-greydark mt-8">
                    zulaikha17@gmail.com
                  </h3>
                  <p className="text-center mt-4">
                    Has been ordered 15 products
                  </p>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border bg-white border-b-[20px] border-solid border-brown-cs md:w-full">
                  <div className="flex justify-between items-center pl-8 pr-5 mt-4 mx-4">
                    <h2 className="font-bold text-2xl text-greydark">
                      Contacts
                    </h2>
                    <button
                      className="w-12 h-12 flex justify-center items-center rounded-full bg-brown-cs cursor-pointer bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${iconPensil}')`,
                      }}></button>
                  </div>
                  <div className="grid grid-cols-1 gap-12 ml-8 mr-14 my-8 mb-24">
                    <div className="input bg-white flex flex-col">
                      <label
                        htmlFor="email"
                        className="font-medium text-xl text-grey bg-white">
                        Email adress :
                      </label>
                      <input
                        type="text"
                        id="email"
                        value={"zulaikha17@gmail.com"}
                        className="mt-2 min-h-12 border-b-2 border-solid border-black focus:outline-none"
                      />
                    </div>
                    <div className="input bg-white flex flex-col">
                      <label
                        htmlFor="phone"
                        className="font-medium text-xl text-grey">
                        Mobile number :
                      </label>
                      <input
                        type="text"
                        id="phone"
                        placeholder=""
                        value={"0813456782"}
                        className="mt-2 min-h-12 border-b-2 border-solid border-black focus:outline-none"
                      />
                    </div>
                    <div className="input bg-white flex flex-col">
                      <label
                        htmlFor="address"
                        className="font-medium text-xl text-grey">
                        Delivery address :
                      </label>
                      <textarea
                        rows="8"
                        cols="25"
                        className="min-h-16 border-b-2 border-solid border-black focus:outline-none mt-4">
                        Iskandar Street no. 67 Block A Near Bus Stop
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 my-10 px-8 justify-center items-center md:w-full lg:flex-row">
                <div className="pb-8 flex flex-col justify-between rounded-2xl border bg-white border-b-[20px] border-solid border-brown-cs md:w-full">
                  <div className="flex justify-between items-center pl-8 pr-5 mt-4 mb-8">
                    <h2 className="font-bold text-2xl text-greydark">
                      Details
                    </h2>
                    <button
                      className="w-12 h-12 flex justify-center items-center rounded-full bg-brown-cs cursor-pointer bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${iconPensil}')`,
                      }}></button>
                  </div>
                  <div className="flex ml-8 mr-14 gap-9 flex-col lg:flex-row">
                    <div className="flex flex-1 gap-12 flex-col">
                      <div className="input flex bg-white gap-2 flex-col">
                        <label
                          htmlFor="displayName"
                          className="font-medium text-xl text-grey">
                          Display Name :
                        </label>
                        <input
                          type="text"
                          id="displayName"
                          placeholder="zulaikha"
                          className="min-h-14 border-b-2 border-solid border-black focus:outline-none mt-2"
                        />
                      </div>
                      <div className="input flex bg-white gap-2 flex-col">
                        <label
                          htmlFor="firstName"
                          className="font-medium text-xl text-grey">
                          First Name :
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          placeholder="zulaikha"
                          className="min-h-14 border-b-2 border-solid border-black focus:outline-none mt-2"
                        />
                      </div>
                      <div className="input flex bg-white gap-2 flex-col">
                        <label
                          htmlFor="lastName"
                          className="font-medium text-xl text-grey">
                          Last Name :
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          placeholder="zulaikha"
                          className="min-h-14 border-b-2 border-solid border-black focus:outline-none mt-2"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col mt-4 md:w-full">
                      <div className="input flex bg-white gap-2 flex-col">
                        <label
                          htmlFor="birthDate"
                          className="font-medium text-xl text-grey">
                          DD/MM/YY
                        </label>
                        <input
                          type="date"
                          id="birthDate"
                          placeholder="zulaikha17@gmail.com"
                          className="min-h-12 border-b-2 border-solid border-black focus:outline-none mt-2"
                        />
                      </div>

                      <div className="choose-size flex flex-col gap-4 p-[1.5rem] mt-16 justify-evenly">
                        <label
                          htmlFor="r"
                          className="flex items-center cursor-pointer text-2xl font-extrabold h-8 w-8 rounded-full bg-white border-[5px] border-solid border-gray-400 justify-center relative">
                          <input
                            type="radio"
                            name="size"
                            id="r"
                            className=" appearance-none"
                          />
                          <span className="absolute border-0 rounded-full h-8 w-8 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                          <p className="ml-36">Male</p>
                        </label>
                        <label
                          htmlFor="l"
                          className="flex items-center cursor-pointer text-2xl font-extrabold h-8 w-8 rounded-full bg-white border-[5px] border-solid border-gray-400 justify-center relative ">
                          <input
                            type="radio"
                            name="size"
                            id="l"
                            className="appearance-none"
                          />
                          <span className="absolute border-0 rounded-full h-8 w-8 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                          <p className="ml-40">Female</p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex min-w-[300px] max-w-sm flex-col justify-between pb-6">
                  <h3 className="font-bold text-xl text-center text-white">
                    Do you want to save the change?
                  </h3>
                  <div className="flex flex-col gap-5 mt-4">
                    <button className="flex justify-center items-center h-14 rounded-2xl font-bold text-white bg-brown-cs">
                      Save Change
                    </button>
                    <button className="flex justify-center items-center h-14 rounded-2xl font-bold text-brown-cs bg-btn-yellow">
                      Cancel
                    </button>
                  </div>
                  <div className="flex flex-col gap-5 mt-8">
                    <button className="flex items-center h-14 rounded-2xl text-brown-cs font-bold bg-white  justify-between px-10">
                      Edit Password{" "}
                    </button>
                    <button className=" items-center h-14 rounded-2xl text-brown-cs font-bold bg-white  flex justify-between px-10">
                      Log out{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default Profile;
