const cp = require('child_process');
const { cliPath } = require('./common');

test('Should printed cli default configuration.', () => {
    const childProcess = cp.fork(cliPath, ['--version']);
    const defaultConfig = JSON.stringify({
        version: '0.4.6',
        compilerOptions: {
            rootDir: 'src',
            target: 'es5',
            module: 'commonjs',
            baseUrl: '.',
        },
        projectRoot: process.cwd(),
        serverUrl: 'https://lsif-typescript.net',
    });
    if (childProcess.stdout) {
        childProcess.stdout.addListener('data', (chunk) => {
            expect(JSON.stringify(chunk)).toEqual(defaultConfig);
        });
    }
});
