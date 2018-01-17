//------------------------- check -----------------------

var apple = new Product("apple", "lightgreen", 20);
var plum = new Product("plum", "plum", 40);
var cherry = new Product("cherry", "#ff7388", 50);
var banana = new Product("banana", "#F6FF89", 30);

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

console.log(myFarm);

setTimeout(function(){plumGarden.plant()}, 1000);
setTimeout(function(){appleGarden.plant()}, 2000);
setTimeout(function(){appleGarden1.plant()}, 3000);
setTimeout(function(){cherryGarden.plant()}, 3500);

setTimeout(function(){myFarm.getHarvest()}, 11000);

setTimeout(function(){appleGarden.plant()}, 12000);
setTimeout(function(){appleGarden1.plant()}, 12000);
setTimeout(function(){plumGarden.plant()}, 12000);
setTimeout(function(){cherryGarden.plant()}, 15000);

setTimeout(function(){myFarm.getHarvest()}, 23000);

setTimeout(function(){myFarm.sellProducts(apple, 200)}, 24000);
setTimeout(function(){myFarm.sellProducts(plum)}, 28000);
setTimeout(function(){myFarm.sellProducts()}, 34000);

setTimeout(function(){cherryGarden.plant()}, 25000);
setTimeout(function(){myFarm.getHarvest()}, 34000);

setTimeout(function(){cherryGarden.restore()}, 40000);

setTimeout(function(){cherryGarden.plant()}, 45000);
setTimeout(function(){myFarm.getHarvest()}, 55000);

var bananaGarden = new GardenResource("fruit",banana, 150, 30, 10);
setTimeout(function(){myFarm.addResource(bananaGarden)}, 2000);
setTimeout(function(){bananaGarden.plant()}, 5000);
