export const secondsToTime = (e) => {
    const h = Math.floor(e / 3600).toString().padStart(2, '0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
        s = Math.floor(e % 60).toString().padStart(2, '0');

    if (h !== "00") {
        return h + ':' + m + ':' + s;
    } else {
        return m + ':' + s;
    }
}

export const calculateTimeSpent = (currentTime, pizzaTime) => {
    return secondsToTime((currentTime - pizzaTime) / (1000));
};