const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    reports: process.env.reports,
    datasource: process.env.datasource,
    tests: process.env.tests,
    envs: process.env.envs
}