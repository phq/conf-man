import fs from 'fs';

console.log('Hello!');

interface IOptions {
    defaultConfigPath?: string;
    localConfigPath?: string;
}
const options: IOptions = {};
const defaultConfigPath = options.defaultConfigPath || 'config.json';
const localConfigPath = options.localConfigPath || 'config.local.json';

// read config
let defaultConfig = fs.existsSync(defaultConfigPath) ? fs.readFileSync(defaultConfigPath, 'utf8') : {};
let localConfig = fs.existsSync(localConfigPath) ? fs.readFileSync(localConfigPath, 'utf8') : {};

const resolvedConfig = Object.assign({}, defaultConfig, localConfig);

console.log(`Resolved config: ${JSON.stringify(resolvedConfig)}`);
console.log('Done!');