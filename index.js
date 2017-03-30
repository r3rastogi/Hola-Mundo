const translate = require('google-translate-api');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter phrase to be translated: ', (input) => {
    translate(input, {to: 'Spanish'}).then(res => {
        console.log(res.text);
    });

    translate(input, {to: 'German'}).then(res => {
        console.log(res.text);
    });

  rl.close();
});
