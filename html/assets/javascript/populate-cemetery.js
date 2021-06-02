function populateCemetery(bodies) {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, bodies);
  document.getElementById('cemetery').innerHTML = rendered;
}
