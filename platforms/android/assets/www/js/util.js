
function  doValidation_AddScheduleForm() {
    var form = $("#AddScheduleForm");
    form.validate({
        rules:{
            dataOfGame:{
                required:true
            },
            timeOfGame:{
                required:true
            },
            locationGame:{
                required:true
            }
        },
        messages: {
            dataOfGame:{
                required:"Date of the game is required"
            },
            timeOfGame:{
                required: "Time of game is Required"
            },
            locationGame:{
                required:"Location of the game is required"
            }
        }
    });
    return form.valid();
}
function  doValidation_EditScheduleForm() {
    var form = $("#EditScheduleForm");
    form.validate({
        rules:{
            dataOfGame1:{
                required:true
            },
            timeOfGame1:{
                required:true
            },
            locationGame1:{
                required:true
            }
        },
        messages: {
            dataOfGame1:{
                required:"Date of the game is required"
            },
            timeOfGame1:{
                required: "Time of game is Required"
            },
            locationGame1:{
                required:"Location of the game is required"
            }
        }
    });
    return form.valid();
}

function  doValidation_EditTeamStatsForm() {
    var form = $("#EditTeamStatsForm");
    form.validate({
        rules:{
            killNum:{
                required:true
            },
            deathNum:{
                required:true
            },
            potgNum:{
                required:true
            }

        },
        messages: {
            killNum:{
                required:"Please Choose How Many Kills!"
            },
            deathNum:{
                required:"Please Choose How Many Deaths!"
            },
            potgNum:{
                required:"Please Choose How Many POTG!"
            }
        }
    });
    return form.valid();
}
function  doValidation_EditStandingsForm() {
    var form = $("#EditStandingsForm");
    form.validate({
        rules:{
            winNum:{
                required:true
            },
            loseNum:{
                required:true
            },
            pointNum:{
                required:true
            }

        },
        messages: {
            winNum:{
                required:"Please Choose How Many Wins!"
            },
            loseNum:{
                required:"Please Choose How Many Loses!"
            },
            pointNum:{
                required:"Please Choose How Many Points!"
            }
        }
    });
    return form.valid();
}
