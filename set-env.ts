const fs = require('fs');
const readline = require('readline');
const replace = require('replace-in-file');

let i: number;
let last: number = 0;
let first: boolean = true;
let content: string = "";
let match: any;

fs.copyFileSync('src/assets/env.template.js', 'src/assets/env.js');

readline.createInterface({
    input: fs.createReadStream('.env')
}).on('line', function (line) {
    if (!!line && line.indexOf('=') != -1) {
        match = /^(.*)\=(.*)$/g.exec(line);
        let options = {
            files: 'src/assets/env.js',
            from: `$\{${match[1]}}`,
            to: `${process.env[match[1]] || match[2]}`
        }
        console.log("opt", options);
        replace.sync(options);
    }
});
