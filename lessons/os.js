const os = require('os');
const cluster = require('cluster');

/* console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length); */

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Воркер с pid = ${worker.process.pid} остановлен`)
        if(code !== 0 ) {
						console.log('Перезапуск воркера...');

            cluster.fork()
        } else {
            console.log('Воркер остановился...')
        }
    })
} else {
    console.log(`Воркер с pid= ${process.pid} запущен`)

    setInterval(() => {
        console.log(`Воркер с pid= ${process.pid} еще работает`)
    }, 5000)
}