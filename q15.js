var guests = ["ayesha", "aqsa", "saqlain", "ayat"];
var cannotatten = "ayat";
console.log("".concat(cannotatten, " can not make it ,for dinner"));
var newguest = "bilal";
guests[guests.indexOf(cannotatten)] = newguest;
guests.map(function (item) { return console.log(item + " " + "you are invited to dinner"); });
