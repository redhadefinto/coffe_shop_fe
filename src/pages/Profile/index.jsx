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
import { changePassword, logOut } from "../../utils/https/auth";
// import Modal from "../../components/Modal";
import "../../styles/products.css";
import { cartActions } from "../../redux/slices/cart";
// import { set } from "lodash";
// import { set } from "lodash";

function Profile () {
  const controller = React.useMemo(() => new AbortController());
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.data.token);
  const navigate = useNavigate();
  const [fileInput, setFileInput] = useState(false)
  const [fileValue, setFileValue] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [genderUpdate, setgenderUpdate] = useState()
  const [showModal, setShowModal] = useState(false)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [error, setError] = useState(false)
  const [msgError, setMsgError] = useState()
  const [editContact, setEditContact] = useState(true)
  const [editDetails, setEditDetails] = useState(true)
  const dataArray = useSelector((state) => state.profile.data.data);
  // const isLoading = useSelector((state) => state.profile.isLoading)
  let datas;
  useEffect(() => {
    // const controller = new AbortController();
    document.title = 'Profile'
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
    setMsgError()
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
    if(genderUpdate) {
      patchProfile({ form, token, controller }, genderUpdate)
        .then(() =>
          dispatch(profileAction.getProfileThunk({ controller, token }))
        )
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
      }
      patchProfile({ form, token, controller })
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
    if(!fileValue) {
      setError(true)
      setMsgError('Masukan Gambar!!!')
      return;
    }
    setFileInput(false)
    setIsLoading(true)
    uploadImage(fileValue, token, controller).then(() => dispatch(profileAction.getProfileThunk({controller, token}))).catch((err) => console.log(err)).finally(() => {
      setIsLoading(false)
    })
  }

  const handleChangePassword = (e) => {
    e.preventDefault()
    // console.log(oldPassword)
    // console.log(newPassword)
    if (oldPassword == undefined || newPassword == undefined) {
      setError(true);
      setMsgError("The old password and the new password must be filled in");
      return;
    }
    const body = {
      oldPass: oldPassword,
      newPass: newPassword
    }
    setIsLoading(true)
    changePassword(body, token, controller).then(() => {
      setError(false)
      setMsgError('')
      logOut(token, controller)
      dispatch(authAction.filter())
      navigate('/')
    }).catch(() => {
      setError(true)
      setMsgError("Old password is wrong");
      setOldPassword('')
      setNewPassword('')
      return;
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const logOutHandler = (e) => {
    e.preventDefault()
    logOut(token, controller);
    dispatch(cartActions.resetCart());
    dispatch(authAction.filter())
    navigate('/')
  }
  return (
    <>
      <Header />
      <main className="bg-profile w-full h-max flex justify-center min-h-screen">
        <div className="w-full mx-4 justify-center items-center h-full flex flex-col md:w-full">
          {isLoading && (
            <div className="min-h-[330vh] lg:min-h-[160vh] w-full absolute">
              <div className="flex items-center absolute justify-center h-full w-full z-20 bg-[rgba(0,0,0,.4)]">
                <Loading />
              </div>
            </div>
          )}
          {!dataArray ? (
            <div className="h-[200vh] lg:h-[100vh] w-full flex justify-center items-center absolute">
              <div className="flex items-center absolute top-[50%] justify-center h-[100vh] w-full z-20 bg-[rgba(0,0,0,.4)]">
                <Loading />
              </div>
            </div>
          ) : (
            (() => {
              datas = dataArray[0];
              const date = new Date(datas.birthday);
              const year = date.getFullYear();
              const month = ("0" + (date.getMonth() + 1)).slice(-2);
              const day = ("0" + date.getDate()).slice(-2);
              const formattedDate = `${year}-${month}-${day}`;
              const gender = datas.gender;
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
                          <div
                            className="py-4 px-8 rounded-3xl absolute top-[50%] bg-white"
                            style={{
                              boxShadow:
                                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                            }}>
                            <div className="flex flex-col justify-center items-center">
                              <input
                                type="file"
                                id=""
                                name="avatar"
                                className="text-sm text-grey-500
                                file:mr-5 file:py-2 file:px-6
                                file:rounded-full file:border-0
                                file:text-sm file:font-medium
                                file:bg-btn-yellow file:text-white
                                hover:file:cursor-pointer hover:file:bg-brown-cs
                                hover:file:text-btn-yellow hover:file:transition-all hover:file:duration-500"
                                onChange={updateFile}
                              />
                              <button
                                type="button"
                                className="mt-6 py-2 px-4 bg-brown-cs text-btn-yellow font-bold rounded-2xl
                            w-[50%] self-center hover:bg-btn-yellow hover:text-white hover:transition-all hover:duration-500"
                                onClick={updateProfile}>
                                Submit
                              </button>
                              {error === true ? (
                                <p className="mt-4 text-red-600 font-bold text-xl">
                                  {msgError}
                                </p>
                              ) : (
                                <></>
                              )}
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
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              editContact
                                ? setEditContact(false)
                                : setEditContact(true);
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
                              disabled={editContact}
                              onChange={handleForm}
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
                              disabled={editContact}
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
                              disabled={editContact}
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
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              editDetails
                                ? setEditDetails(false)
                                : setEditDetails(true);
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
                                disabled={editDetails}
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
                                disabled={editDetails}
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
                                disabled={editDetails}
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
                                disabled={editDetails}
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
                                      className="appearance-none"
                                      defaultChecked
                                      onChange={handleGender}
                                      disabled={editDetails}
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
                                      disabled={editDetails}
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
                                      disabled={editDetails}
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
                                      disabled={editDetails}
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
                          <button
                            className="flex items-center h-14 rounded-2xl text-brown-cs font-bold bg-white  justify-between px-10"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowModal(true);
                            }}>
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
          {showModal ? (
            <div className="h-[330vh] lg:h-[160vh] w-full absolute">
              <div className="flex items-end pb-16 absolute justify-center h-full w-full z-10 bg-[rgba(0,0,0,.4)]">
                <form className="w-[80%] h-[25%] md:w-[60%] md:h-[30%] lg:w-[40%] lg:h-[60%] bg-[rgba(255,255,255,9)] rounded-2xl flex flex-col py-8 px-12 gap-4" onSubmit={handleChangePassword}>
                  <p className="font-bold text-2xl text-dark-blue-cs">
                    Change Password
                  </p>
                  <label
                    htmlFor=""
                    className="mt-8 font-bold text-2xl text-dark-blue-cs">
                    Old Password
                  </label>
                  <input
                    type="password"
                    className="border-b-2 border-solid border-dark-blue-cs focus:outline-none w-[80%]"
                    value={oldPassword}
                    onChange={((e) => setOldPassword(e.target.value))}
                  />
                  <label
                    htmlFor=""
                    className="mt-12 font-bold text-2xl text-dark-blue-cs">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="border-b-2 border-solid border-dark-blue-cs focus:outline-none w-[80%]"
                    value={newPassword}
                    onChange={((e) => setNewPassword(e.target.value))}
                  />
                  <div className="mt-12 gap-8 flex justify-center items-center">
                    <button type="submit" className="rounded-xl w-[50%] py-3 text-dark-blue-cs font-bold border-2 border-solid border-brown-cs hover:bg-btn-yellow hover:text-brown-cs hover:transition-all hover:duration-500">
                      Save
                    </button>
                    <button
                      className="rounded-xl w-[50%] py-3 text-dark-blue-cs font-bold border-2 border-solid border-brown-cs hover:bg-btn-yellow hover:text-brown-cs hover:transition-all hover:duration-500"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(false);
                        setError(false)
                        setMsgError()
                      }}>
                      Cancel
                    </button>
                  </div>
                    {error ? (
                      <div className="mt-4 flex items-center justify-center">
                        <p className="font-bold text-red-600 text-xl">{msgError}</p>
                      </div>
                    ): false}
                </form>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;