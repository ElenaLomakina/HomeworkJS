function GardenResource (type, product, productivity, maturationPerTick, durability) {
    this.type = type;
    this.product = product;
    this.seed = false;
    this.ripe = false;
    this.productivity = productivity;
    this.maturationPerTick = maturationPerTick;
    this.durability = durability;
    this.depletion = 0;
}

GardenResource.prototype.clone = function () {
    return new GardenResource(this.type, this.product, this.productivity, this.maturationPerTick, this.durability, this.seed)
};

GardenResource.prototype.isReadyForPlanting = function(){
    return !this.seed && this.depletion < this.durability;
};

GardenResource.prototype.isReadyForHarvesting = function(){
    return this.seed && this.ripe;
};

GardenResource.prototype.restore = function(){
    this.depletion = this.durability;
    this.infoBlock.classList.remove("depleted");
    this.infoBlock.classList.add("empty");
    this.infoBlock.innerHTML = this.infoContent();
};

GardenResource.prototype.infoContent = function () {
    var fruit = this.product.name;
    var fruits = fruit.slice(-1) === "y"? fruit.slice(0, -1) + "ies": fruit + "s";
    var content = "";
    if (this.infoBlock.classList.contains("empty")) {content = "one may plant here";}
    else if (this.infoBlock.classList.contains("ripening")) {content = fruits + " are ripening";}
    else if (this.infoBlock.classList.contains("ripe")) {content = fruits + " have already ripened";}
    else if (this.infoBlock.classList.contains("depleted")) {content = "the ground should be restored";}
    return content;
};

GardenResource.prototype.plant = function() {
    if (this.isReadyForPlanting()){
        this.seed = true;
        this.depletion ++;
        this.infoBlock.classList.remove("empty");
        this.infoBlock.classList.add("ripening");
        this.infoBlock.innerHTML = this.infoContent();
        this.maturation();
    }
    else if (this.seed) throw new Error("The ground was already planted");
    else if (this.depletion > this.durability) throw new Error("The ground needs to be restored");
};

GardenResource.prototype.maturation = function () {
    var ready = 0;
    var self = this;
    var intervalId = setInterval(function () {
        ready += self.maturationPerTick;
        if (ready === self.productivity){
            clearInterval(intervalId);
            self.ripe = true;
            self.infoBlock.classList.remove("ripening");
            self.infoBlock.classList.add("ripe");
            self.infoBlock.innerHTML = self.infoContent();
        }
    }, 1000);
};

GardenResource.prototype.getHarvest = function () {
    if (this.isReadyForHarvesting()){
        this.seed = false;
        this.infoBlock.classList.remove("ripe");
        if (this.isReadyForPlanting()) this.infoBlock.classList.add("empty");
        else this.infoBlock.classList.add("depleted");
        this.infoBlock.innerHTML = this.infoContent();
        return this.productivity;
    }
    else  if (!this.seed) throw new Error("The garden wasn't planted");
    else if (!this.ripe) throw new Error("The products haven't ripened yet");
};

GardenResource.prototype.createBlock = function () {
    var block = create(field, "div", ["resource", this.product.name]);
    blockContent(block, "", this.product.color);
    var title = create(block, "div", ["resource-title"]);
    var type = create(title, "h4", ["resource-type"]);
    blockContent(type, this.type);
    var name = create(title, "h4", ["resource-name"]);
    blockContent(name, this.product.name);
    var info = create(block, "div", ["resource-info", "empty"]);
    blockContent(info, "one may plant here");
    this.infoBlock = info;
};
