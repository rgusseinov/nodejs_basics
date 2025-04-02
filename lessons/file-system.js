const fs = require('fs');
const path = require('path');

// Рекурсивное создание вложенных папок
// fs.mkdirSync(path.resolve(__dirname, 'var', 'www', 'html'), { recursive: true });

// console.log(`Start`);

// fs.mkdir(path.resolve(__dirname, 'var', 'www', 'html'), {recursive: true}, (err) => {
// 	if (err){
// 		console.log(err);
// 		return;
// 	};

// 	console.log(`Папка создана`);
// })
// console.log(`End`);

// Удаление папки и его содержимое
// fs.rm(path.resolve(__dirname, 'var'), {recursive: true},  (err) => {
// 	if (err){
// 		throw err;
// 	}
// });

// Создание файла
// fs.writeFile(path.resolve(__dirname, 'file.txt'), 'Hello world!', (err) => {
// 	if (err){
// 		console.log(err);
// 	}

// 	console.log(`Файл создан`);
// });

// Добавление в файл
// fs.appendFile(path.resolve(__dirname, 'file.txt'), '\nAdd to end of file', (err) => {
// 	if (err){
// 		console.log(err);
// 	}

// 	console.log(`Добавление закончено`);
// })

// Асинхронное создание и добавление в файл

const asyncFileCreate = async (path, data) => {
	return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
		if (err){
			return reject(err.message);
		}
		
		resolve(data);
	}))
}

const asyncFileAppend = async (path, data) => {
	return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
		if (err){
			return reject(err.message);
		}
		
		resolve(data);
	}))
}

const readFileAsync = async (path) => {
	return new Promise((resolve, reject) => fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
		if (err){
			return reject(err.message);
		}
		
		resolve(data);
	}))
}

const removeFileAsync = async (path) => {
	return new Promise((resolve, reject) => fs.rm(path,(err) => {
		if (err){
			return reject(err.message);
		}
		
		resolve();
	}))
}

asyncFileCreate(path.resolve(__dirname, 'file.txt'), 'some data')
	.then(() => asyncFileAppend(path.resolve(__dirname, 'file.txt'), '\naaa'))
	.then(() => asyncFileAppend(path.resolve(__dirname, 'file.txt'), '\nbbb'))
	.then(() => asyncFileAppend(path.resolve(__dirname, 'file.txt'), '\nccc'))
	.then(() => readFileAsync(path.resolve(__dirname, 'file.txt')))
	.then((data) => console.log(data));


removeFileAsync(path.resolve(__dirname, 'file.txt'))
	.then(() => console.log('File was removed'));	
