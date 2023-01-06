Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach("#camera")
function snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '">';
    });
}

function check() {
    var result = document.getElementById("result");
    classifier.classify(result, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion1_name").innerHTML = results[0].label;
        document.getElementById("result_emotion2_name").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        if (results[0].label == "best") {
            document.getElementById("result_emotion1_name").innerHTML = "&#128077";
        }
        if(results[0].label == "amazing"){
            document.getElementById("result_emotion1_name").innerHTML="&#9996";
        }
        if(result[0].label=="victory"){
            document.getElementById("result_emotion1_name").innerHTML="&#128076";
        }
        if(result[1].label=="best"){
            document.getElementById("result_emotion2_name").innerHTML="&#128077";
        }
        if(result[1].label=="amazing"){
            document.getElementById("result_emotion2_name").innerHTML="&#9996";
        }
        if(result[1])

    }
}

