const path = require('path');
console.log(path.join(__dirname, 'root', 'app', 'www'));
console.log(path.join(__dirname, 'root', '..', '..'));

const fullpath = path.resolve(__dirname, 'first', 'second.js');

console.log(path.parse(fullpath));

/* {
  root: '/',
  dir: '/home/ruslanglk/nodejs_basics/first',
  base: 'second',
  ext: '',
  name: 'second'
} */

console.log('Название файла', path.basename(fullpath));
console.log('Расширение', path.extname(fullpath));

const siteURL = `http://localhost:8081/users?id=35&type=one`;
const url = new URL(siteURL);
console.log(url);

/* 
  pass arguments in script. 
  node app.js a b c 
*/
// console.log(process.argv);

