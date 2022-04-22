// @ts-check
const swcNode = require("@swc-node/register/register");

(async () => {
    swcNode.register();
    const generator = require("./build-swc/async-generator").default;
    for await (const p of generator()) {
        console.log(await p);
    }
})();
