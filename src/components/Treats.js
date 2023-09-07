import React, { useState } from "react";
import { Link } from "react-router-dom";
import Packageslist from "./Packageslist";
import Totalslist from "./Totalslist";
import CurrencyFormatter from "./Currency";

const Treats = () => {
  const treatlist = Packageslist?.filter((treat) => {
    // return treat.pname.includes("treat");
    return treat;
  }).slice(0, 3);
  const [totals, setTotals] = useState(Totalslist);
  const addToCart = (treat) => {
    const newTreat = [...Packageslist];
    if (treat.unit === 0) {
      newTreat[treat.id].unit = 1;
      newTreat[treat.id].total = newTreat[treat.id].price;
      const newTotal = [...totals];
      newTotal[3].total++;
      setTotals(newTotal);
    }
  };
  return (
    <div className="treats">
{/*       
      <h1>
        {Packageslist[0]?.content.map((con) => {
          return <h2 key={1}>{con.check}</h2>;
        })}
      </h1> */}
      {treatlist.map((treatbox) => {
        return (
          <div key={treatbox.id}>
            <Link
              to={`/packages`}
              state={{ newid: treatbox.id }}
              className="link"
            >
              <div className="treatimg">
                {treatbox.treatimg && <img src={treatbox.pimg} alt="" />}
              </div>
            </Link>
            <div className="infos">
              <div className="infos__name">{treatbox.pname} - <CurrencyFormatter amount={treatbox.price} /></div>
              {treatbox.unit === 0 ? (
                <div className="infos__btn">
                  <span onClick={() => addToCart(treatbox)}>Add to Cart</span>
                </div>
              ) : (
                <Link to="/checkout" className="link">
                  <div className="infos__btn__filled">
                    <span onClick={() => addToCart(treatbox)}>
                      View in Cart
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Treats;
