"use strict";

//З використанням синтаксису jQuery:
var form = $('#form');
form.on('submit', function (e) {
  e.preventDefault();
});
$(document).ready(function () {
  var changingLogoBtn = $('#btn_changing_logo');
  changingLogoBtn.on('click', function (event) {
    event.preventDefault();
    var logo = $('#logo');
    var logoSrc = logo.attr('src');

    if (logoSrc === '/assets/images/google-logo.png') {
      logo.attr('src', '/assets/images/odditytech-logo.png');
    } else {
      logo.attr('src', '/assets/images/google-logo.png');
    }
  });
}); // Те саме на Стандартному JavaScript
// const form = document.getElementById('form'); 
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); 
// });
// document.addEventListener('DOMContentLoaded', function() {
//     let changingLogoBtn = document.getElementById('btn_changing_logo');
//     changingLogoBtn.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         let logo = document.getElementById('logo');
//         let logoSrc = logo.getAttribute('src');
//         if (logoSrc === '/assets/images/google_logo.png') {
//             logo.setAttribute('src', '/assets/images/odditytech_logo.png');
//         } else {
//             logo.setAttribute('src', '/assets/images/google_logo.png');
//         }
//     });
// });