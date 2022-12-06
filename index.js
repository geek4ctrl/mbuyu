#!/usr/bin/env node

const alert = require('cli-alertss');
const handleError = require('cli-handle-error');

const init = require('./utils/init');
const data = require('./utils/data');

(() => {
    init();

    console.log(data.bio);
    console.log(data.social);

    alert({ type: 'info', msg: data.ad })
})();
