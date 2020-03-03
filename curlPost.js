const CurlRequest = require('curl-request');
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
let inputFile = fs.createReadStream('./formatted.json')
let lineReader = readline.createInterface({
    input: inputFile
});


lineReader.on('line', function (line) {

    if(isJsonString(line)) {

        let jsonData = JSON.parse(line);
        console.log( jsonData._id);
        curl = new CurlRequest;
        curl
            .setHeaders([
                'Content-Type: application/json'
            ])
            .setBody(
                JSON.stringify(jsonData._source)
            )
            .post('http://localhost:9200/patan/indicator_info/' + jsonData._id)
            .then(({statusCode, body, headers}) => {
                console.log(statusCode, body, headers)
            })
            .catch((e) => {
                console.log(e);

            });
    }
});


