const readline = require('readline');
const translate = require('google-translate-api');
const yaml = require('node-yaml');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter phrase to be translated: ', (input) => {
    yaml.read('./input.yaml', (err, data) => {
        if (err) {
            throw err;
        }

        data.forEach(function(lang) {
            translate(input, {to: lang}).then(res => {
                console.log(lang,': ', res.text);
            });
        });
    });
  rl.close();
});
