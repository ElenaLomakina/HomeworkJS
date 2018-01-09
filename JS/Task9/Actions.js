//------------------------- check -----------------------


var apple = new Product("apple", "lightgreen", 20);
var plum = new Product("plum", "plum", 40);
var cherry = new Product("cherry", "red", 50);

var appleGarden = new GardenResource("fruit", apple, 200, 20, 5);
var plumGarden = new GardenResource("fruit", plum, 160, 20, 4);

var myFarm = new Farm();

var appleGarden1 = appleGarden.clone();



myFarm.addResource(appleGarden);
myFarm.addResource(appleGarden1);
myFarm.addResource(plumGarden);


console.log(appleGarden);
console.log(appleGarden1);
console.log(plumGarden);

console.log(myFarm);

console.log(apple);
console.log(plum);

console.log(appleGarden.isReadyForPlanting());
plumGarden.plant();
appleGarden.plant();
appleGarden.getHarvestTo(myFarm);
plumGarden.getHarvestTo(myFarm);
appleGarden.plant();
appleGarden.getHarvestTo(myFarm);
appleGarden.plant();
appleGarden.getHarvestTo(myFarm);
appleGarden.plant();
appleGarden1.plant();
plumGarden.plant();