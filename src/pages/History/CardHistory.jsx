/* eslint-disable react/prop-types */
import React, { useMemo, useState } from "react";
import { deleteHistory } from "../../utils/https/transactions";
import { useSelector } from "react-redux";
import Loaders from "../../components/Loaders";
// import trash from "../../assets/History/trash.svg";
function CardHistory({ image, name, price, size , qty ,methodDeliv, tpsId}) {
  const [isAction, setIsAction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.auth.data.token);
  const controller = useMemo(() => new AbortController(), []);
  // console.log(update)
  const handleCard = (e) => {
    e.preventDefault()
    setIsAction(true);
  };
  const handleCancel = async (event) => {
    event.stopPropagation();
    setIsAction(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation()
    setIsLoading(true);
    deleteHistory(token, tpsId, controller)
      .then(window.location.reload())
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  // console.log(;
  return (
    <div
      onClick={handleCard}
      className={`w-[394px] min-h-[130px] bg-white rounded-2xl items-center relative`}>
      <div
        className={`${
          isAction ? "bg-[rgba(0,0,0,.5)]" : "bg-none"
        } flex items-center px-5 w-full h-max pb-3 relative rounded-2xl`}>
          {isLoading && (
            <Loaders />
          )}
        <div
          className={`w-[75px] h-[75px] rounded-full border mr-4 overflow-hidden`}>
          <img
            src={image}
            alt="image-products"
            className={isAction && "opacity-60"}
          />
        </div>
        <div className="w-2/3">
          <div
            className="w-[40px] h-[40px] rounded-full bg-btn-yellow absolute flex justify-center items-center left-0 top-[-20%]"
            onClick={(e) => e.stopPropagation()}>
            <p>{tpsId}</p>
          </div>
          <h2 className="font-bold text-dark-blue-cs text-2xl">{name}</h2>
          <div className="flex-col flex">
            <p className="text-brown-cs mt-2">
              IDR {price.toLocaleString("id-ID")}
            </p>
            <p className="mt-1 text-dark-blue-cs">
              ( x{qty}{" "}
              {size === 1 ? "Regular " : size === 2 ? "Large " : "Extra Large "}
              )
            </p>
            <p className="text-brown-cs mt-1">Delivery Method {methodDeliv}</p>

            <p className="">Details {"=>"}</p>
          </div>
        </div>
        {isAction && (
          <div className="absolute -top-5 -right-5 z-20 flex gap-3">
            <button className="w-10 h-10 rounded-full bg-brown-cs bg-trash bg-center bg-no-repeat" onClick={handleDelete}></button>
            <button
              onClick={handleCancel}
              className="w-10 h-10 rounded-full z-20 bg-btn-yellow bg-x bg-center bg-no-repeat">
              <i className="text-brown-cs text-2xl font-bold"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardHistory;
