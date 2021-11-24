const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = array => array.slice(0, 2);

const returnLastTwoDrivers = array => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (num1) {
    return (num2) => {
        return num1 * num2;
    }
}

const fareDoubler = fare => {
    return createFareMultiplier(fare)(fare) / fare * 2;
    // OR
    // const fareAmount = createFareMultiplier(fare);
    // return fareAmount(fare) / fare *2;
}
const fareTripler = fare3 => {
    const fareAmount = createFareMultiplier(fare3);
    return fareAmount(fare3) / fare3 * 3;
    // OR
    // return createFareMultiplier(fare3)(fare3) / fare3 * 3;
}

const selectDifferentDrivers = (drivers, eitherOR) => {
    if (eitherOR === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    } else if (eitherOR === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    }
}