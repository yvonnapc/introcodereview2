$(document).ready(function(){
  var total = 0;
  var userInput;

  $("form").submit(function(event) {
    for(var i = 1; i < 20; i ++){
      var userInput = $("input[name=optionsRadio" + i + "]:checked").val();
      userInput = parseInt(userInput);
      total += userInput;
      console.log(total);
  }

  if (total === 0){
    $("#location1").append();
  } else if (total === 1){
    $("#location2").append();
  }

  console.log('test');

  event.preventDefault();
});
});
