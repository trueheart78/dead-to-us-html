function populateCemetery(bodies) {
  fetch('/assets/templates/corpses.mustache')
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, bodies);
      document.getElementById('cemetery').innerHTML = rendered;
    });
}

function populateFooter() {
  fetch('/assets/templates/footer.mustache')
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, {});
      document.getElementById('footer').innerHTML = rendered;
    });
}
