let alienColor:string="green";

// version that passes the if test (green alien)

if (alienColor === "green"){
    console.log("player just earned 5 points!");
}

// version that fails the if test (red alien)

alienColor="red";

if (alienColor === "green"){
    console.log("pla yer just earned 5 points!");
}