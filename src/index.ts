import commander from 'commander';
import * as fse from 'fs-extra';
import * as path from 'path';

const projectRoot = path.join(__dirname, '..');
const packageJson = JSON.parse(fse.readFileSync(path.join(projectRoot, 'package.json')).toString());

commander.version(packageJson.version)
    .parse(process.argv);
