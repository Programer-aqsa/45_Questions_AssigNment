var guests = ["ayesha", "aqsa", "saqlain", "ayat"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("dear ".concat(guest, " you are invited to dinner"));
}
var cannotatten = "ayat";
console.log("".concat(cannotatten, " can not make it ,for dinner"));
var newguest = "bilal";
guests[guests.indexOf(cannotatten)] = newguest;
guests.map(function (item) { return console.log(item + " " + "you are invited to dinner"); });
