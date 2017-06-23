var Sqlite = require("nativescript-sqlite");

var createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {    
    var page = args.object;

    // todo: copy database to corresponding platform folder

    // todo: connect to the database
    // todo: create walks table and get reference to it
}

exports.onNavigatingTo = onNavigatingTo;