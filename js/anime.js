$(document).ready(function () {
    var imageDiv = $("#imageRotator");
    var imageRotator = imageDiv.imageRotator({
        imageTime: 4000,
        fadeTime: 3000
    });
    imageRotator.start();
});