
const meow = require('meow');

const helpText = `
    Usage
        npx mbuyu [options] <commands>

    Options
        social         Print the social info
        --no-social    Don't print the social info

        ad             Print the ad info
        --no-ad        Don't print the ad info
        -d, --debug    Print debug information
        -v, --version  Print debug information

    Commands
        help           Show CLI help information

    Examples
        npx mbuyu --no-social
`;

const options = {
    flags: {
        social: {
            type: 'boolean',
            default: true,
        },
        ad: {
            type: 'boolean',
            default: true,
        },
        debug: {
            type: 'boolean',
            default: false,
            alias: 'd'
        },
        version: {
            type: 'boolean',
            default: false,
            alias: 'v'
        }
    }
};

module.exports = meow(helpText, options);