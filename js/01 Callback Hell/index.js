const fs = require('fs');
const Bluebird = require('bluebird');

Bluebird.promisifyAll(fs)

//STEP 1: read file sync
/*console.time('sync');
console.log('start');
const data = fs.readFileSync('./data.txt', {encoding: 'utf8'})
console.log(data); // hello world
console.log('end');
console.timeEnd('sync');*/

//STEP 2: read file async

/*console.time('sync');
console.log('start');
fs.readFile('./data.txt', {encoding: 'utf8'}, (error, data) => {
    console.error(error);
    console.log(data); // hello world
});
console.log('end');
console.timeEnd('sync');*/

console.time('sync');
console.log('start');
const file1Promise = fs.readFileAsync('./data.txt', {encoding: 'utf8'});
const file2Promise = fs.readFileAsync('./data2.txt', {encoding: 'utf8'});


const allPromises = Bluebird.all([file1Promise, file2Promise]).then((data) => {
    console.log(data);
});

allPromises.catch((error) => {
    console.log(error);
});

console.log('end');
console.timeEnd('sync');
