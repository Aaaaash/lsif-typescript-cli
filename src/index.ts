import commander from 'commander';
import * as fse from 'fs-extra';
import * as path from 'path';

const projectRoot = path.join(__dirname, '..');
const packageJson = JSON.parse(fse.readFileSync(path.join(projectRoot, 'package.json')).toString());

commander.version(packageJson.version)
    .name('lsif-ts-cli')
    .description('Index project and upload LSIF file to LSIF TypeScript Server.')
    .option('-p --project<project-root>', 'Project root.')
    .option('--server-url', 'LSIF Server uri, it\'s should be contain upload interface.')
    .option('-u --upload', 'Upload lsif dump file to lsif server.')
    .parse(process.argv);
