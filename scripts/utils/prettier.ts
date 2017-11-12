import { spawn } from './child_process';

export const format = (...files: string[]): Promise<number> => {
    const fileInclude = files.length
        ? files.filter(f => f.match(/\.(ts|js|json)$/))
        : ['**/*.{ts,js,json}'];

    const fileIgnore = ['package-lock.json'];

    const args = [
        '--ignore-path',
        '.gitignore',
        '--config',
        'package.json',
        '--write',
        ...fileInclude,
        ...fileIgnore.map(f => `!${f}`)
    ];

    return spawn('prettier', args);
};
