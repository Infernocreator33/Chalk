console.log("Hello world");
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
console.log(chalk.blue("Hello world"));
console.log(chalk.keyword('orange')('Yay for orange colored text!'));
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));

chalkAnimation.rainbow('Lorem Ipsum');
setTimeout(() => {
    //stop the lorem ipsum animation, then write on a new line
    console.log('dolor sit amet');
}, 1000);