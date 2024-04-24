let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2

};

for(let car in statistics){
    //prints out all cars stats if the name starts with an r
    if(car[0] === 'r'){
        console.log(car + ':' + statistics[car] + ' ' + 'starts with r');
    }

    //if the value of the property is an odd number
    if(statistics[car] % 2 != 0){
        console.log(car + ':' + statistics[car] + ' ' + 'odd number');
    }
}