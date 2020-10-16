const { createStream } = require('table');
const config = require('../../config/config.json');
const tableConfig = require('../../utils/tableconfig');
const { commandStatus, eventStatus } = require('../../utils/registry');

module.exports = async (client) => {
    console.log(`${client.user.tag} has logged in.`);
    await loadTable(commandStatus, 50);
    console.log("\n");
    await loadTable(eventStatus, 50);
    client.user.setActivity(`${client.user.tag} | Prefix = ${config.prefix}`, { type: "PLAYING" });
}
function loadTable(arr, interval) {
    let fn, i = 0, stream = createStream(tableConfig);
    return new Promise((resolve, reject) => {
        fn = setInterval(() => {
            if(i === arr.length)
            {
                clearInterval(fn);
                resolve();
            }
            else {
                stream.write(arr[i]);
                i++;
            }
        }, interval); 
    })
}