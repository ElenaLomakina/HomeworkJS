// ----------------------------------------------- Task 1. Exchange  ---------------------------------------------------

// var cur1, cur2, sum1, sum2;
// var rateUSD = 28;
// var rateEUR = 33;
//
// var change = {
//     "USD": {
//         "USD": 1,
//         "EUR": rateUSD / rateEUR,
//         "UAH": rateUSD
//     },
//     "EUR": {
//         "USD": rateEUR / rateUSD,
//         "EUR": 1 ,
//         "UAH": rateEUR
//     },
//     "UAH": {
//         "USD": 1 / rateUSD,
//         "EUR": 1 / rateEUR,
//         "UAH": 1
//     }
// };
//
// var curNames = Object.keys(change);
//
// function exchange( from, to) {
//     return Math.round( change[from][to] * sum1 * 100) / 100;
// }
//
// cur1 = prompt("Choose the currency you want to exchange: USD, EUR, UAH");
// cur2 = prompt("Choose the currency to which you want to change: USD, EUR, UAH");
// sum1 = prompt("Enter your sum");
//
// var isCorrect1 = curNames.some(function(cur){
//     return cur1 === cur;
// });
//
// var isCorrect2 = curNames.some(function(cur){
//     return cur2 === cur;
// });
//
// var isCorrect = isCorrect1 && isCorrect2;
//
// if (!isCorrect) {
//     alert("Sorry, we can not exchange this currency");
// }
// else{
//     if (isNaN(Number(sum1))) {
//         alert("Sum is not a number")
//     }
//     else{
//         sum2 = exchange(cur1, cur2);
//         alert( sum1 +" " + cur1 + " is " + sum2 + " " + cur2);
//     }
// }


// -----------------------------------------------  Task 2. Squad  -----------------------------------------------------

var myArmy = [];
var anotherArmy = [];


// a.  Adding resources to myArmy -----------------------------------------------------------------------------

function addResource(arr, type, name, health, livesLeft, livesMax, distAvailable, distMax) {
    var obj = {
        "type": type,
        "name": name,
        "health": health,
        "livesLeft": livesLeft,
        "livesMax": livesMax,
        "distanceAvailable": distAvailable,
        "distanceMax": distMax
    };
    arr.push(obj);
}



// b. function check, can i-th resource move on or not.  ------------------------------------------------------

function canMoveOn(i) {
    if (i === undefined) {
        return myArmy.every(function(obj){return obj.distanceAvailable > 0;});
    }
    else {
        var obj = myArmy[i];
        return obj.distanceAvailable > 0;
    }
}

function answerCanMove(i) {
    if (i === undefined) {
        return canMoveOn(i)? "The whole army can move on." :  "The whole army can't move on today. Somebody needs rest.";
    }
    else {
        var res = myArmy[i];
        var resName = res.name;
        return canMoveOn(i)? resName + " can move on.":  resName + " can't move on today. His limit was reached, he needs rest.";
    }
}


// c. function enlarges  health to max for i-element of army, or for each elements, if "i" wasn't pointed -----

function getHealth(i) {
    if (i === undefined) {
        myArmy.forEach(function(obj){obj.health = 1;} );
    }
    else {
        var obj = myArmy[i];
        obj.health = 1;
    }
}


// d. function enlarges available distance to max for i-element of army, or for each elements, if "i" wasn't pointed

function getRest(i) {
    if (i === undefined) {
        myArmy.forEach(function(obj){obj.distanceAvailable = obj.distanceMax;} );
    }
    else {
        var obj = myArmy[i];
        obj.distanceAvailable = obj.distanceMax;
    }
}


// e. function return array of resources, who can move on , whose available distance less then given ----------

function whoCanGo(dist) {
    return myArmy.filter(function (value) {
        return value.distanceAvailable > dist; });
}


// f.	function unites two arrays ----------------------------------------------------------------------------

function unite(arr) {
    return myArmy.concat(arr);
}

// g. function check, ready every resource of army for battle or not.  ----------------------------------------

function isReadyForBattle(loss) {
    return myArmy.every(function (value) {
        return value.health >= 1 - loss;
    });
}

// h.	function rebuilds arr in order [index1, index2, ...]  -------------------------------------------------

function rebuilding(arr, index1, index2) {
    var newArr = arr.map(function (value) { return value });
    var arg = Array.prototype.slice.call(arguments, 1);
    for (var i=0; i< arr.length; i++){
        newArr[i] = arr[arg[i]];
    }
    return newArr;
}


// i.	function clones object by index in array. -------------------------------------------------------------

function getCloneElement(arr, index) {
    return Object.assign({}, arr[index]);
}


