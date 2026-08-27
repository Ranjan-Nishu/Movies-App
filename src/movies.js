
function BookClick(){
  document.getElementById("summaryContainer").style.display = "block";
  document.getElementById("buttonContainer").style.display = "none";

  document.getElementById("lblMovie").textContent = document.getElementById("lstMovies").value;

  document.getElementById("lblDate").textContent = document.getElementById("lstDate").value;

  document.getElementById("lblCinema").textContent = document.getElementById("lstCinema").value;

  document.getElementById("lblTiming").textContent = document.getElementById("lstTiming").value;

  poster = document.getElementById("imgPoster");
  movieName = document.getElementById("lstMovies").value;

if(movieName === "The Princess Diaries"){
   poster.src = "./Image/barbi.png";
} else if(movieName === "PAW Dino"){
  poster.src = "./Image/paw.png";
}else if(movieName === "MINIONS AND MONSTERS"){
  poster.src = "./Image/minion-monster.png";
}else if(movieName === "Desinity Movie"){
  poster.src = "./Image/Desinity.png";
}else{
  poster.src = "./Image/spider-man.png";
}

}

function ModifyClick(){
    document.getElementById("lblBooking").textContent = "Modify Booking";
    document.getElementById("btnBook").textContent = "Save"; 
    document.getElementById("btnBook").className = "btn btn-success";
}