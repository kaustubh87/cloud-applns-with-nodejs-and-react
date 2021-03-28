module.exports.getDate = function getDate(){
    var estTime = new Date().toLocaleString("en-US", {timeZone: 'Australia/Brisbane'});
    return estTime;
}