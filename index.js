// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    };
}

const fareDoubler = createFareMultiplier(2);

console.log(fareDoubler(10)); 

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}



console.log(returnFirstTwoDrivers(drivers)); // This one will give two names: Antonia and Nuru
console.log(returnLastTwoDrivers(drivers)); 
console.log(selectingDrivers);
console.log(createFareMultiplier(4)(10));
console.log(fareTripler(10));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
