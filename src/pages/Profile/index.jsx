/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../components/HeaderBase";
import Footer from "../../components/Footer";
// import picture from '../../assets/Header/profile.svg'
import iconPensil from '../../assets/Profile/iconPen.svg'
// import '../../styles/Profile.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {profileAction}  from '../../redux/slices/profile'
import { authAction } from '../../redux/slices/auth'
import { useNavigate } from "react-router-dom";
import Loading from '../../components/Loaders'
// import { profileUpdateAction } from "../../redux/slices/profileUpdate";
import {uploadImage, patchProfile} from '../../utils/https/profile'
import { logOut } from "../../utils/https/auth";
// import Modal from "../../components/Modal";

function Profile () {
  const controller = React.useMemo(() => new AbortController());
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.data.token);
  // const id = useSelector((state) => state.auth.data.id)
  // const isLoading = useSelector((state) => console.log(state.profile.isLoading))
  // console.log(isLoading)
  const navigate = useNavigate();
  const [fileInput, setFileInput] = useState(false)
  const [fileValue, setFileValue] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [genderUpdate, setgenderUpdate] = useState()
  const dataArray = useSelector((state) => state.profile.data.data);
  // const isLoading = useSelector((state) => state.profile.isLoading)
  let datas;
  useEffect(() => {
    // const controller = new AbortController();
    dispatch(profileAction.getProfileThunk({controller, token}))
    return () => {
      controller.abort();
    };
  }, []);
  const [form, setForm] = useState();
  const handleGender = (e) => {
    // e.preventDefault()
    setgenderUpdate({
      gender: e.target.id
    })
  }
  const fileInputHandler = (e) => {
    e.preventDefault()
    setFileInput(fileInput === false ? true : false)
  }
  const updateFile = (e) => {
    e.preventDefault();
    const uploadedFile = e.target.files;
    setFileValue(uploadedFile.length ? uploadedFile[0] : null);
  };
  const handleForm = (e) => {
    e.preventDefault()
      setForm((form) => {
        return { ...form, [e.target.name]: e.target.value };
      });
  }
  const handleSave = (e) => {
    e.preventDefault()
    // console.log(form)
    setIsLoading(true);
    patchProfile({ form, token, controller }, genderUpdate)
      .then(() =>
        dispatch(profileAction.getProfileThunk({ controller, token }))
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }
  const handleCancel = (e) => {
    e.preventDefault()
    window.location.reload()
  }
  const updateProfile = (e) => {
    e.preventDefault()
    setFileInput(false)
    setIsLoading(true)
    uploadImage(fileValue, token, controller).then(() => dispatch(profileAction.getProfileThunk({controller, token}))).catch((err) => console.log(err)).finally(() => {
      setIsLoading(false)
    })
    // dispatch(profileAction.updateImageThunk(fileValue, token, controller))
    // dispatch(profileUpdateAction.updateProfileThunk({fileValue, token, controller}))
  }
  const logOutHandler = (e) => {
    e.preventDefault()
    logOut(token, controller);
    dispatch(authAction.filter())
    navigate('/')
  }
  return (
    <>
      <Header />
      <main className="bg-profile w-full h-max flex justify-center min-h-screen">
        <div className="w-full mx-4 justify-center items-center h-full flex flex-col md:w-full">
          {isLoading && (
            <div className="h-[330vh] lg:h-[160vh] w-full absolute">
              <div className="flex items-center absolute justify-center h-full w-full z-20 bg-[rgba(0,0,0,.4)]">
                <Loading />
              </div>
            </div>
          )}
          {!dataArray ? (
            <div className="flex items-center justify-center h-full w-full absolute bg-[rgba(0,0,0,.4)]">
              <Loading />
            </div>
          ) : (
            (() => {
              datas = dataArray[0];
              const date = new Date(datas.birthday);
              const year = date.getFullYear();
              const month = ("0" + (date.getMonth() + 1)).slice(-2);
              const day = ("0" + date.getDate()).slice(-2);
              const formattedDate = `${year}-${month}-${day}`;
              const gender = datas.gender
              return (
                <>
                  <h1 className="font-medium text-4xl text-white py-10 lg:text-start">
                    User Profile
                  </h1>
                  <form
                    className="md:w-[70%] md:mx-12 lg:w-full lg:px-20"
                    onSubmit={handleForm}>
                    <div className="flex gap-8 flex-col items-center px-8 lg:flex-row">
                      <div className="w-full flex flex-col justify-between items-center rounded-2xl bg-white relative pb-12 border-b-[20px] border-solid border-brown-cs lg:w-[50%] lg:pt-12">
                        <button
                          className="absolute top-[30%] right-[24%] md:right-[34%] w-8 h-8 flex justify-center items-center rounded-full bg-brown-cs cursor-pointer bg-center bg-no-repeat  lg:right-[23%] lg:top-[40%] xl:right-[30%]"
                          style={{
                            backgroundImage: `url('${iconPensil}')`,
                          }}
                          onClick={fileInputHandler}></button>
                        <div
                          className={`w-32 h-32 rounded-full border-2 overflow-hidden mt-8 bg-center bg-cover`}
                          style={{
                            backgroundImage: `url('${datas.image}')`,
                          }}></div>
                        <h2 className="font-bold text-2xl mt-8">
                          {datas.display_name}
                        </h2>
                        {fileInput === true ? (
                          <div className="flex flex-col absolute top-[50%] bg-white">
                            <div action="">
                              <input
                                type="file"
                                id=""
                                name="avatar"
                                onChange={updateFile}
                              />
                              <button
                                type="button"
                                className="mt-4 py-2 px-4 bg-brown-cs text-btn-yellow font-bold rounded-2xl
                            w-[50%] self-center"
                                onClick={updateProfile}>
                                Submit
                              </button>
                            </div>
                          </div>
                        ) : (
                          false
                        )}
                        <h3 className="text-base text-greydark mt-8">
                          {datas.email}
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
                              name="email"
                              className="font-medium text-xl text-grey bg-white">
                              Email adress :
                            </label>
                            <input
                              type="text"
                              id="email"
                              // name="email"
                              defaultValue={datas.email}
                              placeholder="Please enter your email"
                              // onChange={handle}
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
                              placeholder="Please enter your Phone number"
                              name="phone_number"
                              onChange={handleForm}
                              defaultValue={datas.phone_number}
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
                              name="address"
                              className="min-h-16 border-b-2 border-solid border-black focus:outline-none mt-4"
                              placeholder="Enter your full address"
                              defaultValue={datas.address}
                              onChange={handleForm}></textarea>
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
                                // placeholder="zulaikha"
                                placeholder="Please enter your display name"
                                name="display_name"
                                className="min-h-14 border-b-2 border-solid border-black focus:outline-none mt-2"
                                defaultValue={datas.display_name}
                                // value={datas.display_name}
                                onChange={handleForm}
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
                                placeholder="Please enter your first name"
                                name="first_name"
                                // placeholder="Please enter your address"
                                className="min-h-14 border-b-2 border-solid border-black focus:outline-none mt-2"
                                defaultValue={datas.first_name}
                                onChange={handleForm}
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
                                name="last_name"
                                placeholder="Please enter your last name"
                                className="min-h-14 border-b-2 border-solid border-black focus:outline-none mt-2"
                                defaultValue={datas.last_name}
                                onChange={handleForm}
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
                                name="birthday"
                                className="min-h-12 border-b-2 border-solid border-black focus:outline-none mt-2"
                                defaultValue={formattedDate}
                                onChange={handleForm}
                              />
                            </div>

                            <div className="choose-size flex flex-col gap-4 p-[1.5rem] mt-16 justify-evenly">
                              {gender == "male" ? (
                                <>
                                  <label
                                    htmlFor="male"
                                    className="flex items-center cursor-pointer text-2xl font-extrabold h-8 w-8 rounded-full bg-btn-yellow border-[5px] border-solid border-gray-400 justify-center relative">
                                    <input
                                      type="radio"
                                      name="gender"
                                      id="male"
                                      className=" appearance-none"
                                      defaultChecked
                                      onChange={handleGender}
                                      // value={data.gender}
                                    />
                                    <span className="absolute border-0 rounded-full h-8 w-8 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                                    <p className="ml-36">Male</p>
                                  </label>
                                  <label
                                    htmlFor="famale"
                                    className="flex items-center cursor-pointer text-2xl font-extrabold h-8 w-8 rounded-full bg-btn-yellow border-[5px] border-solid border-gray-400 justify-center relative ">
                                    <input
                                      type="radio"
                                      name="gender"
                                      id="famale"
                                      className="appearance-none"
                                      // defaultChecked
                                      onChange={handleGender}
                                      // value={data.gender}
                                    />
                                    <span className="absolute border-0 rounded-full h-8 w-8 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                                    <p className="ml-40">Female</p>
                                  </label>
                                </>
                              ) : (
                                <>
                                  <label
                                    htmlFor="male"
                                    className="flex items-center cursor-pointer text-2xl font-extrabold h-8 w-8 rounded-full bg-btn-yellow border-[5px] border-solid border-gray-400 justify-center relative">
                                    <input
                                      type="radio"
                                      name="gender"
                                      id="male"
                                      className=" appearance-none"
                                      // defaultChecked
                                      onChange={handleGender}
                                      // value={data.gender}
                                    />
                                    <span className="absolute border-0 rounded-full h-8 w-8 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                                    <p className="ml-36">Male</p>
                                  </label>
                                  <label
                                    htmlFor="famale"
                                    className="flex items-center cursor-pointer text-2xl font-extrabold h-8 w-8 rounded-full border-[5px] border-solid border-gray-400 justify-center relative bg-btn-yellow">
                                    <input
                                      type="radio"
                                      name="gender"
                                      id="famale"
                                      className="appearance-none"
                                      onChange={handleGender}
                                      // checked
                                      defaultChecked
                                      // value="male"
                                    />
                                    <span className="absolute border-0 rounded-full h-8 w-8 checked:border-4 border-secondary checked:block checked:border-secondary"></span>
                                    <p className="ml-40">Female</p>
                                  </label>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex min-w-[300px] max-w-sm flex-col justify-between pb-6">
                        <h3 className="font-bold text-xl text-center text-white">
                          Do you want to save the change?
                        </h3>
                        <div className="flex flex-col gap-5 mt-4">
                          <button
                            type="submit"
                            className="flex justify-center items-center h-14 rounded-2xl font-bold text-white bg-brown-cs"
                            onClick={handleSave}>
                            Save Change
                          </button>
                          <button
                            className="flex justify-center items-center h-14 rounded-2xl font-bold text-brown-cs bg-btn-yellow"
                            onClick={handleCancel}>
                            Cancel
                          </button>
                        </div>
                        <div className="flex flex-col gap-5 mt-8">
                          <button className="flex items-center h-14 rounded-2xl text-brown-cs font-bold bg-white  justify-between px-10">
                            Edit Password{" "}
                          </button>
                          <button
                            className=" items-center h-14 rounded-2xl text-brown-cs font-bold bg-white  flex justify-between px-10"
                            onClick={logOutHandler}>
                            Log out{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              );
            })()
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
