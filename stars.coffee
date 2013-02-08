jQuery () ->
   # turns an element into a random object with star constraints
   starify = (star) ->
      # Give random positon
      star.css 'left', "#{Math.random() * 100}%"
      star.css 'top', "#{Math.random() * 100}%"

      # Give random color
      # color is base +/- range
      baseRed = 249
      rangeRed = 12
      
      baseGreen = 238
      rangeGreen = 8

      baseBlue = 198
      rangeBlue = 5

      red = Math.round rangeRed - (Math.random() * rangeRed * 2) + baseRed
      green = Math.round rangeGreen - (Math.random() * rangeGreen * 2) + baseGreen
      blue = Math.round rangeBlue - (Math.random() * rangeBlue * 2) + baseBlue
      
      console.log("rgb(#{red},#{green},#{blue})")

      star.css 'background-color', "rgb(#{red},#{green},#{blue})"

      timein = 3000 + Math.random() * 4000
      timefade = 2000 + Math.random() * 9000

      # Give it a twinkle by animating
      setTimeout () -> # Set a random delay to desynchronize
         setInterval () ->
            star
               .animate({ opacity: .1 + .9 * Math.random() }, timein)
               .animate({ opacity: 0 }, timefade)
            timefade + timein + Math.random * 2000 + 200
         Math.random() * 5000
   
   
   # Make some stars
   # tiny
   jQuery("#stars").append("<div class=\"star tiny\"></div>") for [1..400]
   # Small
   jQuery("#stars").append("<div class=\"star small\"></div>") for [1..20]
   # Large
   jQuery("#stars").append("<div class=\"star large\"></div>") for [1..5]


   # Make all stars into stars
   stars = $('.star')
   for star in stars
      starify $(star)
