//set interval function runs the same code over and over
let timer = 10;
let points= 0;


//add the above to run when you click a button called start and hide overlay element to show the game below
$(".start").click(function(){
  $(".gameOverlay").hide();
  setInterval(function () {
    if (timer > 0);{
      timer = timer + 1;
      $(".nameofdiv").text(timer);
    } else {
      $(".divNamegameover").show();
    }
  }, 1000);
}

$(".good").click(function(){
  points = points + 5;
  $(".pointsText").text(points);

});

$(".bad").click(function(){
  points = points - 5;
  $(".pointsText").text(points);

});
