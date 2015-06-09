var fs = require('fs');

/**
 * Returns the persisted object and observes it for future persistence
 * @param  {string} fileName   the absolute path and name of the file used for persisting the object
 * @param  {object} [original] the optional default object to return if the file does not already exist
 * @return {object}            the object loaded from the filesystem which is observed for future changes
 */
function persistObj(fileName, original) {
    var obj;

    try {
        //TODO: Add configurable serialization/deserialization?
        obj = require(fileName);
    } catch (err) {
        obj = original || {};
    }

    //TODO: observe only certain types of changes?
    Object.observe(obj, function () {
        //TODO: Add throttling?
        fs.writeFile(fileName, JSON.stringify(obj, null, 4));
    });

    return obj;
}

module.exports = persistObj;
