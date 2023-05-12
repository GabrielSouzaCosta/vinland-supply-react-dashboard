export default function (min, max, count) {
    const randomNumbersArr = [];
    
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbersArr.push(randomNumber);
    }
    
    return randomNumbersArr;
}