import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Eventlist from "../components/Eventlist";
import arrow from "../Assets/right-arrow-brown.svg";
import Drinks from "../components/Drinks";
import Totalslist from "../components/Totalslist";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [items, setItems] = useState(Eventlist);
  const [totals, setTotals] = useState(Totalslist);

  const plusclick = (index) => {
    const newItems = [...items];
    const newtotal = [...totals];
    newItems[index].unit++;
    newtotal[1].total += newItems[index].price;
    setItems(newItems);
    setTotals(newtotal);
  };
  const minusclick = (index) => {
    const newItems = [...items];
    const newtotal = [...totals];

    if (newItems[index].unit > 0) {
      newItems[index].unit--;
      newtotal[1].total -= newItems[index].price;
    }

    setItems(newItems);
    setTotals(newtotal);
  };
  return (
    <div className="event mainevent">
      <Navbar />
      <div className="event__section">
        <div className="event__section__info">
          <div className="sectionhead">event ordering</div>
          <div className="form-section">
            <div>
              Full name
              <input type="text" />
            </div>
            <div>
              phone number
              <input type="number" />
            </div>
            <div>
              email
              <input type="email" />
            </div>
            <div>
              number of guests
              <input type="number" />
            </div>
            <div>
              event date
              <input type="date" />
            </div>
            <div>
              location
              <input type="text" />
            </div>
          </div>
          <div className="submit button">Submit</div>
        </div>
        <div className="event__section__content">
          <div className="main-content">
            <div className="sectionhead">content per serving</div>
            <div className="packages-content">
              {Eventlist?.map((content, index) => {
                return (
                  <div className="each-content" key={content.id}>
                    <div className="content-img">
                      {content.contimg && <img src={content.contimg} alt="" />}
                    </div>
                    <div className="circle-line">
                      <div className="line"></div>
                      <div className="circle">
                        <div className="inner-circle"></div>
                      </div>
                      <div className="line bottom"></div>
                    </div>
                    <div className="content-quantity">
                      <div className="change-section">
                        <div
                          className="change point"
                          onClick={() => minusclick(index)}
                        >
                          -
                        </div>
                        <div className="zero">{content.unit}</div>
                        <div
                          className="change point"
                          onClick={() => plusclick(index)}
                        >
                          +
                        </div>
                      </div>
                      <div className="content-name">{content.contname}</div>
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
                Total<span>₦ {totals[1]?.total}</span>
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

export default Event;
