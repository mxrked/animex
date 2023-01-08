/**
 *
 *  This is the Product Class
 *
 */

export default class Product {
  constructor(
    productID,
    productSeries,
    productType,
    productName,
    productImg,
    productDesc,
    productPrice,
    productQuantity
  ) {
    this.productID = productID;
    this.productSeries = productSeries;
    this.productName = productName;
    this.productType = productType;
    this.productImg = productImg;
    this.productDesc = productDesc;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
  }

  // Setters
  set setProductID(productID) {
    this.productID = productID;
  }
  set setProductSeries(productSeries) {
    this.productSeries = productSeries;
  }
  set setProductName(productName) {
    this.productName = productName;
  }
  set setProductType(productType) {
    this.productType = productType;
  }
  set setProductImg(productImg) {
    this.productImg = productImg;
  }
  set setProductDesc(productDesc) {
    this.productDesc = productDesc;
  }
  set setProductPrice(productPrice) {
    this.productPrice = productPrice;
  }
  set setProductQuantity(productQuantity) {
    this.productQuantity = productQuantity;
  }

  // Getters
  get getProductID() {
    return this.productID;
  }
  get getProductSeries() {
    return this.productSeries;
  }
  get getProductName() {
    return this.productName;
  }
  get getProductType() {
    return this.productType;
  }
  get getProductImg() {
    return this.productImg;
  }
  get getProductDesc() {
    return this.productDesc;
  }
  get getProductPrice() {
    return this.productPrice.toFixed(2);
  }
  get getProductQuantity() {
    return this.productQuantity;
  }
  get getProductTotal() {
    const PRODUCT_TOTAL = this.productPrice * this.productQuantity;

    return PRODUCT_TOTAL.toFixed(2);
  }
  get getProductDetails() {
    return `Product ID: ${this.productID}\n
            Product Series: ${this.productSeries}\n
            Product Type: ${this.productType}\n
            Product Name: ${this.productName}\n
            Product Image URL: ${this.productImg}\n
            Product Description: ${this.productDesc}\n
            Product Price: $${this.productPrice}\n
            Product Quantity: ${this.productQuantity}\n
            Product Total: $${this.getProductTotal}`;
  }
}
