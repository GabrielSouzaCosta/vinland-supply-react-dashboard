export default function() {
    const now = new Date(); // get current date and time
    const hours = now.getHours(); // get current hour (0-23)
    const minutes = now.getMinutes(); // get current minute (0-59)
    const hoursArr = []; // initialize empty array to hold hours

    for (let i = 0; i <= hours; i++) {
        let hourStr = i.toString().padStart(2, '0'); // convert hour to string and pad with leading 0 if necessary
        hoursArr.push(`${hourStr}:00`); // add hour to array in format "hh:00"
    }

    if (minutes !== 0) {
        let lastHour = hoursArr[hoursArr.length - 1]; // get last hour in array
        let lastHourParts = lastHour.split(':'); // split last hour into parts
        let lastHourNum = parseInt(lastHourParts[0]); // convert hour part to number
        let nextHourNum = lastHourNum + 1; // get next hour number
        let nextHourStr = nextHourNum.toString().padStart(2, '0'); // convert next hour number to string and pad with leading 0 if necessary
        let nextHour = `${nextHourStr}:00`; // create next hour string in format "hh:00"
        hoursArr.push(nextHour); // add next hour to array
    }

    return hoursArr;
}