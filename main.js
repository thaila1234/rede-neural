

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 camera = document.getElementById("webcam");
 Webcam.attach('#webcam');

 function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captura_imagem" src="'+data_uri+'"/>'
    })
 }
 console.log(ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Op7jDQ27Q/model.json', modelLoaded)
 function modelLoaded(){
    console.log("Modelo carregado")
 }

 function check(){
   img = document.getElementById("captura_imagem");
   classifier.classify(img, gotResult)
 }

 function gotResult(error, results){
   if (error){
      console.error("error");
   }
   else {
      console.log(results);
      var synth = window.speechSynthesis;
      speakData = "isto é" + results[0].label;
      var utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
      document.getElementById("resultObjectName").innerHTML = results[0].label;
      document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(2);
   }
 }