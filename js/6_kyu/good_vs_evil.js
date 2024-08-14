const goodRacesWorth = {
    hobbits: 1,
    men: 2,
    elves: 3,
    dwarves: 3,
    eagles: 4,
    wizards: 10,
};

const evilRacesWorth = {
    orcs: 1,
    men: 2,
    wargs: 2,
    goblins: 2,
    uruk_hai: 3,
    trolls: 5,
    wizards: 10,
};

const goodVsEvil = (good, evil) => {
    const goodListWorth = Object.values(goodRacesWorth);
    const evilListWorth = Object.values(evilRacesWorth);

    const calcWorth = (side, worthList) =>
        side
            .split(' ')
            .reduce(
                (acc, currVal, index) =>
                    acc + Number(currVal) * worthList[index],
                0
            );

    const goodWorth = calcWorth(good, goodListWorth);
    const evilWorth = calcWorth(evil, evilListWorth);

    return goodWorth > evilWorth
        ? 'Battle Result: Good triumphs over Evil'
        : evilWorth > goodWorth
        ? 'Battle Result: Evil eradicates all trace of Good'
        : 'Battle Result: No victor on this battle field';
};

console.log(goodVsEvil('1 1 1 0 1 1', '1 0 1 1 1 1 0'));
