var fs = require('fs');

function persistObj(fileName) {
    var obj;

    try {
        //TODO: Add configurable serialization/deserialization?
        obj = require(fileName);
    } catch (err) {
        obj = {};
    }

    Object.observe(obj, function () {
        //TODO: Add throttling?
        fs.writeFile(fileName, JSON.stringify(obj, null, 4));
    });

    return obj;
}

module.exports = persistObj;