function populateCemetary(bodies) {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, bodies);
  document.getElementById('cemetary').innerHTML = rendered;
}
