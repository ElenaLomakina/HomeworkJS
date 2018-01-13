function Product(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

function StoragePosition(product, quantity) {
    this.product = product;
    this.quantity = quantity;

}

StoragePosition.prototype.sellProducts = function(quantity){
    var income;
    if (!quantity){
        income = this.product.price * this.quantity;
        this.quantity = 0;
    }
    else if (quantity > this.quantity){
        throw new Error("The quantity of this product is not enough");
    }
    else {
        income = this.product.price * quantity;
        this.quantity -= quantity;
    }
    return income;
};
