/**
 * Created by acarreiro-cc on 2/9/2017.
 */

function populateStats() {
    var players = [];

    function successSelectAllPlayers(tx, results) {
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            players[i] = row['playerName'];
        }
    }

    function successSelectAllStatistics(tx, results) {
        var htmlCode = "";

        htmlCode += "<thead>" +
            "<tr>" +
            "<th>Player Name</th>" +
            "<th>Kills</th>" +
            "<th>Deaths</th>" +
            "<th>POTG</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            htmlCode += "<tr>" +
                "<td>" + players[i] + "</td>" +
                "<td>" + row['kills'] + "</td>" +
                "<td>" + row['deaths'] + "</td>" +
                "<td>" + row['gamePlayer'] + "</td>" +
                "</tr>";
        }
        htmlCode += "</tbody>";

        var stats = $("#teamTable");
        stats = stats.html(htmlCode);
        stats.table("refresh");
    }
    Players.selectAll(successSelectAllPlayers);
    Statistics.selectAll(successSelectAllStatistics);
}

function populatePlayers() {
    function successSelectAll(tx, results) {
        var htmlcode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlcode += "<option value=" + row['id'] + ">" + row['playerName'] + "</option>";
        }

        var typeSelect = $("#playerNames");
        typeSelect = typeSelect.html(htmlcode);
        typeSelect.selectmenu("refresh");
        typeSelect.change();
    }
    Players.selectAll(successSelectAll);

}
function populatePlayers2() {
    function successSelectAll(tx, results) {
        var htmlcode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlcode += "<option value=" + row['id'] + ">" + row['playerName'] + "</option>";
        }

        var typeSelect = $("#playerNames2");
        typeSelect = typeSelect.html(htmlcode);
        typeSelect.selectmenu("refresh");
    }

    Players.selectAll(successSelectAll);
}

function populateTeams() {
    function successSelectAll(tx, results) {
        var htmlcode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlcode += "<option value=" + row['id'] + ">" + row['teamName'] + "</option>";
        }

        var typeSelect = $("#teamNames");
        typeSelect = typeSelect.html(htmlcode);
        typeSelect.selectmenu("refresh");
        typeSelect.change();
    }
    Team.selectAll(successSelectAll);
}

function editStats() {

    var id = $("#playerNames").selectmenu("refresh").val();
    console.info(id);
    var options = [id];

    function successSelectOne(tx, results) {
        var row = results.rows[0];

        $("#killNum").val(row['kills']);
        $("#deathNum").val(row['deaths']);
        $("#potgNum").val(row['gamePlayer']);
    }
    Statistics.select(successSelectOne,options);
}

function editStandings() {

    var id = $("#teamNames").selectmenu("refresh").val();
    //console.info(id);
    var options = [id];

    function successSelectOne(tx, results) {
        var row = results.rows[0];

        $("#winNum").val(row['gameWins']);
        $("#loseNum").val(row['gameLoss']);
        $("#pointNum").val(row['teamPoints']);
    }
    Standings.select(successSelectOne,options);
}

function updateStat() {

    var playerId = $("#playerNames").val();
    var kills = $("#killNum").val();
    var deaths = $("#deathNum").val();
    var potg = $("#potgNum").val();

    var options = [playerId, kills, deaths, potg, playerId];
    Statistics.update(options);
    $(location).prop('href',"#pageTeamStats");
}

function updateStandings() {
    var teamId = $("#teamNames").val();
    var teamPoints = $("#pointNum").val();
    var gameWins = $("#winNum").val();
    var gameLoss = $("#loseNum").val();

    var options = [teamId, teamPoints, gameWins, gameLoss, teamId];
    Standings.update(options);
    $(location).prop('href',"#pageStandings");
}

