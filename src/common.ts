import * as path from 'path';
import * as fs from 'fs';

const lsifTscPackage = path.join(__dirname, '..', 'node_modules', 'lsif-tsc', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(lsifTscPackage).toString());

export const defaultConfig = {
    version: packageJson.version,
    compilerOptions: {
        rootDir: 'src',
        target: 'es5',
        module: 'commonjs',
        baseUrl: '.',
    },
    projectRoot: process.cwd(),
    serverUrl: process.env['LSIF_SERVER_URL'] || 'https://lsif-typescript.net',
};
