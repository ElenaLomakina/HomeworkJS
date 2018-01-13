function Farm(){
    this.resources = [];
    this.storage = [];
    this.income = 0;
}

Farm.prototype.addResource = function (curResource) {
    this.resources.push(curResource);
    var resourceBlock = document.createElement("div");
    var resourceTitle = document.createElement("h4");
    var resourceList = document.createElement("div");

    // resourceBlock.addEventListener("click", function () {
    //     this.classList.add("active");
    // });

    resourceBlock.style.backgroundColor = curResource.product.color;
    resourceBlock.classList.add("resource", curResource.product.name);
    resourceTitle.classList.add("resource-title");
    resourceTitle.innerHTML = curResource.type;
    resourceList.classList.add("resources-list");
    resourceList.innerHTML = curResource.product.name;

    resourceBlock.appendChild(resourceTitle);
    resourceBlock.appendChild(resourceList);
    field.appendChild(resourceBlock);

};

Farm.prototype.addToStorage = function (position) {
    this.storage.push(position);
    var positionBlock = document.createElement("div");
    var positionTitle = document.createElement("h4");
    var positionQuantity = document.createElement("div");

    positionBlock.style.backgroundColor = position.product.color;
    positionBlock.classList.add("storagePosition", position.product.name);
    positionTitle.classList.add("position-title");
    positionTitle.innerHTML = "<span>Storage position: </span>" + position.product.name;
    positionQuantity.classList.add("position-quantity");
    positionQuantity.innerHTML = "<span>Quantity: </span>" + position.quantity;

    positionBlock.appendChild(positionTitle);
    positionBlock.appendChild(positionQuantity);
    storage.appendChild(positionBlock);

};

Farm.prototype.getHarvest = function(){
    var self = this;
    this.resources.forEach(function (resource) {
        var resourceHarvest = resource.getHarvest();
        var existPosition = self.storage.find(function (element){
            return element.product.name === resource.product.name;
        });
        if(resourceHarvest){
            if (existPosition){
                existPosition.quantity += resourceHarvest;
                var positionBlock = storage.querySelector("." + existPosition.product.name);
                var positionQuantity = positionBlock.querySelector(".position-quantity");
                positionQuantity.innerHTML = "<span>Quantity: </span>" + existPosition.quantity;
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
