function populateCemetery(bodies) {
  // var template = document.getElementById('template').innerHTML;
  fetch('/assets/templates/corpses.mustache')
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, bodies);
      document.getElementById('cemetery').innerHTML = rendered;
    });
}
