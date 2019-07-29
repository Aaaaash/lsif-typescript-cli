const cp = require('child_process');
const path = require('path');
const fse = require('fs-extra');

const { cliPath } = require('./common');

test('Should printed correct version.', () => {
    const packagePath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fse.readFileSync(packagePath).toString());
    const process = cp.fork(cliPath, ['--version']);
    if (process.stdout) {
        process.stdout.addListener('data', (chunk) => {
            expect(chunk).toEqual(packageJson.version);
        });
    }
});
