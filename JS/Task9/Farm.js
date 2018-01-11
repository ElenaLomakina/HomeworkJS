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

    // resourceBlock.addEventListener("mousedown", function () {
    //     this.classList.add("active");
    // });

    resourceBlock.style.backgroundColor = curResource.product.color;
    resourceBlock.classList.add("resource");
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
    this.resources.forEach(function (value) {
        value.getHarvestTo(self)
    })
};

Farm.prototype.sellProducts = function (product, quantity) {
    var self = this;
    if (product){
        var existPosition = this.storage.find(function (element){
            return element.product.name === product.name;
        });
    }
    if(existPosition){
        var positionBlock = storage.querySelector("." + existPosition.product.name);
        var positionQuantity = positionBlock.querySelector(".position-quantity");
    }

    if (quantity && existPosition){
        if(quantity <= existPosition.quantity) {
            this.income +=  product.price * quantity;
            existPosition.quantity -= quantity;
            positionQuantity.innerHTML = "<span>Quantity: </span>" + existPosition.quantity;
        }
        else {throw new Error("The quantity of this product is not enough");}
    }
    else if (existPosition && !quantity){
        this.income +=  product.price * existPosition.quantity;
        existPosition.quantity = 0;
        positionQuantity.innerHTML = "<span>Quantity: </span>" + existPosition.quantity;
    }
    else if (product && !existPosition)
    {throw new Error("This product don't exist in storage");}
    else {
        this.storage.forEach(function(position) {
            self.income += position.product.price * position.quantity;
            position.quantity = 0;
            var positionBlock = storage.querySelector("." + position.product.name);
            var positionQuantity = positionBlock.querySelector(".position-quantity");
            positionQuantity.innerHTML = "<span>Quantity: </span>" + position.quantity;
        })
    }
};

// StoragePosition.prototype.sell = function (amount, farm) {
//     if (amount){
//
//
//     }
//     else if (amount <== this.quantity){
//         Farm.income = this.product.price * amount;
//     }
// };