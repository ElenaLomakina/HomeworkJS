// 6. Разделить логику предыдущего задания на 3 объекта: ферма, земельный ресурс, плод,
//    Написть 3 конструктора, которые будут реализовывать интерфейс:
//    function Farm();                                                                                                  +
//      Farm.prototype.harvest();                                                                                       +
//      Farm.prototype.getResource(index);                                                                              +
//
// 7. Дополнить объект farm свойством income и написать метод sellProducts, который будет продавать все продукты,       +
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
    this.storage.push(position);
    var div = document.createElement("div");
    div.className = position.product.type;
    // var elem = document.getElementById("storage");
    storage.appendChild(div);
    switch (div.className){
        case ("apple"):
            div.setAttribute("style", "background-color:#6eff5d");
            break;
        case ("plum"):
            div.setAttribute("style", "background-color:plum");
            break;
    }
    div.innerHTML = div.className + " " + position.quantity;
};

Farm.prototype.getHarvest = function(){
    var self = this;
    this.resources.forEach(function (value) {
      console.log("window", self);
      value.getHarvestTo(self)
  })          // почему this вместо myFarm не работает?
};


