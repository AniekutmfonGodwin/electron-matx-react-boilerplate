const {createRxDatabase,addRxPlugin} = require('rxdb')
const path = require("path")

addRxPlugin(require('pouchdb-adapter-leveldb'))

const leveldown = require('leveldown');



exports.database = async (dbPath)=>{
    console.log("am in")
    return await createRxDatabase({
        name: path.join(dbPath,'testdatabase'),
        adapter: leveldown // the full leveldown-module
    });
}