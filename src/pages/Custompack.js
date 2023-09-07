import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import custompackimg from "../Assets/images/custompack.png";
import Packagebackground from "../components/Packagebackground";
import Drinks from "../components/Drinks";
import Contentlist from "../components/Contentlist";
import Totalslist from "../components/Totalslist";

function Custompack() {
  const [items, setItems] = useState(Contentlist);
  const [totals, setTotals] = useState(Totalslist);
  var [initialno, setInitialno] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    const newtotal = [...totals];
    newItems[index].unit++;
    newtotal[0].total += newItems[index].price;
    setItems(newItems);
    setTotals(newtotal);
  };
  const handleQuantitydecrease = (index) => {
    const newItems = [...items];
    const newtotal = [...totals];

    if (newItems[index].unit > 0) {
      newItems[index].unit--;
      newtotal[0].total -= newItems[index].price;
    }

    setItems(newItems);
    setTotals(newtotal);
  };

  const cartClicked = () => {
    setInitialno(initialno++);
    console.log(packname);
  };
  var [packname, setPackname] = useState(`Custom pack ${initialno}`);

  return (
    <div className="packages custompack">
      <Navbar />
      <div className="packages__box">
        <div className="packages__box__description">
          <div className="packagebackground">
            <Packagebackground />
          </div>
          <div className="question">Build Your Pack</div>
          <div className="package-name head bigscreen">
            <input
              type="text"
              placeholder="Enter Pack Name"
              defaultValue={packname}
              className="point"
              onClick={(e) => {
                setPackname(e.target.value);
              }}
            />
          </div>
          <div className="miniinfo bigscreen">Customise your pack name</div>
          <div className="package-image">
            <img src={custompackimg} alt="custom pack" className="pimg" />
          </div>
          <div className="package-name head smallscreen">
            <input
              type="text"
              placeholder="Enter Pack Name"
              defaultValue={packname}
              className="point"
              onClick={(e) => {
                setPackname(e.target.value);
              }}
            />
          </div>
          <div className="miniinfo smallscreen">Customise your pack name</div>
          <div className="details-box bigscreen">
            <div className="price-section">
              <div className="price">
                ₦ {totals[0]?.total}
                <span>per pack</span>
              </div>
            </div>
            <div className="cart-text point noselect" onClick={cartClicked}>
              <span>Add to Cart</span>
            </div>
          </div>
          <div className="custom-drinks bigscreen">
            <Drinks />
          </div>
        </div>
        <div className="packages__box__content">
          <div className="content-section">
            <div className="content-heading head">Content</div>
            <div className="packages-content">
              {items.map((content, index) => {
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
                          onClick={() => handleQuantitydecrease(index)}
                        >
                          -
                        </div>
                        <div className="zero">{content.unit}</div>
                        <div
                          className="change point"
                          onClick={() => handleQuantityIncrease(index)}
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
            <div className="custom-drinks smallscreen">
              <Drinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custompack;
