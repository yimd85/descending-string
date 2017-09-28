var colors = require ('colors');

for (var i=10;i>0;i--){
     var hearts='<3'.repeat(i);
     console.log(colors.rainbow(hearts));
}

//TERMINAL COMMANDS:
//npm init
//npm install --save colors
//node descending-string.js
