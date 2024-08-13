const goodRaces = {
    hobbits: 1,
    men: 2,
    elves: 3,
    dwarves: 3,
    eagles: 4,
    wizards: 10,
};

const evilRaces = {
    orcs: 1,
    men: 2,
    wargs: 2,
    goblins: 2,
    uruk_hai: 3,
    trolls: 5,
    wizards: 10,
};

const goodVsEvil = (good, evil) => {
    const goodList = Object.values(goodRaces);
    const evilList = Object.values(evilRaces);

    const calcPower = (raceValues, raceList) =>
        raceValues
            .split(' ')
            .reduce(
                (acc, currVal, index) =>
                    acc + Number(currVal) * raceList[index],
                0
            );

    const goodPower = calcPower(good, goodList);
    const evilPower = calcPower(evil, evilList);

    if (goodPower > evilPower) {
        return 'Battle Result: Good triumphs over Evil';
    } else if (evilPower > goodPower) {
        return 'Battle Result: Evil eradicates all trace of Good';
    } else {
        return 'Battle Result: No victor on this battle field';
    }
};

console.log(goodVsEvil('1 1 1 1 1 1', '1 0 1 1 1 1 1'));
