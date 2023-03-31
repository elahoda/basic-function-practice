var startMyDay = function () {
  console.log("run 5 miles");
};
startMyDay();

var favoriteCookie = function (cookie) {
  console.log(`My favorite cookie is ${cookie}`);
};

favoriteCookie("chocolate chip");

var introduce = function (name, occupation) {
  console.log(`Hi there, my name is ${name} and my I work as a ${occupation}`);
};
introduce("Harry", "Rocketman");

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you drink today?")
  );
  if (numGlasses > 8) {
    console.log("That's awesome. You can go to the bathroom now");
  } else {
    console.log("keep on chugging");
  }
};
hydrationFeedback();
