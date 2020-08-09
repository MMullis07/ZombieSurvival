var counter = 20;
const treasure = (location) =>
{
  counter = counter - 1;
  if (counter < 1)
   {
    alert ("You lose!")
    document.getElementById("table").style.pointerEvents = "none";
  }
  document.getElementById("count").innerHTML = counter
  //Variable for random location of zombie
  var randomZom = Math.floor(Math.random() * 25)
  //Variable for random location of resources
  var randomRes = Math.floor(Math.random() * 25)
  console.log("Zombie", randomZom)
  console.log("Resources", randomRes)
  if (location == randomZom)
  {
    alert("You have been bitten by a zombie and have joined the hoarde!")
    document.getElementById(location).innerHTML = "<img src = 'https://freesvg.org/img/Zombie-flat.png' height = '50px'>";
    document.getElementById("table").style.pointerEvents = "none";
    document.getElementById(location).style.pointerEvents = "none";
  }
  else if (location == randomRes)
  {
    alert("You survived the hoard!")
    document.getElementById(location).innerHTML = "<img src = 'https://pngimg.com/uploads/treasure_chest/treasure_chest_PNG53.png' height = '50px'>";
    document.getElementById("table").style.pointerEvents = "none";
    document.getElementById(location).style.pointerEvents = "none";


  }
  else if (location == randomZom && location == randomRes)
  {
    document.getElementById(location).innerHTML = "<img src = 'https://cdn.pixabay.com/photo/2014/12/21/23/36/shovel-575661_960_720.png' height = '50px'>";
  }
  else
  {
    document.getElementById(location).innerHTML = "<img src = 'https://cdn.pixabay.com/photo/2014/12/21/23/36/shovel-575661_960_720.png' height = '50px'>";
    document.getElementById(location).style.pointerEvents = "none";
  }
}
