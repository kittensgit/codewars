const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
    mpg * fuelLeft >= distanceToPump;

console.log(zeroFuel(50, 100, 2));
