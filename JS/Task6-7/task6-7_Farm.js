// 6. Разделить логику предыдущего задания на 3 объекта: ферма, земельный ресурс, плод,
//    Написть 3 конструктора, которые будут реализовывать интерфейс:
//    function Farm();                                                                                                  +
//      Farm.prototype.harvest();
//      Farm.prototype.getResource(index);
//
//    function Resource(type, product, income, durability);                                                             +
//      Resource.prototype.harvest();
//      Resource.prototype.restore();
//      Resource.prototype.isReadyForPlanting();
//      Resource.prototype.plant();
//      Resource.prototype.clone();
//
//    function Product(type);                                                                                           +
//
//  7. Дополнить объект Product свойством cost, которое будет отражать стоимость продукта для продажи.                  +
//     Дополнить объект farm свойством income и написать метод sellProducts, который будет продавать все продукты,
//  хранящиеся на ферме.
//     Написать функцию, которая с одинаковым таймаутом будет обновлять объекты Resource до тех пор, пока количество
//  готовых к сборке продуктов не будет исчерпано. Если ЗР произвел максимальное кол-во ресурсов - больше не обновлять.
//  По заполнению кол-ва выводить информацию о готовых к сборке ЗР фермы.
//     Заменить ошибку посева на выбрасывание исключения.
//

function LandResource (type, product, productivity, durability, seed) {
    this.type = type;
    this.product = product;
    this.productivity = productivity;
    this.durability = this.durabilityMax = durability;
    this.seed = seed;
}


LandResource.prototype.clone = function () {
    return new LandResource(this.type, this.product, this.productivity, this.durability, this.seed)
};


function Product(type) {
    this.type = type;
}

Product.prototype.cost = function (val) {
    this.cost = val;
};

function Farm(){
    this.resources = [];
}


// Farm.prototype.getResource = function (resource) {
//     this.resources = this.resources.push(resource);
// };

var pane1 = new LandResource("pane", "apple", 200, 5, false);
var apple = new Product("apple");
var myFarm = new Farm();

var pane2 = pane1.clone;

apple.cost = 20;

// myFarm.getResource = pane;

console.log(pane1);
console.log(pane2);

console.log(myFarm);

console.log(apple);