function populateStandings() {
    var teams = [];

    function successSelectAllTeams(tx, results) {
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            teams[i] = row['teamName'];
        }
    }

    function successSelectAllStandings(tx, results) {
        var htmlCode = "";

        htmlCode += "<thead>" +
            "<tr>" +
            "<th>Team Name</th>" +
            "<th>Wins</th>" +
            "<th>Losses</th>" +
            "<th>Points</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            htmlCode += "<tr>" +
                "<td>" + teams[i] + "</td>" +
                "<td>" + row['gameWins'] + "</td>" +
                "<td>" + row['gameLoss'] + "</td>" +
                "<td>" + row['teamPoints'] + "</td>" +
                "</tr>";
        }
        htmlCode += "</tbody>";

        var standings = $("#standingsTable");
        standings = standings.html(htmlCode);
        standings.table("refresh");
    }
    Team.selectAll(successSelectAllTeams);
    Standings.selectAll(successSelectAllStandings);
}

function addGameSchedule() {
    var options = [];

    var dataOfGame = $("#dataOfGame").val();
    var timeOfGame = $("#timeOfGame").val();
    var locationOfGame = $("#locationGame").val();
    var winner = "";
    var gameComments = "";

    options = [dataOfGame, timeOfGame, locationOfGame, winner,gameComments];
    Schedule.insert(options);
}

function calculatePoints() {
    var wins = $("#winNum").val();
    var points = wins * 3;
    $("#pointNum").val(points);
}

//My ADDS Start
function addGameSchedule() {
    var options = [];

    var dataOfGame = $("#dataOfGame").val();
    var timeOfGame = $("#timeOfGame").val();
    var locationOfGame = $("#locationGame").val();
    var winner = "";
    var gameComments = "";




    options = [dataOfGame, timeOfGame, locationOfGame, winner,gameComments];
    Schedule.insert(options);
    }
function  getSchedule() {
    function callback(tx, results) {
        var htmlCode = "";

        for(var i=0; i < results.rows.length; i++)
        {
            var row = results.rows[i];

            console.info("Date: " + row['date'] + " Time: " + row['time'] + " Location: " +
                row['location'] + "Winner: " + row['winner']);

            htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h1>Date: " + row['date'] + "</h1>" +
                "<p>Time: " + row['time'] + "</p>" +
                "<p>Location: " + row['location'] + "</p>" +
                "<p>Winner: " + row['winner'] + "</p>";
            htmlCode += "</a></li>";
        }
        var lv = $("#ScheduleList").html(htmlCode).listview("refresh");



        $("#ScheduleList a").on("click", clickHandler);
        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', "#pageEditSchedule");
        }
    }

    Schedule.selectAll(callback);
}
function updateSchedule() {
    var id = localStorage.getItem("id");
    console.info(id);

    var dataOfGame = $("#dataOfGame1").val();
    var timeOfGame =   $("#timeOfGame1").val();
    var locationOfGame = $("#locationGame1").val();
    var winner = "";
    var win = $("#homeWin1").val();
    var lose = $("#awayWin1").val();
    if($("#homeWin1").prop("checked")){
        winner = "win";
    }
    else{
        winner = "away";
    }
    var gameComments = $("#textAreaComments1").val();


console.info(winner);


    var options = [dataOfGame, timeOfGame, locationOfGame, winner,gameComments, id];

    Schedule.update(options);
    $(location).prop("href", "#pageSchedule");
}
function showCurrentGame() {

    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];


        $("#dataOfGame1").val(row['date']);
        $("#timeOfGame1").val(row['time']);
        $("#locationGame1").val(row['location']);
        var win = $("#homeWin1").val();
        var lose = $("#awayWin1").val();
        if(win == true){
            win = row['winner'];
        }
        else{
            lose = (row['winner']);
        }
        $("#textAreaComments").val(row['gameComments']);

    }
    Schedule.select(callback,options);
}
function deleteGame(){

    var id = localStorage.getItem("id");
    var options = [id];

    Schedule.delete(options);

    $(location).prop("href" , "#pageSchedule");

}
//My ADDS End

