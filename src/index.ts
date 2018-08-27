import fs from 'fs';
import path from 'path';

console.log('Hello!');

interface IOptions {
    defaultConfigPath?: string;
    localConfigPath?: string;
}

// calculates the path of the project including conf-man as dependency
const includingProjectRoot = path.resolve(__dirname, '../../../');

const options: IOptions = {};
const defaultConfigPath = options.defaultConfigPath || path.resolve(includingProjectRoot, 'config.json');
const localConfigPath = options.localConfigPath || path.resolve(includingProjectRoot, 'config.local.json');

// read config
console.log(__dirname);
let defaultConfig = fs.existsSync(defaultConfigPath) ? fs.readFileSync(defaultConfigPath, 'utf8') : {};
let localConfig = fs.existsSync(localConfigPath) ? fs.readFileSync(localConfigPath, 'utf8') : {};

const resolvedConfig = Object.assign({}, defaultConfig, localConfig);

console.log(`Resolved config: ${JSON.stringify(resolvedConfig)}`);
console.log('Done!');

export default resolvedConfig;