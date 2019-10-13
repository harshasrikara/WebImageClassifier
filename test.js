function submit() {
  const img = document.getElementById('img');
  var output_result = document.getElementById('result_output');
  var output_result_two = document.getElementById('result_output_two');
  var output_result_three = document.getElementById('result_output_three');

  var form_text = document.getElementById("pic_data").value;
  img.src = form_text;
  console.log(form_text);

  // Load the model.
  mobilenet.load().then(model => {
    // Classify the image.
    model.classify(img).then(predictions => {
      console.log('Predictions: ');
      console.log(predictions); 
      output_result.innerHTML = "1. prediction: " + predictions[0].className + " | score: " + predictions[0].probability;
      output_result_two.innerHTML = "2. prediction: " + predictions[1].className + " | score: "+ predictions[1].probability;
      output_result_three.innerHTML = "3. prediction: " + predictions[2].className + " | score: " + predictions[2].probability;
    })
})
}