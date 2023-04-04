/* eslint-disable react/prop-types */
import React from "react";

function CardPayment(props) {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 md:w-16 md:h-16 relative bg-primary rounded-lg">
          <img src={props.img} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div>
          <p>{props.prodName}</p>
          <p>{props.qty}</p>
          <p>{props.size}</p>
        </div>
      </div>
      <div>
        <p>IDR {props.subtotal.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
}

export default CardPayment;
