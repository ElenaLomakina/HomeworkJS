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
            var resourceBlock = field.querySelector("." + self.product.name);
            var resourceInfo = document.createElement("div");
            resourceInfo.classList.add("info");
            resourceInfo.innerHTML = "<b>" + self.product.name + "s are already ripe</b>";
            resourceBlock.appendChild(resourceInfo);
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

GardenResource.prototype.getHarvest = function () {
    if (!this.isReadyForHarvesting()){
        console.log("The garden was not seeded or products haven't ripe yet");
    }
    else {
        this.seed = false;
        return this.productivity;
    }
};
