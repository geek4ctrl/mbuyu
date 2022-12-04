#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const log = console.log;

welcome({
    title: pkgJSON.name,
    tagLine: `Howdy, nice to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
})

log(`
Laurent Mbuyu

Laurent is a software developer willing to do whatever it takes to deliver results. 
Currently at Osiris Trading, and trying to raise above excellence by creating great solutions for the world. 
Previously, Laurent built software geared towards the efficiency of use of plant machinery in Johannesburg for the BMW Group 
right after serving as a software developer for a startup named Retro Rabbit.

Twitter: https://twitter.com/laurent_mb
Github: https://github.com/geek4ctrl
`);

console.log(`
    SUCCESS: Thanks for checking out my CLI.
    INFO: I'm busy thinking about life.
    WARNING: Please don't copy me. Be yourself
    ERROR: I'm on vacation. Contact me next week.
`)

