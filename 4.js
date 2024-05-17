const car = {
    make: "BMW",
    model: "Z4",
    year: 2023
}
function PropertyCheck(obj,propertyname){
    console.log(`${obj.hasOwnProperty(propertyname)}`)
}
PropertyCheck(car,'model')
PropertyCheck(car,'owner')