const cp = require('child_process');
const { cliPath, forkMode } = require('./common');

test('Should printed cli default configuration.', () => {
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
    forkMode(cliPath, ['--version'])
        .then((stdio) => {
            console.log(stdio, defaultConfig);
            expect(JSON.stringify(stdio)).toEqual(defaultConfig);
        });
});

test('Should upload dump file and return success.', () => {
    forkMode(cliPath, ['--upload'])
        .then((stdio) => {

        });
});