//--------------- check ---------------------------------------------------------------------------------------
// addResource(myArmy, "warrior", "Vedmak", 0.7, 5, 7, 13, 20);
// addResource(myArmy, "horse", "Bolivar", 0.5, 1, 3, 30, 50);
// addResource(myArmy, "machine", "Bumblebee", 0.6, 6, 10, 0, 500);
//
// console.log(myArmy);
// console.log(answerCanMove());
// console.log(answerCanMove(2));
// console.log("They can move on: ", whoCanGo(50));
//
// getHealth(0);
// getRest(2);
//
// console.log(answerCanMove());
// console.log("They can move on: ", whoCanGo(50));
//
// addResource(anotherArmy, "warrior", "Darth Vader", 0.8, 4, 7, 15, 20);
// addResource(anotherArmy, "machine", "R2D2", 1, 20, 30, 5, 10);
//
// var unitedArmy = unite(anotherArmy);
// console.log(unitedArmy);
//
// console.log(isReadyForBattle(0.5));
//
// console.log(rebuilding(myArmy, 2, 0, 1));
// console.log(rebuilding(unitedArmy, 0, 3, 1, 2, 4));
//
// console.log(getCloneElement(myArmy, 2));


// ------------------------------------------------  Task 2. Farm  -----------------------------------------------------

// Создать 2 массива, в одном из которых будут храниться единицы земельных участков, приносящих плоды, в другом - сами плоды.

//  `b. Написать функцию проверки готовности каждой, либо указанной (индекс) единицы ЗР для сборки.
//


var farm = [];
var harvest = [];


//  a. Написать функцию, аргументами которой будут: название участка, название производимого ресурса, количество единиц прироста при готовности сбора ресурсов, изношенность ЗР (земельного ресурса), флагом засеянности (засеян/нет) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean.
//  Функция должна создавать объект и добавлять его в массив земельных участков.
//      function adds resources to farm ------------------------------------------------------------------

function addResourceToFarm (type, product, income, durability, seed) {
    var obj = {
        "type": type,
        "product": product,
        "income": income,
        "durability": durability,
        "seed": seed
    };
    farm.push(obj);
}


//  c. Написать функцию вывода информации о количестве единиц плодов, сгенерированных данным ЗР.
//      function returns quantity of products generated by this land resource or by the whole farm ---------

function productsFromResource(index) {
    if (index === undefined) {
        return farm.reduce(function(prevVal, curVal) {
            return prevVal + curVal.income;
        }, 0)
    }
    else {
        var obj = farm[index];
        return obj.income;
    }
}


//  d. Написать функцию проверки всех / каждого ЗР на готовность к следующему посеву.
//      function check, if ready index-th (or all) resource for planting or not.  --------------------------

function isReadyForPlanting(index) {
    if (index || index === 0) {
        var obj = farm[index];
        return !obj.seed;
    }
    else {
        return farm.every(function(obj){return !obj.seed;});
    }
}

function messageIsReadyForPlanting(index) {
    return isReadyForPlanting(index)? "You can planting there.": "You can't planting there yet."
}


//  e. Написать функцию сбора плодов. При сборе объект ЗР должен обновляться ( ЗР не засеян и т.д. ) и дополняться массив плодов соответствующими объектами.
//      function gets harvest from index-th resource and puts it to array "harvest".  -----------------------

function getHarvest(index) {
    var obj = farm[index];
    var exist = harvest.find(function (element){return element.product === obj.product});
    if (!obj.seed){
        return console.log("The pane was not seeded");
    }
    else if (exist){
        exist.quantity += obj.income;
        obj.seed = false;
    }
    else {
        var newObj = {
            "product": obj.product,
            "quantity": obj.income
        };
        harvest.push(newObj);
        obj.seed = false;
    }
}


//  f. Написать функцию, которая “сеет семена” на ЗР. (не забываем обновлять изношенность)
//      function sows seeds in index-th resource and reduce durability -------------------------------------

function sowSeeds(index) {
    var obj = farm[index];
    if (obj.seed){
        return console.log("The pane was already seeded");
    }
    else {
        obj.seed = true;
        obj.durability --;
    }
}


//--------------- check farm ----------------------------------------------------------------------------
addResourceToFarm("pane", "apple", 200, 5, false);
addResourceToFarm("pane", "carrot", 100, 10, false);
addResourceToFarm("pane", "cucumber", 150, 10, true);

console.log(farm);

console.log(productsFromResource(2));
console.log(productsFromResource());

console.log(messageIsReadyForPlanting(1));
console.log(messageIsReadyForPlanting());

getHarvest(1);
sowSeeds(2);
getHarvest(2);
console.log(harvest);
sowSeeds(0);
sowSeeds(1);

getHarvest(0);
getHarvest(1);
sowSeeds(2);
getHarvest(2);
sowSeeds(0);
getHarvest(0);
getHarvest(2);

