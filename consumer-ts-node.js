// @ts-check
const tsNode = require("ts-node");

(async () => {
    tsNode.register()
    const generator = require("./async-generator").default;
    for await (const p of generator()) {
        console.log(await p);
    }
})();
