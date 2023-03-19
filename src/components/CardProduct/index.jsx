import React, { Component } from 'react'

export class CardProduct extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="componenCard flex justify-center items-center mb-20">
        <div
          className="h-[230px] border w-[80%] flex flex-col justify-center items-center rounded-xl lg:w-[100%] xl:w-[90%]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}>
          <div className="relative flex justify-center min-h-[50px]">
            <div
              className={`w-[100px] h-[100px] bg-yellow-300 rounded-full absolute top-[-100%]`}>
              <div
                className="absolute right-[-30%] top-[0%] bg-white rounded-xl font-bold"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                }}>
                <div>
                  {this.props.discount == null ? (
                    <p className="hidden"></p>
                  ) : (
                    <p className="py-1 px-2">{this.props.discount}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-body text-center font-bold flex flex-col">
            <h4 className="cardTitle text-xl">{this.props.name}</h4>
            <p className="cardPrice text-brown-cs flex items-end justify-center">{this.props.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardProduct