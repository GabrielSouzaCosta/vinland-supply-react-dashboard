export default function() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const hoursArr = [];

    for (let i = 0; i <= hours; i++) {
        let hourStr = i.toString().padStart(2, '0');
        hoursArr.push(`${hourStr}:00`);
    }

    if (minutes !== 0) {
        let lastHour = hoursArr[hoursArr.length - 1]; 
        let lastHourParts = lastHour.split(':'); 
        let lastHourNum = parseInt(lastHourParts[0]); 
        let nextHourNum = lastHourNum + 1; 
        let nextHourStr = nextHourNum.toString().padStart(2, '0');
        let nextHour = `${nextHourStr}:00`; 
        hoursArr.push(nextHour);
    }

    return hoursArr;
}