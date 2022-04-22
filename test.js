const cp = require('child_process');
const { assert } = require('console');

let builtOutput;
try {
    builtOutput = cp.execSync('node consumer-tsc.js').toString();
} catch {
    console.log('❌ failed to execute w/ output of tsc build')
}

let swcOutput;
try {
    swcOutput = cp.execSync('node consumer-swc.js').toString();
} catch {
    console.log('❌ failed to execute w/ output of swc build')
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

if (swcNodeOutput == tsNodeOutput == builtOutput == swcOutput) {
    console.log('✔️ test succeeded')
} else {
    console.log(builtOutput)
    console.log(swcOutput)
    console.log(tsNodeOutput)
    console.log(swcNodeOutput)
}