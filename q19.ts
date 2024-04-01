let guests = ["ayesha","aqsa","saqlain","ayat"];

let cannotatten:string = "ayat";

let newguest = "bilal";

guests[guests.indexOf(cannotatten)] = newguest;

// add guest bigining of the array
guests.unshift("amna")

console.log(guests.length +" "+ "peoples" +" "+ "are invited to dinner")