/**
 *
 *  This is used to let the user know they have checked out successfully
 *
 */

import styles from "../../../styles/modules/Index/Index.module.css";

export const CheckoutAlert = () => {
  return (
    <div id="checkoutAlert" className={`${styles.checkout_alert} half-second`}>
      <span className="half-second">
        Checkout Successful. Thank you for your purchase!
      </span>
    </div>
  );
};
