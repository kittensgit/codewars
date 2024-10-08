const bmi = (weight, height) => {
    const bmi = weight / Math.pow(height, 2);
    return bmi <= 18.5
        ? 'Underweight'
        : bmi <= 25.0
        ? 'Normal'
        : bmi <= 30
        ? 'Overweight'
        : 'Obese';
};
