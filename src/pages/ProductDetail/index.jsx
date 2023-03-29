import React, { useEffect, Fragment } from "react";
import HeaderBase from "../../components/HeaderBase";
import Footer from "../../components/Footer/index";
// import image from "../../assets/ProductDetail/coffe detail.png";
import plus from "../../assets/Vektor/+.png";
import minus from "../../assets/Vektor/-.png";
import { getProductsDetail } from '../../utils/https/Products'
import { useSelector, useDispatch } from 'react-redux'
import { counterAction } from '../../redux/slices/counter'
import { usersAction } from "../../redux/slices/users";
// import { isInteger } from "lodash";
// import Loaders from "../../components/Loaders";

function Details() {
  const [datas, setData] = React.useState([])
  const controller = new AbortController()
  const id = window.location.pathname
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  // console.log(counter);
  const addCounter = () => {
    dispatch(counterAction.increment())
  }
  const subCounter = () => {
    if(counter.number == 0) return;
    dispatch(counterAction.decrement())
  }
  useEffect(() => {
    // function fecthData = () => {}
    // this.setState({
    //   isLoading: true,
    // });
    getProductsDetail(controller, id)
      .then(({ data }) =>
        setData(data.data)
      )
      .catch((err) => console.log(err))
    
      // .finally(() =>
      //   // this.setState({
      //   //   isLoading: false,
      //   // })
      // );
      dispatch(usersAction.getUsersThunk(controller)); 
  }, [])
  return (
    <>
      <HeaderBase />
      {datas.map((data) => {
        return (
          <main className="bg-abu inset-0 pb-[270px] px-6" key={data.id}>
            <section className="title pl-[10%] pt-12 text-xl">
              <p>
                Favorite & Promo
                <span className="font-bold text-[#6A4029]">
                  {" "}
                  &gt; {data.product_name}
                </span>
              </p>
            </section>
            <section className="container flex flex-col justify-center items-center gap-14 lg:flex-row  inset-0 px-[5%] xl:pl-[10%] mx-auto">
              <div className="left-content mt-16 justify-center items-center flex-col flex mb-20 ">
                <div className="box-coffee flex flex-col justify-center items-center">
                  <div className="img-coffee mb-11">
                    <img
                      className="rounded-full  xl:w-[400px] xl:h-[400px]"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <div className="name-price  items-center text-center mb-14 flex flex-col justify-center ">
                    <p className="name text-5xl font-black font-Poppins mb-3">
                      {data.product_name}
                    </p>
                    <p className="price font-medium text-3xl font-Poppins">
                      IDR {data.price}
                    </p>
                  </div>
                  <div className="left-button flex flex-col gap-5 lg:mt-[5%]">
                    <button className="w-[380px] h-[85px] bg-brown-cs text-white text-[25px] font-bold flex justify-center items-center rounded-[20px] cursor-pointer">
                      Add to Cart
                    </button>
                    <button className="w-[380px] h-[85px] bg-btn-yellow text-[#6A4029] text-[25px] font-bold flex justify-center items-center rounded-[20px] cursor-pointer">
                      Ask a Staff
                    </button>
                  </div>
                </div>
              </div>
              <div className="right-content flex flex-col justify-center items-center w-full   xl:mr-[-5%]">
                <div className="description-card w-fit h-[635px] bg-white p-11 xl:pt-[81px] xl:px-[84px] xl:pb-[65px]  relative rounded-[20px] xl:w-[639px] ">
                  <div className="delivery text-[23px]  text-[#6A4029] mb-6 md:text-[26px]">
                    <p>
                      Delivery only on .
                      <span className="font-bold">
                        Monday to <br />
                        friday
                      </span>
                      . at <span className="font-bold">1 - 7 pm</span>
                    </p>
                  </div>
                  <div className="text-coffee text-[#6A4029] text-[18px] mb-6 md:text-[25px]">
                    Cold brewing is a method of <br />
                    brewing that combines ground <br />
                    coffee and cool water and uses <br />
                    time instead of heat to extract the <br />
                    flavor. It is brewed in small batches <br />
                    and steeped for as long as <br />
                    48 hours.
                  </div>
                  <div className="title-size ">
                    <p className="text-[25px] font-bold text-center">
                      Choose a size
                    </p>
                  </div>
                  <div className="container-choose-size">
                    <div className="choose-size flex p-[1.5rem] justify-evenly">
                      <label
                        htmlFor="r"
                        className="flex items-center cursor-pointer text-2xl font-extrabold w-12 h-12 rounded-full bg-btn-yellow justify-center relative ">
                        <input
                          type="radio"
                          name="size"
                          id="r"
                          className=" appearance-none"
                        />
                        R
                        <span className="absolute border-0 rounded-full h-12 w-12 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                      </label>
                      <label
                        htmlFor="l"
                        className="flex items-center cursor-pointer text-2xl font-extrabold w-12 h-12 rounded-full bg-btn-yellow justify-center relative ">
                        <input
                          type="radio"
                          name="size"
                          id="l"
                          className="appearance-none"
                        />
                        L
                        <span className="absolute border-0 rounded-full h-12 w-12 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                      </label>
                      <label
                        htmlFor="xl"
                        className="flex items-center cursor-pointer text-2xl font-extrabold w-12 h-12 rounded-full bg-btn-yellow justify-center relative ">
                        <input
                          type="radio"
                          name="size"
                          id="xl"
                          className="appearance-none"
                        />
                        XL
                        <span className="absolute border-0 rounded-full h-12 w-12 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="box-methods flex justify-center items-center flex-col mt-[50px] gap-3">
                  <div className="head-methods font-bold text-xl text-center flex justify-center items-center">
                    <p>Choose Delivery Methods</p>
                  </div>
                  <div className="set-methods flex justify-center items-center p-3 flex-wrap">
                    <div className="input-radio flex gap-6 justify-center items-center ">
                      <input
                        type="radio"
                        id="btn1"
                        name="method"
                        className="checked: bg-secondary"
                      />
                      <label
                        htmlFor="btn1"
                        className=" px-4 py-3 text-[#9f9f9f] border-2 border-solid flex justify-center items-center bg-white cursor-pointer text-xl checked:bg-secondary w-28  rounded-[10px] text-center">
                        Dine In
                      </label>
                      <input type="radio" id="btn2" name="method" />
                      <label
                        htmlFor="btn2"
                        className=" px-4 py-3 text-[#9f9f9f] border-2 border-solid flex justify-center items-center bg-white cursor-pointer text-xl checked:bg-secondary w-28  rounded-[10px] text-center md:w-[169px]">
                        Door Delivery
                      </label>
                      <input type="radio" id="btn3" name="method" />
                      <label
                        htmlFor="btn3"
                        className=" px-4 py-3 text-[#9f9f9f] border-2 border-solid flex justify-center items-center bg-white cursor-pointer text-xl checked:bg-secondary w-28  rounded-[10px] text-center">
                        Pick Up
                      </label>
                    </div>
                  </div>
                  <div className="set-time">
                    <div className="form-input flex gap-2 justify-center items-center">
                      <label>Set time :</label>
                      <input
                        type="email"
                        placeholder="Enter the time you’ll arrived"
                        className="p-3 rounded-[12px] bg-abu outline-none border-b-2 border-solid "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="checkout relative flex justify-between items-center md:mb-20 lg:mb-32">
              <div className="card flex flex-col md:flex-row w-4/5 rounded-[20px] absolute justify-between items-center top-[35px] md:top-[175px] left-[10%] gap-8 md:gap-8">
                <div className="  bg-white flex justify-between h-[90px] p-4 w-full md:h-[8.5rem] lg:h-[10.5rem] md:p-[1rem] lg:p-11 rounded-[20px] items-center shadow-xl">
                  <div className="product-coffee flex gap-[1.5rem] items-center ">
                    <div className="img-product">
                      <img
                        className="rounded-full md:w-24 md:h-24"
                        src={data.image}
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="total-size text-xs ">
                      <div className="total-name text-xs font-bold ">
                        <p className=" text-[15px]  md:text-[20px] md:mb-4">
                          {data.product_name}
                        </p>
                      </div>
                      <p className="sizet text-[10px] md:text-[20px] md:leading-6">
                        x1 (Large) <br />
                        x1 (Regular)
                      </p>
                    </div>
                  </div>
                  <div className="add-amount flex justify-center items-center gap-3">
                    <button
                      className="minus flex bg-[#E7AA36] w-7 h-7 md:w-[40px] md:h-[40px] rounded-full justify-center items-center cursor-pointer"
                      onClick={subCounter}>
                        <img src={minus} alt="" width="10" height="10" />
                    </button>
                    <p className="amount text-2xl font-bold">
                      {counter.number}
                    </p>
                    <button
                      className="plus flex bg-[#E7AA36] h-7 w-7 md:w-[40px] md:h-[40px] rounded-full justify-center items-center cursor-pointer"
                      onClick={addCounter}>
                      <img
                        src={plus}
                        alt=""
                        width="10px"
                        height="10px"
                        className=" md:h-5 md:w-5"
                      />
                    </button>
                  </div>
                </div>

                <div className="button-checkout">
                  <button className=" w-[150px] h-[80px]  p-2  md:w-[155px] shadow-xl lg:w-64 md:h-[8.5rem] lg:h-[10.5rem] md:text-[25px] left-[10%] bottom-[10%] border-none bg-btn-yellow font-bold text-[#6A4029] rounded-[20px]">
                    CHECKOUT
                  </button>
                </div>
              </div>
            </section>
          </main>
        );
      })}
      <Footer />
    </>
  );
}

export default Details;
