const path = require('path');
const cp = require('child_process');

exports.cliPath = path.join(__dirname, '..', 'lib', 'index.js');

exports.forkMode = function(executorPath, args) {
    return new Promise((resolve, reject) => {
        const stdout = [];
        const stderr = [];
        const process = cp.fork(executorPath, args);

        if (process.stdout) {
            process.stdout.addListener('data', (data) => {
                resolve(data);
            });
        }
    });
}
