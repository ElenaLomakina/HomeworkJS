function Farm(){
    this.resources = [];
    this.storage = [];
    this.income = 0;
}

Farm.prototype.addResource = function (curResource) {
    this.resources.push(curResource);
    curResource.createBlock();
    var resourceBlocks = field.querySelectorAll(".resource");
    curResource.block = resourceBlocks[resourceBlocks.length - 1];
};

Farm.prototype.addToStorage = function (position) {
    this.storage.push(position);
    position.createBlock();
    var positionBlocks = storage.querySelectorAll(".storagePosition");
    position.block = positionBlocks[positionBlocks.length - 1];
};

Farm.prototype.getHarvest = function(){
    var self = this;
    this.resources.forEach(function (resource) {
        var resourceHarvest = resource.isReadyForHarvesting()? resource.getHarvest(): 0;
        var existPosition = self.storage.find(function (element){
            return element.product.name === resource.product.name;
        });
        if(resourceHarvest){
            if (existPosition){
                existPosition.quantity += resourceHarvest;
                var positionQuantity = existPosition.block.querySelector(".position-quantity");
                blockContent(positionQuantity, "<span>Quantity: </span>" + existPosition.quantity);
            }
            else {
                self.addToStorage(new StoragePosition(resource.product, resourceHarvest));
            }
        }
    })
};

Farm.prototype.sellProducts = function (product, quantity){
    var self = this;
    var incomeBlock = market.querySelector(".income");
    if (!product){
        this.storage.forEach(function(position) {
            self.income += position.sellProducts(quantity);
            var positionBlock = storage.querySelector("." + position.product.name);
            var positionQuantity = positionBlock.querySelector(".position-quantity");
            positionQuantity.innerHTML = "<span>Quantity: </span>" + position.quantity;
        });
    }
    else {
        var existPosition = this.storage.find(function (element){
            return element.product.name === product.name;
        });
        if(existPosition){
            this.income += existPosition.sellProducts(quantity);
            var positionBlock = storage.querySelector("." + existPosition.product.name);
            var positionQuantity = positionBlock.querySelector(".position-quantity");
            positionQuantity.innerHTML = "<span>Quantity: </span>" + existPosition.quantity;
        }
        else {
            throw new Error("This product don't exist in storage");
        }
    }
    incomeBlock.innerHTML = "<span>Income: </span>" + this.income;
};
