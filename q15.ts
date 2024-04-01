
let guests = ["ayesha","aqsa","saqlain","ayat"];

let cannotatten:string = "ayat";
console.log(`${cannotatten} can not make it ,for dinner`)

let newguest = "bilal";

guests[guests.indexOf(cannotatten)] = newguest;

guests.map((item) => console.log(item+" "+ "you are invited to dinner"));

