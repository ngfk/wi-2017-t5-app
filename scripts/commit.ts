import * as git from './utils/git';
import * as prettier from './utils/prettier';

const main = async (): Promise<number> => {
    // Get staged files
    const staged = await git.getStaged();

    // Do commit, exit if child's exit code !== 0 or terminated
    const code = await git.commit();
    if (code !== 0 || (await git.getStagedCount()) > 0) return code;

    // Get size of git stash & stash uncommitted files
    const preStashSize = await git.getStashCount();
    await git.stashPush();

    // Run prettier on changed files
    console.log('Formatting adjusted files:');
    await prettier.format(...staged);

    // Re-stage files & amend commit, appends newly staged changes to previous
    // commit
    await git.add(...staged);
    await git.amend();

    // Restore working directory if required
    const postStashSize = await git.getStashCount();
    if (postStashSize > preStashSize) await git.stashPop();

    console.log('Commit completed!');
    return 0;
};

// Run main in async context
(async () => {
    if (require.main !== module) return;
    const code = await main();
    process.on('exit', () => process.exit(code));
})();
