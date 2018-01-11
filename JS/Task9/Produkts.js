function Product(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

function StoragePosition(product, quantity) {
    this.product = product;
    this.quantity = quantity;

}

// StoragePosition.prototype.sell = function (amount, farm) {
//     if (amount){
//
//
//     }
//     else if (amount <== this.quantity){
//         Farm.income = this.product.price * amount;
//     }
// };