var colors = require ('colors');
var x = 11;
var y = 1;

function next() {
    if (x-- <= y) return;
    setTimeout(function() {
        var hearts='<3'.repeat(x);
        console.log(colors.rainbow(hearts));
        next();
    }, 1000);
}

next();
