// if- else if - else statements

let choosenPath = prompt("Choose a path: forest, mountain, or beach:");

if (choosenPath === "forest") {
  console.log("You have chosen the forest path. Enjoy the greenery and wildlife!");
}
else if (choosenPath === "mountain") {
  console.log("You have chosen the mountain path. Prepare for a challenging hike!");
}
else if (choosenPath === "beach") {
  console.log("You have chosen the beach path. Relax and soak up the sun!");
}
else {
  console.log("Invalid choice. Please choose either forest, mountain, or beach.");
}