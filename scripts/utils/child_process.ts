import {
    exec as nodeExec,
    ExecOptions,
    spawn as nodeSpawn,
    SpawnOptions
} from 'child_process';
import { promisify } from 'util';

import { root } from './path';

export const exec = (command: string, options: ExecOptions = {}) => {
    return promisify(nodeExec)(command, {
        cwd: root(),
        env: process.env,
        ...options
    });
};

export const spawn = (
    command: string,
    args: string[] = [],
    options: SpawnOptions = {}
) => {
    const spawnedProcess = nodeSpawn(command, args, {
        cwd: root(),
        env: process.env,
        stdio: 'inherit',
        ...options
    });

    return new Promise<number>((resolve, reject) => {
        spawnedProcess.on('error', err => reject(err));
        spawnedProcess.on('close', code => resolve(code));
    });
};
