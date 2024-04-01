var guests = ["ayesha", "aqsa", "saqlain", "ayat"];
var cannotatten = "ayat";
var newguest = "bilal";
guests[guests.indexOf(cannotatten)] = newguest;
// add guest bigining of the array
guests.unshift("amna");
console.log(guests.length + " " + "peoples" + " " + "are invited to dinner");
