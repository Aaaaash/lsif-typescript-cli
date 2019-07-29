## LSIF TypeScript Cli

[![Build Status](https://travis-ci.org/Aaaaash/lsif-typescript-cli.svg?branch=master)](https://travis-ci.org/Aaaaash/lsif-typescript-cli)

Index project and upload LSIF file to LSIF TypeScript Server.

## Usage

### Run  
```bash
lsif-ts-cli --index # Index project infomation by lsif-tsc.
lsif-ts-cli --upload # Upload lsif file to server.
```

### Best Practices
- In Travis

```jsonc
// package.json
{
    "scripts": {
        "index": "./node_modules/.bin/lsif-ts-cli --index --upload"
    },
    "devDependencies": {
        "lsif-ts-cli": "0.0.1"
    }
}
```
```yml
script:
  - yarn run lint               # Linter
  - yarn run build              # Build
  - yarn run index              # Index and upload
```
