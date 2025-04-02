const Emitter = require('events');

const emitter = new Emitter();

const callback = (data, second, third) => {
    console.log('Вы прислали сообщение ' + data);
    console.log('Второй аргумент ' + second);
}

// emitter.emit('message');
emitter.addListener('message', callback);
// emitter.removeAllListeners()
// emitter.removeListener('message', callback)

const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'Вы не указали сообщение')
}

// Когда удобно использовать?
// http
// websockets
// long pulling
// clusters