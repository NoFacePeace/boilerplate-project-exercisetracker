#!/usr/bin/env node

var exec = require('child_process').exec;
exec('cp /home/cht/git/gitignore/Node.gitignore ./.gitignore', function(error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code:' + error.code);
    }
    console.log('Child Process STDOUT:' + stdout);
});
exec('npm install && npm install dotenv --save && touch .env', function(error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code:' + error.code);
    }
    console.log('Child Processs STDOUT:' + stdout);
});
