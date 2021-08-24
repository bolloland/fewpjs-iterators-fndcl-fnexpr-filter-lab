// Code your solution here

function findMatching(driversArray, string) {
    return driversArray.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string)