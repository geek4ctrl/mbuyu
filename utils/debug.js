const alert = require('cli-alertss');

module.exports = (isDebug, cli) => {
    if (!isDebug) {
        return;
    }
    
    alert({ type: 'warning', msg: `DEBUGGING INFO ` });
    console.log(`cli.input: `, cli.input);
    console.log(`cli.flags`, cli.flags);
    console.log();
}
