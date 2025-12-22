console.log("hello");
console.log("World");
console.log("just checking commit");

let likeCount = 0;

const button = document.getElementById("likeBtn");
const countDisplay = document.getElementById("count");
const sound = new Audio("audio/free-dog-bark-419014.mp3");

button.addEventListener("click", () => {
  likeCount++;
  countDisplay.textContent = "Likes: " + likeCount;
  sound.play();
<<<<<<< HEAD
    
=======
  alert("Woof! Woof! you liked me " + likeCount);

  
>>>>>>> c929c7fe1bc18413474dd2df28c98d481074ffe0
});
