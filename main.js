let raceNumber = Math.floor(Math.random() * 1000) + 1 // Generate number between 1 and 1000 rather than 0 to 999
let earlyRunner = false
let runnerAge = 28


// Sets early registration number for early registration
if (runnerAge > 17 && earlyRunner === true) {
    raceNumber += 1000
}


// Determines race start time and number
if (runnerAge > 17 && earlyRunner === true) {
    console.log(`You will race at 9:30am, and your number is ${raceNumber}`)
}else if (runnerAge > 17 && earlyRunner === false) {
    console.log(`You will race at 11am, and your number is ${raceNumber}`)
}else  {
    console.log(`You will race at 12:30pm, and your number is ${raceNumber}`)
}
