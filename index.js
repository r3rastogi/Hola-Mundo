const translate = require('google-translate-api');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter phrase to be translated: ', (input) => {
    console.log(input);
    translate(input, {to: 'es'}).then(res => {
        console.log(res.text);
    });

  rl.close();
});
