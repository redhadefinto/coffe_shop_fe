import React, { Component } from 'react'

class cardPromo extends Component {
  constructor(props) {
    super(props)
  } 
  render() {
    return (
      <div
        className={`flex w-[100%] py-6 px-4 self-center ${this.props.bg} rounded-xl gap-4 xl:w-[90%]`}
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <img
          src={this.props.img}
          alt=""
          // width="85px"
          height="auto"
          className="w-[80px] h-[80px] bg-yellow-300"
        />
        <div className="info-promoCard">
          <h2 className="text-xl font-bold mb-2">{this.props.title}</h2>
          <p className="text-black">{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default cardPromo