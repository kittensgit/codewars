// my variant
const likes = (people) =>
    people.length === 0
        ? 'no one likes this'
        : people.length >= 4
        ? `${people.slice(0, 2).join(', ')} and ${
              people.length - 2
          } others like this`
        : people.length > 2
        ? `${people[0]}, ${people.slice(1).join(' and ')} like this`
        : people.length === 1
        ? `${people[0]} likes this`
        : `${people.join(' and ')} like this`;

// chatGPT

const likes1 = (people) => {
    const count = people.length;
    switch (count) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${people[0]} likes this`;
        case 2:
            return `${people[0]} and ${people[1]} like this`;
        case 3:
            return `${people[0]}, ${people[1]} and ${people[2]} like this`;
        default:
            return `${people[0]}, ${people[1]} and ${
                people.length - 2
            } others like this`;
    }
};

console.log(likes(['Alex', 'Alex', 'Alex', 'Alex', 'Alex']));
