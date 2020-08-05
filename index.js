//Andrés Kaminker

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const PrintModes = { //Usar para especificar el modo de impresión 
    FULL: 1,
    REDUCED: 2,
}

const separator = () => {
    console.log("=============================");
}


const filterVehicleByLetter = (vehicles, letterToSearch) => vehicles.filter(vehicle =>vehicle.nameHasLetter(letterToSearch)) //Me guarda una array con todos los vehículos que contengan esa letra


const findVehicleWithLetter = (vehicles, letterToSearch) => { //Funciona para un único vehículo
    let elements = filterVehicleByLetter(vehicles, letterToSearch);
    let toPrint;
    if(elements.length > 0){
        toPrint = `Vehículo que contiene en el modelo la letra '${letterToSearch}': ${elements[0].getPricedData()}`;
    }
    else{
        toPrint `Ningún vehículo contiene en el modelo la letra '${letterToSearch}'}`;
    }
   
    console.log(toPrint);
}

const Vehicle = (vehicleBrand, vehicleModel, vehicleCharacteristics, vehiclePrice, vehicleIsCar) => {
    const brand = vehicleBrand;
    const model = vehicleModel;
    const characteristics = vehicleCharacteristics;
    const price = vehiclePrice;
    const isCar = vehicleIsCar;
    return {
        printFullData: () => console.log(`Marca: ${brand} // Modelo: ${model} // ${isCar ? "Puertas" : "Cilindrada"}: ${characteristics} // Precio: ${formatter.format(price)}`),
        nameHasLetter: (letter) => model.includes(letter),
        printShortData: () => console.log(`${brand} ${model}`),
        displayNamedData: () => `${brand} ${model}`,
        getPricedData: () => `${brand} ${model} ${formatter.format(price)}`,
        get price() {
            return price;
        }

    }
}

const printAllElements = (arr, mode) => {
    if(mode === PrintModes.FULL){
        arr.forEach(element => {
            element.printFullData();
        });
    }
    else if(mode === PrintModes.REDUCED){
        arr.forEach(element => {
            element.printShortData();
        });
    }
}

vehicles = [
    Vehicle("Peugot", "206", "4", 200000.0, true),
    Vehicle("Honda", "Titan", "125c", 60000.0, false),
    Vehicle("Peugot", "208", "5", 2500000.0, true),
    Vehicle("Yamaha", "YBR", "160c", 80500.0, true),
];



printAllElements(vehicles,PrintModes.FULL);
separator();
vehicles.sort((a, b) => b.price - a.price); //Ordena de mayor a menor.
console.log(`Vehiculo más caro: ${vehicles[0].displayNamedData()} `);
console.log(`Vehiculo más barato: ${vehicles[vehicles.length - 1].displayNamedData()}`);
findVehicleWithLetter(vehicles, "Y");
separator();
printAllElements(vehicles,PrintModes.REDUCED);


