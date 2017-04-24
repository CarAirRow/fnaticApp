/**
 * File Name: DAL.js
 *
 * Revision History:
 *       Birju Patel, 2017-04-18 : Created
 */


var Standings = {
    insert: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("New Record Added");
        }

        function txFunction(tx) {
            var sql = "";
            sql = "INSERT INTO standings(teamName, gameWins, gameLoss, teamPoints)" +
                " values(?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM standings;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    select: function (callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a record.  ");
            var sql = "SELECT * FROM standings WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    update: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successUpdate() {
            console.info("Success: Update successful");
            alert("Record Updated successfully");
        }

        function txFunction(tx) {
            console.info("Updating..  ");
            var sql = "";
            sql = "UPDATE standings " +
                "SET teamId=?, teamPoints=?, gameWins=?, gameLoss=? " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);

    },

    delete: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successDelete() {
            console.info("Success: Delete successful");
            alert("Record Deleted successfully");
        }

        function txFunction(tx) {
            console.info("Deleting..  ");
            var sql = "";
            sql = "DELETE FROM standings " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successDelete, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};


var Schedule = {
    insert: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("New Record Added");
        }

		function txFunction(tx) {
            var sql;
            sql = "INSERT INTO schedule(date, time, location, winner, gameComments) " +
                "VALUES(?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);

    },

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM schedule;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    select: function (callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a record.  ");
            var sql = "SELECT * FROM schedule WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    update: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successUpdate() {
            console.info("Success: Update successful");
            alert("Record Updated successfully");
        }

	function txFunction(tx) {
            console.info("Updating..  ");
            var sql = "";
            sql = "UPDATE schedule " +
                "SET date=?, time=?, location=?, winner=?, gameComments=? " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    delete: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successDelete() {
            console.info("Success: Delete successful");
            alert("Record Deleted successfully");
        }

        function txFunction(tx) {
            console.info("Deleting..  ");
            var sql = "";
            sql = "DELETE FROM schedule " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successDelete, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};


var Statistics = {
    insert: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("New Record Added");
        }

        function txFunction(tx) {
            var sql = "";
            sql = "INSERT INTO statistics(playerName, kills, deaths, gamePlayer) values(?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM statistics;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    select: function (callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a record.  ");
            var sql = "SELECT * FROM statistics WHERE playerId=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    update: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successUpdate() {
            console.info("Success: Update successful");
            alert("Record Updated successfully");
        }

        function txFunction(tx) {
            console.info("Updating..  ");
            var sql = "";
            sql = "UPDATE statistics " +
                "SET playerId=?, kills=?, deaths=?, gamePlayer=? " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    delete: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successDelete() {
            console.info("Success: Delete successful");
            alert("Record Deleted successfully");
        }

        function txFunction(tx) {
            console.info("Deleting..  ");
            var sql = "";
            sql = "DELETE FROM statistics " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successDelete, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};


var Team = {

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all teams...");
            var sql = "SELECT * FROM team;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var Players = {

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all players...");
            var sql = "SELECT * FROM players;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};





