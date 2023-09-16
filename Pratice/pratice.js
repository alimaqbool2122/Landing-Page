'use strict';

// for navigation toggle.

const navtoggle = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navtoggle.addEventListener( "click", function() {
header.classList.toggle("active");
});
