function Product(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
    if (price < 0) {
        throw RangeError("One can't create  a product" +
            this.name + " with a negative price");
    }
}

function StoragePosition(product, quantity) {
    this.product = product;
    this.quantity = quantity;
}

StoragePosition.prototype.createBlock = function () {
    var block = create(storage, "div", ["storagePosition", this.product.name]);
    blockContent(block, "", this.product.color);
    var name = create(block, "h4", ["position-name"]);
    blockContent(name, this.product.name);
    var quantity = create(block, "h4", ["position-quantity"]);
    blockContent(quantity, "<span>Quantity: </span>" + this.quantity);
};

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
