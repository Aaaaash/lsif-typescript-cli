import commander from 'commander';
import * as fse from 'fs-extra';
import * as path from 'path';

import { defaultConfig } from './common';

const projectRoot = path.join(__dirname, '..');
const packageJson = JSON.parse(fse.readFileSync(path.join(projectRoot, 'package.json')).toString());

const cliOptions = Object.create(defaultConfig);

commander.version(packageJson.version)
    .name('lsif-ts-cli')
    .description('Index project and upload LSIF file to LSIF TypeScript Server.')
    .option('-p --project <project root>', 'Project root, it\'s should be contain tsconfig.json file.')
    .option('-s --server-url <server url>', 'LSIF Server url, it\'s should be contain \'/upload\' API.')
    .option('-u --upload', 'Upload lsif dump file to lsif server.')
    .option('-c --config', 'Show cli configuration.')
    .parse(process.argv);

function run(): void {
    const options = commander.opts();

    if (options.config) {
        console.log(defaultConfig);
    }

    if (options.project) {
        cliOptions.project = options.project;   
    }
}

run();
