var fortune = new Array(
        "now with enzymes!",
        "solar powered!",
        "SFW!",
        "right click enabled!",
        "the doctor is IN",
        "mit gedankenexperimenten!",
        "detfelypoc",
        "limited edition"
        );
var i = Math.floor((fortune.length-1) * Math.random());
document.getElementById('fortune').innerHTML = fortune[i];
var c = Math.floor(8*Math.random()) + 1;
document.getElementById('fortune').className = "shadow-col" + c;
