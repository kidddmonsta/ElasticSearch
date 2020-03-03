const fs = require('fs')
const readline = require('readline')
<<<<<<< HEAD

=======
>>>>>>> 8c0f9ab34ade5257f3e4baa0fca8150cdaa3c669
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
<<<<<<< HEAD

=======
>>>>>>> 8c0f9ab34ade5257f3e4baa0fca8150cdaa3c669
let inputFile = fs.createReadStream('export.json')
let lineReader = readline.createInterface({
    input: inputFile
});

let writeStream = fs.createWriteStream("formatted.json", {flags: 'a'})

lineReader.on('line', function (line) {
<<<<<<< HEAD
    if (isJsonString(line)) {
        let jsonData = JSON.parse(line);
        jsonData.forEach(function (item) {
            if (item.datasource_info !== null) item.datasource_info = item.datasource_info.replace(/\\"/g, '"').replace(/"/g, "");
            item.actual_data_to = item.actual_data_to.replace(/-/g, '.');
            item.actual_data_from = item.actual_data_from.replace(/-/g, '.');
            item.id = item.id.toString();
            item.indicator_is_public = item.indicator_is_public.toString();
            item.parentid = item.parentid.toString();
            let obj = {
                _index: 'patan',
                _type: 'indicator_info',
=======
    if(isJsonString(line)) {
        let jsonData = JSON.parse(line);
        jsonData.forEach(function (item) {
            let obj = {
                _index: 'test',
                _type: 'pokazatel',
>>>>>>> 8c0f9ab34ade5257f3e4baa0fca8150cdaa3c669
                _id: item.id,
                _source: item
            }
            let newLine = JSON.stringify(obj) + "\n"
            writeStream.write(newLine)
        });
    }

});