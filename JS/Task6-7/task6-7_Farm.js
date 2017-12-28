// 6. Разделить логику предыдущего задания на 3 объекта: ферма, земельный ресурс, плод,
//    Написть 3 конструктора, которые будут реализовывать интерфейс:
//    function Farm();                                                                                                  +
//      Farm.prototype.harvest();                                                                                       +-
//      Farm.prototype.getResource(index);                                                                              +
//
// 7. Дополнить объект farm свойством income и написать метод sellProducts, который будет продавать все продукты,
//  хранящиеся на ферме.

//     Заменить ошибку посева на выбрасывание исключения.
//




function Farm(){
    this.resources = [];
    this.storage = [];
    this.income = 0;
}

Farm.prototype.addResource = function (curResource) {
    this.resources.push(curResource)
};

Farm.prototype.addToStorage = function (position) {
    this.storage.push(position)
};

Farm.prototype.getHarvest = function(){
  this.resources.forEach(function (value) { value.getHarvestTo(myFarm) })          // почему this вместо myFarm не работает?
};


