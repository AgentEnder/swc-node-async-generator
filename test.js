const cp = require('child_process');
const { assert } = require('console');

let builtOutput;
try {
    builtOutput = cp.execSync('node consumer-built.js').toString();
} catch {
    console.log('❌ failed to execute w/ output of build')
}

let tsNodeOutput;
try {
    tsNodeOutput = cp.execSync('node consumer-ts-node.js').toString();
} catch {
    console.log('❌ failed to execute w/ ts-node/register')
}

let swcNodeOutput;
try {
    swcNodeOutput = cp.execSync('node consumer-swc-node.js').toString();
} catch {
    console.log('❌ failed to execute w/ swc-node/register')
}

if (swcNodeOutput == tsNodeOutput == builtOutput) {
    console.log('✔️ test succeeded')
} else {
    console.log(builtOutput)
    console.log(tsNodeOutput)
    console.log(swcNodeOutput)
}