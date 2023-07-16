function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `font-size: ${fontSize};`
    console.log(message, style);
}
setTimeout(function print(){
console.log("Loading");
},5000)
//Task2:
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(message, style);
    }
}
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');
// Task 3
function consoleStyler(color, background, fontSize, txt) {
  console.log('%c%s', `color: ${color}; background: ${background}; font-size: ${fontSize};`, txt);
}

function celebrateStyler(reason) {
  console.log(`Let's celebrate ${reason}! 🎉`);
}

consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
