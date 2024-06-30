// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    const headquartersLocation = 42;
    return (pickUpLocation-headquartersLocation);

}

function distanceFromHqInFeet(pickUpLocation) {
    const blocks = distanceFromHqInBlocks(pickUpLocation);
    const feet = 264
    return (blocks * feet)
}

function distanceTravelledInFeet(start, destination){
    const blockstravelled= (destination-start)
    const feetPerBlock = 264
    return blockstravelled * feetPerBlock



}

function calculatesFarePrice(start, destination){
    const distance=distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }


}

console.log(distanceFromHqInBlocks(34));
console.log(distanceFromHqInFeet(34));
console.log(distanceTravelledInFeet(34, 28))
console.log(calculatesFarePrice(34, 32))