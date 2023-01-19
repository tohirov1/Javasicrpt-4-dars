let elForm = document.querySelector(".form")
let elInput = document.querySelector(".form-input")

let elWalk = document.querySelector(".walk-num")
let elBike = document.querySelector(".bike-num")
let elCar = document.querySelector(".car-num")
let elPlane = document.querySelector(".plane-num")

const WALK = 3.6
const BIKE = 20.1
const CAR = 70
const PLANE = 800

elForm = addEventListener("submit", function (evt) {
    evt.preventDefault();
    const inputVal = +elInput.value; 
    let walkTime = +inputVal / WALK
    let walkhour = Math.floor(walkTime)
    let walkTotalMin = walkTime - walkhour
    let walkMin = Math.floor(walkTotalMin * 60)
    elWalk.textContent = `${walkhour}soat ${walkMin}minut`


    let BikeTime = +inputVal / BIKE
    let Bikehour = Math.floor(BikeTime)
    let biketotalmin = BikeTime - Bikehour
    let bikemin = Math.floor(biketotalmin * 60)
    elBike.textContent = `${Bikehour}soat ${bikemin}minut`

    let CarTime = +inputVal / CAR
    let Carhour = Math.floor(CarTime)
    let Cartotalmin = CarTime - Carhour
    let carmin = Math.floor(Cartotalmin * 60)
    elCar.textContent = `${Carhour}soat ${carmin}minut`

    let Planetime = +inputVal / PLANE
    let Planehour = Math.floor(Planetime)
    let Planetotalmin = Planetime - Planehour
    let planemin = Math.floor(Planetotalmin * 60)
    elPlane.textContent = `${Planehour}soat ${planemin}min`
})
