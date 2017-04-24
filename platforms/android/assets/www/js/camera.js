/**
 * File Name: camera.js
 *
 * Revision History:
 *       Sabbir Ahmed, 2017-04-19 : Created
 */

function capturePhoto() {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI, //will save to storage/sdcard0/Andriod/data/com.example.cameraapp
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true
    };

    function onSuccess(imageURI) {
        var image = $("#imgSnap");
        image.prop("src" , imageURI);
    }

    function onFail(message) {
        alert("Failed because: " + message);
    }

    navigator.camera.getPicture(onSuccess , onFail, options);
}

function capturePhotoEdit() {
    var options = {
        quality: 50,
        allowEdit: true,
        destinationType: Camera.DestinationType.DATA_URL, //will save to storage/sdcard0/Andriod/data/com.example.cameraapp
        sourceType: Camera.PictureSourceType.CAMERA
    };

    function onSuccess(imageData) {
        var image = document.getElementById("imgSnap");
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert("Failed because: " + message);
    }

    navigator.camera.getPicture(onSuccess , onFail, options);
}

function capturePhotoFromLibrary() {
    var options = {
        quality: 50,
        allowEdit: true,
        destinationType: Camera.DestinationType.FILE_URI, //will save to storage/sdcard0/Andriod/data/com.example.cameraapp
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    };

    function onSuccess(imageURI) {
        var image = $("#imgSnap");
        image.prop("src" , imageURI);
    }

    function onFail(message) {
        alert("Failed because: " + message);
    }

    navigator.camera.getPicture(onSuccess , onFail, options);
}