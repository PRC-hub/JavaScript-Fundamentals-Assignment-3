const car = {
    make: "BMW",
    model: "Z4",
    year: 2023
}
function display(car){
    for(let i in car)
        console.log(`${i} : ${car[i]}`)
}
display(car)