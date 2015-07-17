module.exports = function(jokes) {
  if (!jokes) {
    jokes = [
      { setup: "What's the difference between a guitar and a fish?",
        punchline: "You can't tuna fish" },
      { setup: "What do you get when you cross a cow and a duck?",
        punchline: "Milk and quackers." },
      { setup: "How many tickles does it take to make an octopus laugh",
        punchline: "Ten tickles" }
    ];
  }

  function randomIndexValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return randomIndexValue(jokes);
};
