#!/usr/bin/env node
const handleError = require('cli-handle-error');
const { Confirm } = require('enquirer');

const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');
const stats = require('./utils/stats');

const input = cli.input;
const flags = cli.flags;

(async () => {
    // Init and help
    init();
    input.includes('help') && cli.showHelp(0);

    const prompt = new Confirm({
        name: 'question',
        message: 'Did you like enquirer?'
    });
    const response = await prompt.run();
    console.log(`response`, response);

    // Print out the info
    console.log(data.bio);

    if (flags.social) {
        console.log(data.social);
    }

    if (flags.ad) {
        console.log(data.ad);
    }

    // Stats
    await stats();

    // Debug info if needed
    debug(flags.debug, cli);
})();
