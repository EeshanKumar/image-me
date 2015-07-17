module.exports = function(songs) {
  if (!songs) {
    songs = [
      "Har Har Har",
      "Wocka Flocka Docka",
      "Ting Tang Walla Walla Bing Bang",
      "Shobedo Op",
      "Check, check me out",
      "Hip Hop And You Don\'t Stop"
    ];
  }

  function randomIndexValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return randomIndexValue(songs);
};
