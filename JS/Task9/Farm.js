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
    resourceBlock.style.height = resourceBlock.style.width;
    resourceBlock.classList.add("resource");
    resourceTitle.classList.add("resource-title");
    resourceTitle.innerHTML = curResource.type;
    resourceList.classList.add("resources-list");
    resourceList.innerHTML = curResource.product.type;

    resourceBlock.appendChild(resourceTitle);
    resourceBlock.appendChild(resourceList);
    field.appendChild(resourceBlock);


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
        value.getHarvestTo(self)
    })
};
