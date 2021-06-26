let btn = document.querySelector("button");
let output = document.querySelector("h1");
function getRandomImage(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

let myImages = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
  "image7",
  "image8",
];
// console.log(myImages);

// restart function
function restart() {
  myImages.push(
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
    "image7",
    "image8"
  );
  //   console.log(myImages);
}

btn.addEventListener("click", () => {
  if (myImages.length == 0) {
    restart();
  }

  let randomIndex = getRandomImage(0, myImages.length - 1);
  let randomImage = myImages[randomIndex];
  myImages.splice(randomIndex, 1);
  output.innerText = randomImage;
});
