import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import arrow from "../Assets/right-arrow-brown.svg";
import Drinks from "../components/Drinks";
import Corporatelist from "../components/Corporatelist";
import Totalslist from "../components/Totalslist";

const Corporate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [items, setItems] = useState(Corporatelist);
  const [totals, setTotals] = useState(Totalslist);

  const plusclick = (index) => {
    const newItems = [...items];
    const newtotal = [...totals];
    newItems[index].unit++;
    newtotal[2].total += newItems[index].price;
    setItems(newItems);
    setTotals(newtotal);
  };
  const minusclick = (index) => {
    const newItems = [...items];
    const newtotal = [...totals];

    if (newItems[index].unit > 0) {
      newItems[index].unit--;
      newtotal[2].total -= newItems[index].price;
    }

    setItems(newItems);
    setTotals(newtotal);
  };

  return (
    <div className="event corporate">
      <Navbar />
      <div className="event__section">
        <div className="event__section__info">
          <div className="sectionhead">corporate ordering</div>
          <div className="form-section">
            <div>
              company name
              <input type="text" />
            </div>
            <div>
              delivery date and time
              <input type="date" />
            </div>
            <div>
              company address
              <input type="text" />
            </div>
            <div>
              rep name
              <input type="text" />
            </div>
            <div>
              rep email
              <input type="email" />
            </div>
            <div>
              rep phone number
              <input type="number" />
            </div>
          </div>
          <div className="viewpackagesbtn">
            Package<span className="point">Select Package(s)</span>
          </div>
        </div>
        <div className="event__section__content">
          <div className="main-content">
            <div className="sectionhead">Packages</div>
            <div className="packages-content">
              {items.map((pack, index) => {
                return (
                  <div className="each-content" key={pack?.id}>
                    <div className="circle-line">
                      <div className="line"></div>
                      <div className="circle">
                        <div className="inner-circle"></div>
                      </div>
                      <div className="line bottom"></div>
                    </div>
                    <img src={pack?.pimg} alt="" />
                    <div className="content-quantity">
                      <div className="change-section">
                        <div
                          className="change point"
                          onClick={() => minusclick(index)}
                        >
                          -
                        </div>
                        <div className="zero">{pack.unit}</div>
                        <div
                          className="change point"
                          onClick={() => plusclick(index)}
                        >
                          +
                        </div>
                      </div>
                      <div className="content-name">{pack?.pname}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Drinks />
          </div>
          <div className="checkout-section">
            <div className="content-info">
              <div className="edit-info point">
                {" "}
                <span>
                  <img src={arrow} alt="" />
                </span>
                Edit Info{" "}
              </div>
              <div className="total">
                Total <span>₦ {Totalslist[2]?.total}</span>
              </div>
            </div>
            <div className="checkout">
              <div className="question">Done Selecting your package?</div>
              <div className="button">Checkout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
