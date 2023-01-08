/**
 *
 *  This is the cart checkout
 *
 */

import { useEffect, useState } from "react";

import { FaTimesCircle } from "react-icons/fa";

import { CART_ITEMS } from "../../../data/variables/ARRAYS";

import {
  VISA,
  AMERICAN_EXPRESS,
  DISCOVER,
  MASTER_CARD,
} from "../../../cdn_returns/ICONS";

import ToggleCheckout from "../../../functions/dom/togglers/ToggleCheckout";
import CloseCheckout from "../../../functions/dom/closers/CloseCheckout";
import CalculateCartFinalPriceTotal from "../../../functions/data/products/calculates/CalculateCartFinalPriceTotal";
import GrabCardType from "../../../functions/data/products/grabbers/GrabCardType";
import CheckCheckoutInputs from "../../../functions/dom/checkers/cart/CheckCheckoutInputs";

import styles from "../../../styles/modules/Cart/Cart.module.css";

export const CartCheckout = () => {
  const [showCheckout, setShowCheckout] = useState(false);

  // Displaying Checkout Items
  useEffect(() => {
    setTimeout(() => {
      setShowCheckout(true);
    }, 6000);
  }, []);

  // Updating the data/prices
  useEffect(() => {
    document.getElementById("checkoutCart").addEventListener("click", () => {
      setShowCheckout(false);
      setTimeout(() => {
        setShowCheckout(true);
      }, 100);

      ToggleCheckout();

      // Displaying the cart total
      document.getElementById("cartTotal").innerHTML =
        CalculateCartFinalPriceTotal().toFixed(2);
    });
  }, []);

  return (
    <div id="cartCheckout" className={`${styles.cart_checkout}`}>
      <div
        id="cartCheckoutDarken"
        className={`${styles.darken} full-second`}
        onClick={() => {
          CloseCheckout();
        }}
      />

      <div
        id="cartCheckoutMain"
        className={`${styles.cart_checkout_main} full-second`}
      >
        <div
          id="cartCheckoutMainInner"
          className={`${styles.cart_checkout_main_inner} half-second`}
        >
          <div className={`${styles.cart_checkout_main_inner_top}`}>
            <h1>Checkout</h1>

            <button
              className={`half-second`}
              onClick={() => {
                CloseCheckout();
              }}
            >
              <FaTimesCircle className={styles.icon} />
            </button>
          </div>

          <div className={`${styles.cart_checkout_main_inner_items}`}>
            <span
              className={`${styles.cart_checkout_main_inner_items_heading} half-second`}
            >
              Items In Cart
            </span>

            <div className={`${styles.cart_checkout_main_inner_items_holder}`}>
              <ul>
                {showCheckout &&
                  CART_ITEMS.map((item) => (
                    <li
                      key={item.productId}
                      className={`${styles.cart_checkout_item}`}
                    >
                      <span
                        className={`${styles.cart_checkout_item_name} half-second`}
                      >
                        {item.productName}
                      </span>

                      <div>
                        <span
                          className={`${styles.cart_checkout_item_quantity} half-second`}
                        >
                          Q: <span>{item.productQuantity}</span>
                        </span>

                        <span
                          className={`${styles.cart_checkout_item_total} half-second`}
                        >
                          T:{" "}
                          <span>
                            $
                            {Math.round(
                              item.productPrice * item.productQuantity * 100
                            ) / 100}
                          </span>
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className={`${styles.cart_checkout_main_inner_inputs}`}>
            <span
              className={`${styles.cart_checkout_main_inner_inputs_heading} half-second`}
            >
              Credentials
            </span>

            <div className={`${styles.cart_cards}`}>
              <span className={`${styles.cart_cards_heading} half-second`}>
                Select the card you will be using:
              </span>

              <div className={`${styles.card_types_inner}`}>
                <div className={`${styles.card_type}`}>
                  <input
                    type="radio"
                    id="visaRadio"
                    className="card-radio"
                    checked={false}
                  />
                  <input
                    type="checkbox"
                    className={`${styles.cb} card-cb`}
                    onChange={(e) => {
                      GrabCardType(e, document.getElementById("visaRadio"));
                    }}
                    checked={false}
                  />
                  <img
                    data-src={VISA}
                    className="lazyload"
                    alt="Visa Card Icon"
                  />
                </div>
                <div className={`${styles.card_type}`}>
                  <input
                    type="radio"
                    id="masterCardRadio"
                    className="card-radio"
                    checked={false}
                  />
                  <input
                    type="checkbox"
                    className={`${styles.cb} card-cb`}
                    onChange={(e) => {
                      GrabCardType(
                        e,
                        document.getElementById("masterCardRadio")
                      );
                    }}
                    checked={false}
                  />
                  <img
                    data-src={MASTER_CARD}
                    className="lazyload"
                    alt="Master Card Icon"
                  />
                </div>
                <div className={`${styles.card_type}`}>
                  <input
                    type="radio"
                    id="discoverRadio"
                    className="card-radio"
                    checked={false}
                  />
                  <input
                    type="checkbox"
                    className={`${styles.cb} card-cb`}
                    onChange={(e) => {
                      GrabCardType(e, document.getElementById("discoverRadio"));
                    }}
                    checked={false}
                  />
                  <img
                    data-src={DISCOVER}
                    className="lazyload"
                    alt="Discover Card Icon"
                  />
                </div>
                <div className={`${styles.card_type}`}>
                  <input
                    type="radio"
                    id="americanExpressRadio"
                    className="card-radio"
                    checked={false}
                  />
                  <input
                    type="checkbox"
                    className={`${styles.cb} card-cb`}
                    onChange={(e) => {
                      GrabCardType(
                        e,
                        document.getElementById("americanExpressRadio")
                      );
                    }}
                    checked={false}
                  />
                  <img
                    data-src={AMERICAN_EXPRESS}
                    className="lazyload"
                    alt="American Express Card Icon"
                  />
                </div>
              </div>
            </div>

            <div
              className={`${styles.cart_card_inputs} half-second`}
              id="cardInputs"
            >
              <form
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    CheckCheckoutInputs();
                  }
                }}
              >
                <div
                  className={`${styles.cart_card_inputs_set} ${styles.set_1}`}
                >
                  <div className={`${styles.cart_card_inputs_set_group}`}>
                    <input
                      type={"text"}
                      name="cartNameOnCard"
                      id="cartNameOnCard"
                      className={`${styles.cart_card_inputs_set_group_input} checkout-input half-second`}
                      placeholder="Name on Card"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.cart_card_inputs_set} ${styles.set_2}`}
                >
                  <div className={`${styles.cart_card_inputs_set_group}`}>
                    <input
                      type={"email"}
                      name="cartEmail"
                      id="cartEmail"
                      className={`${styles.cart_card_inputs_set_group_input} checkout-input half-second`}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className={`${styles.cart_card_inputs_set_group}`}>
                    <input
                      type={"text"}
                      name="cartAddress"
                      id="cartAddress"
                      className={`${styles.cart_card_inputs_set_group_input} checkout-input half-second`}
                      placeholder="Address - (1234 Street)"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.cart_card_inputs_set} ${styles.set_3}`}
                >
                  <div className={`${styles.cart_card_inputs_set_group}`}>
                    <input
                      type={"text"}
                      name="cartCity"
                      id="cartCity"
                      className={`${styles.cart_card_inputs_set_group_input} checkout-input half-second`}
                      placeholder="City"
                    />
                  </div>
                  <div className={`${styles.cart_card_inputs_set_group}`}>
                    <select id="cartState" className="half-second">
                      <option defaultChecked>State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <div className={`${styles.cart_card_inputs_set_group}`}>
                    <input
                      type={"text"}
                      name="cartZip"
                      id="cartZip"
                      className={`${styles.cart_card_inputs_set_group_input} checkout-input half-second`}
                      placeholder="Zip"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.cart_card_inputs_set} ${styles.set_4}`}
                >
                  <div className={`${styles.cart_card_inputs_set_group}`}>
                    <input
                      type={"text"}
                      name="cartCardNum"
                      id="cartCardNum"
                      className={`${styles.cart_card_inputs_set_group_input} checkout-input half-second`}
                      placeholder="Card Num"
                    />
                  </div>
                  <div className={`${styles.cart_card_inputs_set_group}`}>
                    <input
                      type={"text"}
                      name="cartCardCVV"
                      id="cartCardCVV"
                      className={`${styles.cart_card_inputs_set_group_input} checkout-input half-second`}
                      placeholder="Card CVV"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className={`${styles.cart_checkout_main_inner_bottom}`}>
            <div className={`${styles.cart_checkout_main_inner_bottom_total}`}>
              Total:{" "}
              <span>
                $<span id="cartTotal"></span>
              </span>
            </div>

            <button
              id="confirmCheckout"
              className={`half-second`}
              onClick={() => {
                CheckCheckoutInputs();
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
