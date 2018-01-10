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


GardenResource.prototype.getHarvestTo = function(farm){
    var self = this;
    var existPosition = farm.storage.find(function (element){

        return element.product.type === self.product.type;
    });

    if (!this.seed){
        return console.log("The pane was not seeded");
    }
    else if (existPosition){
        existPosition.quantity += this.productivity;
        var positionBlock = storage.querySelector("." + existPosition.product.type);
        var positionQuantity = positionBlock.querySelector(".position-quantity");
        positionQuantity.innerHTML = "Quantity: " + existPosition.quantity;
        this.seed = false;
    }
    else {
        farm.addToStorage(new StoragePosition(this.product, this.productivity));
        this.seed = false;
    }
};
