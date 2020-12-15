"use strict";

var dropdown = document.getElementById('dropdownMenu');

dropdown.addEventListener('change', function() {
  var selectedSection = document.getElementById(dropdown.value);
  selectedSection.scrollIntoView({behavior: "smooth"});
});
