import { exec, spawn } from './child_process';

//#region util
const getLines = (stdout: string) => {
    const trimmed = stdout.trim();
    return !trimmed ? [] : trimmed.split('\n');
};
//#endregion util

//#region commit
export const commit = (): Promise<number> => {
    return spawn('git-cz', ['--no-verify']);
};

export const amend = async (): Promise<void> => {
    const command = 'git commit --amend --no-edit --no-verify';
    await exec(command);
};
//#endregion commit

//#region staging
export const add = async (...files: string[]): Promise<void> => {
    const fileArgs = files.join(' ');
    const command = `git add ${fileArgs}`;
    await exec(command);
};

export const getStaged = async (): Promise<string[]> => {
    const command = 'git diff --cached --name-only --diff-filter=ACM';
    const { stdout } = await exec(command);

    return getLines(stdout);
};

export const getStagedCount = (): Promise<number> => {
    return getStaged().then(staged => staged.length);
};
//#endregion staging

//#region stash
export const getStash = async (): Promise<string[]> => {
    const command = 'git stash list';
    const { stdout } = await exec(command);

    return getLines(stdout);
};

export const getStashCount = (): Promise<number> => {
    return getStash().then(stash => stash.length);
};

export const stashPop = async (): Promise<void> => {
    const command = 'git stash pop';
    await exec(command);
};

export const stashPush = async (): Promise<void> => {
    const command = 'git stash -u';
    await exec(command);
};
//#endregion stash
