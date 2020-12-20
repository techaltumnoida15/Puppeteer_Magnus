module.exports = {

    writeLog: async function(Text){
        var currentDate = '[' + new Date().toString().split(' GMT')[0] + ']: ';
        global.logger.write('\n' + currentDate + Text);
    },

    closeLogger: async function(){
        global.logger.end()
    }
}