let age = 2;

drivingSchool(age);

function drivingSchool(age) {
    const minimumAge = 18;
    if (age >= minimumAge) {
        console.log("You can come in the driving school");
    } else {
        console.log("You can't come in the driving school");
    }
}