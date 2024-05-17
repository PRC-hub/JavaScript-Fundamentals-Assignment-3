const car = {
    make: "BMW",
    model: "Z4",
    year: 2023
}
function propertiesCount(car){
    console.log(`${Object.keys(car).length}`)
}
propertiesCount(car)