import * as prettier from './utils/prettier';

const main = () => prettier.format();

// Run main in async context
(async () => {
    if (require.main !== module) return;
    const code = await main();
    process.on('exit', () => process.exit(code));
})();
