(function() {
  jQuery(function() {
    var star, starify, stars, _i, _j, _k, _l, _len, _results;
    starify = function(star) {
      var baseBlue, baseGreen, baseRed, blue, green, rangeBlue, rangeGreen, rangeRed, red, timefade, timein;
      star.css('left', "" + (Math.random() * 100) + "%");
      star.css('top', "" + (Math.random() * 100) + "%");
      baseRed = 249;
      rangeRed = 12;
      baseGreen = 238;
      rangeGreen = 8;
      baseBlue = 198;
      rangeBlue = 5;
      red = Math.round(rangeRed - (Math.random() * rangeRed * 2) + baseRed);
      green = Math.round(rangeGreen - (Math.random() * rangeGreen * 2) + baseGreen);
      blue = Math.round(rangeBlue - (Math.random() * rangeBlue * 2) + baseBlue);
      console.log("rgb(" + red + "," + green + "," + blue + ")");
      star.css('background-color', "rgb(" + red + "," + green + "," + blue + ")");
      timein = 3000 + Math.random() * 4000;
      timefade = 2000 + Math.random() * 9000;
      return setTimeout(function() {
        setInterval(function() {
          star.animate({
            opacity: .1 + .9 * Math.random()
          }, timein).animate({
            opacity: 0
          }, timefade);
          return timefade + timein + Math.random * 2000 + 200;
        });
        return Math.random() * 5000;
      });
    };
    for (_i = 1; _i <= 400; _i++) {
      jQuery("#stars").append("<div class=\"star tiny\"></div>");
    }
    for (_j = 1; _j <= 20; _j++) {
      jQuery("#stars").append("<div class=\"star small\"></div>");
    }
    for (_k = 1; _k <= 5; _k++) {
      jQuery("#stars").append("<div class=\"star large\"></div>");
    }
    stars = $('.star');
    _results = [];
    for (_l = 0, _len = stars.length; _l < _len; _l++) {
      star = stars[_l];
      _results.push(starify($(star)));
    }
    return _results;
  });
}).call(this);
