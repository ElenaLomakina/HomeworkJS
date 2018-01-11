//------------------------- check -----------------------


var apple = new Product("apple", "lightgreen", 20);
var plum = new Product("plum", "plum", 40);
var cherry = new Product("cherry", "red", 50);

var appleGarden = new GardenResource("fruit", apple, 200, 40, 5);
var plumGarden = new GardenResource("fruit", plum, 160, 20, 4);
var cherryGarden = new GardenResource("fruit",cherry, 140, 20, 3);

var myFarm = new Farm();

var appleGarden1 = appleGarden.clone();



myFarm.addResource(appleGarden);
myFarm.addResource(appleGarden1);
myFarm.addResource(plumGarden);
myFarm.addResource(cherryGarden);

console.log(apple);
console.log(plum);
console.log(cherry);

// console.log(appleGarden);
// console.log(appleGarden1);
// console.log(plumGarden);
// console.log(cherryGarden);

console.log(myFarm);

plumGarden.plant();
appleGarden.plant();

setTimeout(function(){plumGarden.getHarvestTo(myFarm)}, 9000);
setTimeout(function(){console.log("plumGarden.ripe: ", plumGarden.ripe)}, 10000);

setTimeout(function(){appleGarden.getHarvestTo(myFarm)}, 9000);
setTimeout(function(){console.log("appleGarden.ripe: ", appleGarden.ripe)}, 10000);

setTimeout(function(){appleGarden.plant()}, 11000);
setTimeout(function(){appleGarden.getHarvestTo(myFarm)}, 20000);

setTimeout(function(){appleGarden.plant()}, 21000);
setTimeout(function(){appleGarden.getHarvestTo(myFarm)}, 30000);

setTimeout(function(){myFarm.sellProducts(apple, 200)}, 50000);
setTimeout(function(){myFarm.sellProducts()}, 55000);
