import { queueMove } from "./components/Player";

document
  .getElementById("forward")
  ?.addEventListener("click", () => queueMove("forward"));

document
  .getElementById("backward")
  ?.addEventListener("click", () => queueMove("backward"));

document
  .getElementById("left")
  ?.addEventListener("click", () => queueMove("left"));

document
  .getElementById("right")
  ?.addEventListener("click", () => queueMove("right"));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "w") {
    event.preventDefault();
    queueMove("forward");
  } else if (event.key === "ArrowDown" || event.key === "s") {
    event.preventDefault();
    queueMove("backward");
  } else if (event.key === "ArrowLeft" || event.key === "a") {
    event.preventDefault();
    queueMove("left");
  } else if (event.key === "ArrowRight" || event.key === "d") {
    event.preventDefault();
    queueMove("right");
  }
});
