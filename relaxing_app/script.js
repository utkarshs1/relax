const container = document.querySelector(".container");
const circleText = document.querySelector(".circleText");
const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  circleText.innerHTML = "Inhale with awareness of breath . . .";
  container.className = "container grow";
  setTimeout(() => {
    circleText.innerHTML = ". . . Hold on . . .";
    setTimeout(() => {
      circleText.innerHTML = "Exhale with awareness . . .";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
