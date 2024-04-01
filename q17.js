var guests = ["ayesha", "aqsa", "saqlain", "ayat"];
var cannotatten = "ayat";
var newguest = "bilal";
guests[guests.indexOf(cannotatten)] = newguest;
// add guest bigining of the array
guests.unshift("amna");
// add guest middle of the array
var middleguest = "halima";
var middleindex = guests.length / 2;
guests.splice(middleindex, 0, middleguest);
// add guest last of the array
guests.push("hafsa");
console.log("I can invite only two people to dinner");
while (guests.length > 2) {
    var removeguest = guests.pop();
    console.log("Dear ".concat(removeguest, ", you are not invited to dinner"));
}
guests.map(function (item) { return (console.log("Dear ".concat(item, ", you are still invited to dinner"))); });
guests.pop();
guests.pop();
console.log(guests);
