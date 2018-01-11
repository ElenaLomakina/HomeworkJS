function GardenResource (type, product, productivity, maturationPerTick, durability) {
    // this.checkProduct();
    this.type = type;
    this.product = product;
    this.seed = false;
    this.ripe = false;
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

GardenResource.prototype.maturation = function () {
    var ready = 0;
    var self = this;
    var intervalId = setInterval(function () {
        ready += self.maturationPerTick;
        if (ready === self.productivity){
            clearInterval(intervalId);
            self.ripe = true;
        }
    }, 1000);
};

GardenResource.prototype.isReadyForHarvesting = function(){
    return this.seed && this.ripe;
};

GardenResource.prototype.restore = function(){
    return this.depletion = this.durability;
};

GardenResource.prototype.plant = function() {
    if (this.isReadyForPlanting()){
        this.seed = true;
        this.depletion ++;
        this.maturation();
    }
    else {
        return console.log("You can't plant there now. The ground either was already planted or needs to be restored");
    }
};


GardenResource.prototype.getHarvestTo = function(farm){
    var self = this;
    var existPosition = farm.storage.find(function (element){

        return element.product.name === self.product.name;
    });


    if (!this.isReadyForHarvesting()){
        return console.log("The pane was not seeded");
    }
    else if (existPosition){
        existPosition.quantity += this.productivity;
        var positionBlock = storage.querySelector("." + existPosition.product.name);
        var positionQuantity = positionBlock.querySelector(".position-quantity");
        positionQuantity.innerHTML = "<span>Quantity: </span>" + existPosition.quantity;
        this.seed = false;
    }
    else {
        farm.addToStorage(new StoragePosition(this.product, this.productivity));
        this.seed = false;
    }
};
