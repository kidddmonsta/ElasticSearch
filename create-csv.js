const fs = require('fs');
const stream = fs.createWriteStream("input.csv");
const createCsv = require('faker');

let lineCount = 100
let currentDate = new Date().toISOString().split('T')[0]

stream.once('open', (fd) => {

    for(var i = 0; i < lineCount; i++) {

        // NOTE: simple string concatenation does not escape CSV properly, just for demo/development purposes.
        let productString =
            '"{' +
            [createCsv.commerce.productName(), createCsv.commerce.productName(), createCsv.commerce.productName()].map(p => '"' + p + '"').join(",")
            + '}"'

        let data = [
            createCsv.internet.email(),
            createCsv.name.firstName(),
            createCsv.name.lastName(),
            productString,
            currentDate,
            currentDate
        ]

        let line = data.join(",") + "\n"
        stream.write(line)
    }

    stream.end();
});