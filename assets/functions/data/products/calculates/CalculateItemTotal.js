/**
 *
 *  This is used to calculate an items total
 *
 */

export default function CalculateItemTotal(quantity, price) {
  let total;

  total = Math.round(price * quantity * 100) / 100;

  return total;
}
