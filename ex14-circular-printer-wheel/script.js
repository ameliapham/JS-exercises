function getTime(s) {
    let totalTime = 0;
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let currentPosition = alphabet.indexOf("A");

    for (let i = 0; i < s.length; i++) {
        const targetPosition = alphabet.indexOf(s[i]);
        const directDistance = Math.abs(targetPosition - currentPosition);
        const reverseDistance = alphabet.length - directDistance;
        totalTime += Math.min(directDistance, reverseDistance);
        currentPosition = targetPosition;
    }

    return totalTime;
}

const x = getTime("BDZE")
console.log(x)