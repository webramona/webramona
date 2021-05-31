const play = document.querySelector(".fa-play");
const ventanamodal = document.querySelector(".popup-modal");

play.onclick = function(){
    ventanamodal.style.transform = "scaleX(1)";
}
ventanamodal.onclick = function(){ 
    ventanamodal.style.transform = "scaleX(0)";
}