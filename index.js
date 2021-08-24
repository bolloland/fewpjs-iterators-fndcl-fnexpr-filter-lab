// Code your solution here

function findMatching(driversArray, string) {
    return driversArray.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    let x = string.length
    return drivers.filter(name => name.substring(0, x-1) === string)
}