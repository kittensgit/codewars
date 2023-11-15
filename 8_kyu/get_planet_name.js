const planetNamesByNumber = {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
};

const getPlanetName = (id) => {
    let planet;
    Object.keys(planetNamesByNumber).forEach((numPlanet) => {
        if (numPlanet == id) {
            planet = planetNamesByNumber[id];
        }
    });
    return planet;
};
