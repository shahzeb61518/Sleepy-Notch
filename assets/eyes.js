// Fills every .bar with two eyes beside a camera dot. Tapping a bar blinks it, like the app's preview.
(function () {
  var eye = function (side) {
    return '<span class="eye ' + side + '"><span class="ball"><span class="iris"></span><span class="lid"></span></span>' +
      '<i class="lash"></i><i class="lash"></i><i class="lash"></i><i class="blush"></i></span>';
  };
  document.querySelectorAll('.bar').forEach(function (bar) {
    bar.innerHTML = eye('l') + '<span class="cam"></span>' + eye('r');
    bar.setAttribute('role', 'img');
    bar.addEventListener('click', function () {
      bar.classList.remove('tap');
      void bar.offsetWidth; // restart the animation on every tap
      bar.classList.add('tap');
    });
  });
})();
