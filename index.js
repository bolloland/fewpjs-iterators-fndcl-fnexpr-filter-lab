// Code your solution here

function findMatching(driversArray, string) {
    return driversArray.filter(name => name.toLowerCase() === string.toLowerCase())
}
//CHARACTER MATCH
function fuzzyMatch(drivers, string) {
    return drivers.filter( name => {
        return name.toLowerCase().indexOf(string.toLowerCase()) == 0
    })
}

function matchName(drivers, string) {
    return drivers.filter( obj => obj["name"].toLowerCase() === string.toLowerCase())
}