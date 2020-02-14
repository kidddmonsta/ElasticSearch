const fs = require('fs')
const readline = require('readline')

let inputFile = fs.createReadStream('export.json')
let lineReader = readline.createInterface({
    input: inputFile
});

let writeStream = fs.createWriteStream("formatted.json", {flags: 'a'})

lineReader.on('line', function (line) {
    let jsonData = JSON.parse(line)

    let obj = {
        _index: 'test',
        _type: 'pokazatel',
        _id: jsonData.id,
        _source: jsonData
    }

    let newLine = JSON.stringify(obj) + "\n"
    writeStream.write(newLine)
});