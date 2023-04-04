import React, { useEffect, useMemo, useState } from "react";
// import WithNavigate from "../../utils/wrapper/withNavigate";
// import { Link } from "react-router-dom";
// import Veggie from "../../assets/Products/veg.png";
import HeaderBase from "../../components/HeaderBase";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { getHistory } from "../../utils/https/transactions";
import Loaders from "../../components/Loaders";
import CardHistory from "./CardHistory";

function History() {
  const controller = useMemo(() => new AbortController());
  // const state = useSelector((state) => state.user);
  // const [update, setUpdate] = useState(1)
  // console.log(update)
  const [dataHistory, setDataHistory] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.auth.data.token);
  useEffect(() => {
    document.title = "History"
    setIsLoading(true)
    getHistory(token, controller).then(({data}) => setDataHistory(data.data)).catch((err) => console.log(err)).finally(() => setIsLoading(false))
  }, [])
  // console.log(state);
  // console.log(dataHistory);
  // console.log(isLoading)
  return (
    <>
      <HeaderBase title="history" />
      <main className="w-full min-h-screen py-6 lg:px-12 lg:py-24 lg:gap-12 bg-history bg-cover bg-center">
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

        {!dataHistory || isLoading ? (
          <div className="h-screen w-full px-0 py-0">
            <div className="flex items-center justify-center h-full w-full z-20">
              <Loaders />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {dataHistory.map((product, idx) => (
              <div key={idx}>
                <CardHistory
                  name={product.product_name}
                  image={product.image}
                  price={product.subtotal}
                  qty={product.quantity}
                  size={product.size}
                  methodDeliv={product.payment_method}
                  tpsId={product.transactions_id}
                />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default History;
