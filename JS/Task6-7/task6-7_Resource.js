//  6.  function Resource(type, product, income, durability);                                                           +
//      Resource.prototype.harvest();                                                                                   +
//      Resource.prototype.restore();                                                                                   +
//      Resource.prototype.isReadyForPlanting();                                                                        +
//      Resource.prototype.plant();                                                                                     +
//      Resource.prototype.clone();                                                                                     +
//
//  7.   Написать функцию, которая с одинаковым таймаутом будет обновлять объекты Resource до тех пор, пока количество
//  готовых к сборке продуктов не будет исчерпано. Если ЗР произвел максимальное кол-во ресурсов - больше не обновлять.
//  По заполнению кол-ва выводить информацию о готовых к сборке ЗР фермы.


function GardenResource (type, product, productivity, maturationPerTick, durability) {
    // this.checkProduct();
    this.type = type;
    this.product = product;
    this.seed = false;
    this.productivity = productivity;
    this.maturationPerTick = maturationPerTick;
    this.durability = durability;
    this.depletion = 0;
}

GardenResource.prototype.checkProduct = function () {
    if (this.product instanceof Product) return;
    throw new Error("Argument product is not instance of Product");
};

GardenResource.prototype.clone = function () {
    return new GardenResource(this.type, this.product, this.productivity, this.maturationPerTick, this.durability, this.seed)
};

GardenResource.prototype.isReadyForPlanting = function(){
    return !this.seed && this.depletion < this.durability;
};

GardenResource.prototype.restore = function(){
    return this.depletion = this.durability;
};

GardenResource.prototype.plant = function() {
    if (this.isReadyForPlanting()){
        this.seed = true;
        this.depletion ++;
    }
    else {
        return console.log("You can't plant there now. The ground either was already planted or needs to be restored");
    }
};

GardenResource.prototype.getHarvestTo = function(farm) {
    if (!this.seed){
        return console.log("The pane was not seeded");
    }
    else {
        for (var i = 0; i < farm.storage.length; i++){
            var obj = farm.storage[i];
            var exist = false;
            if (obj.product.type === this.product.type){
                obj.quantity += this.productivity;
                this.seed = false;
                exist = true;
                break;
            }
        }
        if (!exist){
            farm.addToStorage(new StoragePosition(this.product, this.productivity));
            this.seed = false;
        }
    }
};

// GardenResource.prototype.getHarvestTo = function(farm){
//     var existPosition = farm.storage.find(function (element){
//         console.log(element.product.type);           //это яблоко
//         return element.product === this.product;       //а здесь ложь, а при сравнении  element.product.type === this.product.type  вообще ошибка
//     });
//     console.log(this.product.type);                  //и это яблоко
//     if (!this.seed){
//         return console.log("The pane was not seeded");
//     }
//     else if (existPosition){
//         existPosition.quantity += this.productivity;
//         this.seed = false;
//     }
//     else {
//         farm.addToStorage(new StoragePosition(this.product, this.productivity));
//         this.seed = false;
//     }
// };

