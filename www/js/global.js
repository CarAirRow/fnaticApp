
function btnSaveSchedule_click() {
    if(doValidation_AddScheduleForm())
    {
        $(location).prop('href',"#pageSchedule");
        addGameSchedule();
    }
}
function btnSave_click() {
    if(doValidation_EditScheduleForm()){
        updateSchedule();
    }

}
function btnConfirmTeamStats_click() {
    if(doValidation_EditTeamStatsForm())
    {
        updateStat();
    }
}
function btnConfirmStandings_click() {
    if(doValidation_EditStandingsForm())
    {
        updateStandings();
    }
}
var cameraReady = false;
function document_deviceready() {
    cameraReady = true;
    $("#lblMessage").text("Camera is ready, take a picture...");
}
function btnCapturePhoto_click() {
    if(cameraReady){
        capturePhoto();
    }
    else{
        alert("Camera is not ready");
    }
}
function btnCapturePhotoEdit_click() {
    if(cameraReady){
        capturePhotoEdit();
    }
    else{
        alert("Camera is not ready");
    }
}
function btnFromPhotoLibrary_click() {
    if(cameraReady){
        capturePhotoFromLibrary();
    }
    else{
        alert("Camera is not ready");
    }
}

function teamStats_pageshow() {
    populateStats();
}
function editTeamStats_pageshow() {
    populatePlayers();
    //editStats();
}
function editStandings_pageshow() {
    populateTeams();
}
function editSchedule_pageshow() {
	showCurrentGame();
    populatePlayers2();
}
function teamStandings_pageshow() {
    populateStandings();
}
function teamNames_change() {
    editStandings();
}
function playerNames_change() {
    editStats();
}
function winNum_change() {
    calculatePoints();
}
function pageSchedule_pageshow() {
    getSchedule();
}
function btnDelete_click () {
    deleteGame();
}
function init(){
    $("#btnSaveSchedule").on("click", btnSaveSchedule_click);
    $("#btnSave").on("click", btnSave_click);
    $("#btnConfirmTeamStats").on("click", btnConfirmTeamStats_click);
    $("#btnConfirmStandings").on("click", btnConfirmStandings_click);
	$("#btnDelete").on("click", btnDelete_click);

    $("#pageTeamStats").on("pageshow", teamStats_pageshow);
    $("#pageEditTeamStats").on("pageshow", editTeamStats_pageshow);
    $("#pageEditStandings").on("pageshow", editStandings_pageshow);
    $("#pageEditSchedule").on("pageshow", editSchedule_pageshow);
    $("#pageStandings").on("pageshow", teamStandings_pageshow);
	$("#pageSchedule").on("pageshow", pageSchedule_pageshow);
	 

    $("#playerNames").on("change", playerNames_change);
    $("#teamNames").on("change", teamNames_change);
    $("#winNum").on("change", winNum_change);


    $(document).on("deviceready", document_deviceready);
    $("#btnCapturePhoto").on("click" , btnCapturePhoto_click);
    $("#btnCapturePhotoEdit").on("click" , btnCapturePhotoEdit_click);
    $("#btnFromPhotoLibrary").on("click" , btnFromPhotoLibrary_click);

}
$(document).ready(function () {
    initDB();
    init();
});

function initDB() {
    console.info("Creating Database in initDB()");
    try{
        DB.createDatabase();
        if(db){
            console.info("before create:"+localStorage.getItem("insertData"));
            DB.createTables();
            console.info("after create:"+localStorage.getItem("insertData"));
            DB.insertData();
            console.info("after set:"+localStorage.getItem("insertData"));
        }
    }
    catch (e){
        console.error("Error: Fatal error in initDB, can not proceed" + e.message);
    }
}
