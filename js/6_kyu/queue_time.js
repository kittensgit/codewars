const queueTime = (customers, countCheckoutTill) => {
    const checkoutTills = Array(countCheckoutTill).fill(0);
    customers.forEach((element) => {
        const min = checkoutTills.indexOf(Math.min(...checkoutTills));
        checkoutTills[min] += element;
    });
    return Math.max(...checkoutTills);
};

console.log(queueTime([], 1));
