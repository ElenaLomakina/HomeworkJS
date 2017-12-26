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


function Product(type, cost) {
    this.type = type;
    this.cost = cost;
}


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



function Farm(){
    this.resources = [];
    this.income = 0;
}


Farm.prototype.getResource = function (curResource) {
    this.resources = this.resources.push(curResource);
};


var apple = new Product("apple", 20);
var appleResource = new LandResource("apple", apple, 200, 5, false);
var myFarm = new Farm();

var appleResource1 = appleResource.clone;



myFarm.getResource(appleResource);

console.log(appleResource);
console.log(appleResource1);

console.log(myFarm);

console.log(apple);