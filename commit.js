import simpleGit from 'simple-git';
import moment from 'moment';
import random from 'random';
import fs from 'fs';

const git = simpleGit();
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const makeCommits = async (days) => {
    for (let i = 0; i < days; i++) {
        const date = moment().subtract(i, 'days').format(DATE_FORMAT);
        const message = `Commit for ${date}`;
        fs.writeFileSync('log.txt', message);
        
        await git.add('./*');
        await git.commit(message, { '--date': date });
    }
    await git.push();
};

makeCommits(365); // Generates commits for the last 365 days
