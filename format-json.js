const fs = require('fs')
const readline = require('readline')
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
let inputFile = fs.createReadStream('export.json')
let lineReader = readline.createInterface({
    input: inputFile
});

let writeStream = fs.createWriteStream("formatted.json", {flags: 'a'})

lineReader.on('line', function (line) {
    if(isJsonString(line)) {
        let jsonData = JSON.parse(line);
        jsonData.forEach(function (item) {
            let obj = {
                _index: 'test',
                _type: 'pokazatel',
                _id: item.id,
                _source: item
            }
            let newLine = JSON.stringify(obj) + "\n"
            writeStream.write(newLine)
        });
    }

});