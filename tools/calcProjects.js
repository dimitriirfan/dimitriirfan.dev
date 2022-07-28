export const calcAverageScore = (scores) => {
    return scores.reduce((bef, aft) => bef + aft) / scores.length
}

export const findMax = (a, b, c) => {
    return Math.max(a, b, c);
}


export const findMin = (a, b, c) => {
    if (a < b && a < c ) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}