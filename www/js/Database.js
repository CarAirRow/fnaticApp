/**
 * File Name: Database.js
 *
 * Revision History:
 *       Birju Patel, 2017-04-18 : Created
 */

var db;


function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ")--" + error.message);
}

var DB = {
    createDatabase: function () {
        var shortName = "FNATIC";
        var version = "1.0";
        var displayName = "Database for Fnatic App";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating database ...");
        //or window.openDatabase()
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess() {
            console.info("Success: Database creation successful.");
        }
    },

    createTables: function () {
        var insertData = localStorage.getItem("insertData");
        console.info("IN the create function:"+localStorage.getItem("insertData"));
        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successCreate() {
            console.info("Success: Create Table successful. ");
        }

        function successInsert() {
            console.info("Success: Data insert successful");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];
            var sql;
            console.info("In the tx function:  "+insertData);

            console.info("Creating Table: team...");
            sql = "DROP TABLE IF EXISTS team;";
            tx.executeSql(sql, options, successCreate, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS team("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
                  "teamName VARCHAR(30) NOT NULL);";
            tx.executeSql(sql, options, successCreate, errorHandler);
            console.info("Inserting data to Table team...");

            sql = ["INSERT INTO team(teamName) VALUES('Fnatic');",
                   "INSERT INTO team(teamName) VALUES('G2');",
                   "INSERT INTO team(teamName) VALUES('H2K');",
                   "INSERT INTO team(teamName) VALUES('Giants');",
                   "INSERT INTO team(teamName) VALUES('Splyce');",
                   "INSERT INTO team(teamName) VALUES('Unicorns of Love');",
                   "INSERT INTO team(teamName) VALUES('Team Vitality');",
                   "INSERT INTO team(teamName) VALUES('Origen');"];

            for (var i = 0; i < sql.length; i++) {
                tx.executeSql(sql[i], options, successInsert, errorHandler);
            }

            console.info("Creating Table: players...");
            sql = "DROP TABLE IF EXISTS players;";
            tx.executeSql(sql, options, successCreate, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS players("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
                "playerName VARCHAR(30) NOT NULL);";
            tx.executeSql(sql, options, successCreate, errorHandler);
            console.info("Inserting data to Table players...");

            sql = ["INSERT INTO players(playerName) VALUES('Rekkles');",
                "INSERT INTO players(playerName) VALUES('Kikis');",
                "INSERT INTO players(playerName) VALUES('Zven');",
                "INSERT INTO players(playerName) VALUES('Yellowstar');",
                "INSERT INTO players(playerName) VALUES('Caps');",
                "INSERT INTO players(playerName) VALUES('Jankos');",
                "INSERT INTO players(playerName) VALUES('Faker');"];

            for (var j = 0; j < sql.length; j++) {
                tx.executeSql(sql[j], options, successInsert, errorHandler);
            }

            console.info("Creating Table: standings...");
            sql = "CREATE TABLE IF NOT EXISTS standings("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "teamId INTEGER,"
                + "gameWins INTEGER,"
                + "gameLoss INTEGER,"
                + "teamPoints INTEGER,"
                + "FOREIGN KEY(teamId) REFERENCES team(id));";

            tx.executeSql(sql, options, successCreate, errorHandler);
            console.info(insertData);

            if(insertData != "1")
            {
                console.info("Inserting data in Table: standings...");
                sql = ["INSERT INTO standings (teamId, gameWins, gameLoss, teamPoints) VALUES(1,0,0,0);",
                    "INSERT INTO standings (teamId, gameWins, gameLoss, teamPoints) VALUES(2,0,0,0);",
                    "INSERT INTO standings (teamId, gameWins, gameLoss, teamPoints) VALUES(3,0,0,0);",
                    "INSERT INTO standings (teamId, gameWins, gameLoss, teamPoints) VALUES(4,0,0,0);",
                    "INSERT INTO standings (teamId, gameWins, gameLoss, teamPoints) VALUES(5,0,0,0);",
                    "INSERT INTO standings (teamId, gameWins, gameLoss, teamPoints) VALUES(6,0,0,0);",
                    "INSERT INTO standings (teamId, gameWins, gameLoss, teamPoints) VALUES(7,0,0,0);",
                    "INSERT INTO standings (teamId, gameWins, gameLoss, teamPoints) VALUES(8,0,0,0);"];

                for (var s = 0; s < sql.length; s++) {
                    tx.executeSql(sql[s], options, successInsert, errorHandler);
                }
            }


			console.info("Creating Table: schedule...");
            sql = "CREATE TABLE IF NOT EXISTS schedule(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "date DATE NOT NULL," +
                "time DATETIME NOT NULL," +
                "location VARCHAR(30)," +
                "winner VARCHAR(30)," +
                "gameComments VARCHAR(30));";

            console.info("Inserting data in Table: schedule...");

            tx.executeSql(sql,options, successCreate, errorHandler);

            console.info("Creating Table: statistics...");

            sql = "CREATE TABLE IF NOT EXISTS statistics(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "playerId INTEGER NOT NULL," +
                "kills INTEGER," +
                "deaths INTEGER," +
                "gamePlayer INTEGER,"+
                "FOREIGN KEY(playerId) REFERENCES player(id));";

            tx.executeSql(sql,options, successCreate, errorHandler);
            if(insertData != "1")
            {
                console.info("Inserting data in Table: statistics...");
                sql = ["INSERT INTO statistics (playerId, kills, deaths, gamePlayer) VALUES(1,0,0,0);",
                    "INSERT INTO statistics (playerId, kills, deaths, gamePlayer) VALUES(2,0,0,0);",
                    "INSERT INTO statistics (playerId, kills, deaths, gamePlayer) VALUES(3,0,0,0);",
                    "INSERT INTO statistics (playerId, kills, deaths, gamePlayer) VALUES(4,0,0,0);",
                    "INSERT INTO statistics (playerId, kills, deaths, gamePlayer) VALUES(5,0,0,0);",
                    "INSERT INTO statistics (playerId, kills, deaths, gamePlayer) VALUES(6,0,0,0);",
                    "INSERT INTO statistics (playerId, kills, deaths, gamePlayer) VALUES(7,0,0,0);"];

                for (var p = 0; p < sql.length; p++) {
                    tx.executeSql(sql[p], options, successInsert, errorHandler);
                }
            }
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    dropTables: function () {
        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];

            console.info("Dropping Table: standings");
            var sql = "DROP TABLE IF EXISTS standings;";
            tx.executeSql(sql, options, successDrop, errorHandler);

            console.info("Dropping Table: schedule");
            sql = "DROP TABLE IF EXISTS schedule;";
            tx.executeSql(sql, options, successDrop, errorHandler);

            console.info("Dropping Table: statistics");
            sql = "DROP TABLE IF EXISTS statistics;";
            tx.executeSql(sql, options, successDrop, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    insertData: function () {
        localStorage.setItem("insertData", "1");
    }
};
