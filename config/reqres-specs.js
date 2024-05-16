const {reports, datasource, tests, envs } = require('../config')

const newman = require('newman')

newman.run({
    collection: `${tests}/ReqRes.postman_collection.json`,
    environment: `${envs}/ReqRes.postman_environment.json`,
    reporters: ['cli','htmlextra','csv'],
    bail: true,
    noColor: true,
    reporter:{
        htmlextra:{
            export: `${reports}`,
            logs: true
        },
        csv:{
            export: `${reports}`,
            logs: true
        }
    }
}, function (err){
    if (err){throw err;}
    console.log('Collection run complete!!!')
}, process.exit)
