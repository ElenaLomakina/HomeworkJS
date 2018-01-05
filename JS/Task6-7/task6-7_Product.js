
//  6. function Product(type);                                                                                  +
//  7. Дополнить объект Product свойством cost, которое будет отражать стоимость продукта для продажи.          +

function Product(type, price) {
    this.type = type;
    this.price = price;
}

function StoragePosition(product, quantity) {
    this.product = product;
    this.quantity = quantity;

}

