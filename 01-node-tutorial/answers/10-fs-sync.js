const {readFileSync, writeFileSync} = require ('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
const third = readFileSync('./content/result-sync.txt', 'utf8')

console.log(first, second, third)

writeFileSync('./temporary/fileA.txt', `Here is the result: ${first}, ${second}, ${third}`,
    { flag: 'a'}
);
