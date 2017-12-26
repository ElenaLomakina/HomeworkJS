// MilitaryResource.prototype.isReadyToMove;                                    +
// MilitaryResource.prototype.isReadyToFight;                                   +
// MilitaryResource.prototype.restore;                                          +
// MilitaryResource.prototype.clone;                                            +
//
// Squad.prototype.areResourcesReadyToMove;
// Squad.prototype.isResourcesReadyToFight;
// Squad.prototype.restoreResources;
// Squad.prototype.getReadyToMoveResources;
// Squad.prototype.combineResources;
// Squad.prototype.cloneResource;

function MilitaryResource(type, health, distance, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = 100;
    this.distance = distance;
    this.maxDistance = maxDistance;
}


MilitaryResource.prototype.isReadyToMove = function (dist) {
    return dist <= this.distanceAvailable;
};

MilitaryResource.prototype.isReadyToFight = function (loss) {
    return loss >= this.maxHealth - this.health;
};


MilitaryResource.prototype.restore = function () {
    this.health = this.maxHealth;
};

MilitaryResource.prototype.clone = function () {
    return Object.assign({}, this);
};


// function Squad() {
//     this.squad = [];
//
// }
// Squad.prototype.areResourcesReadyToMove = function (dist) {
//     return this.squad.every (function (value) { return value.isReadyToMove(dist);})
// };


//--------------- check --------------------------------------------------------------------

var firstResource = new MilitaryResource("warrior", 90, 100, 200);


console.log(firstResource);

console.log(firstResource.isReadyToMove(150));

console.log(firstResource.isReadyToFight(40));

var newCloneResource = firstResource.clone();

console.log(newCloneResource);

firstResource.restore();


var secondResource = new MilitaryResource("horse", 80, 500, 700);
console.log(secondResource);

// var mySquad = new Squad;
//
// console.log(mySquad);

