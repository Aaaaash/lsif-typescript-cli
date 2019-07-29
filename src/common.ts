export const defaultConfig = {
    version: '0.4.6',
    compilerOptions: {
        rootDir: 'src',
        target: 'es5',
        module: 'commonjs',
        baseUrl: '.',
    },
    projectRoot: process.cwd(),
    serverUrl: process.env['LSIF_SERVER_URL'] || 'https://lsif-typescript.net',
};
