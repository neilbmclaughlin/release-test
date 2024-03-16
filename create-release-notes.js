const fs = require('fs')
const mustache = require('mustache')
const yargs = require('yargs')

// Load the template from file
const templateStr = fs.readFileSync('release-docs/template.txt', 'utf8')

const options = yargs
    .option('f', {
        alias: 'file',
        describe: 'Input file path',
        demandOption: true, // Make the option required
        type: 'string' // Specify the type of the option's value
    })
    .option('o', {
        alias: 'output',
        describe: 'Output file',
        demandOption: true,
        type: 'string'
    })
    .option('d', {
        alias: 'date',
        describe: 'Release date',
        demandOption: true,
        type: 'string'
    })
    .option('r', {
        alias: 'release',
        describe: 'Release version',
        demandOption: true,
        type: 'string'
    })
     .option('i', {
        alias: 'id',
        describe: 'Jira Release id',
        demandOption: true,
        type: 'string'
    })
    .argv

const commitList = fs.readFileSync(options.file, 'utf8')
const tickets = commitList.split('\n').filter(c => c.trim() !== '')

const context = {
    version: options.release,
    date: options.date,
    id: options.id,
    tickets
}

const outputStr = mustache.render(templateStr, context)

fs.writeFileSync(options.output, outputStr)
