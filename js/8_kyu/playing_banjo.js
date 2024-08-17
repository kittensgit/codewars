const areYouPlayingBanjo = (name) =>
    name.toLowerCase().charAt(0) === 'r'
        ? `${name} plays banjo`
        : `${name} does not play banjo`;

console.log(areYouPlayingBanjo('rolf'));
