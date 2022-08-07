# ReadMe
This app is a raster graphics editor in hyperbolic geometry using the Pointcaré disk model.

## Using the app
One way to open the app is this: 
1. Open a terminal and `cd` to where the index.html file is located.
2. Type `python -m http.server` in the terminal (Python needs to be installed in order to do that).
3. Type `http://localhost:8000/` in your web browser.

Now you can use the app to paint with a paintbrush of a constant hyperbolic radius and you can also draw geodesics, certain rectangles, triangles and stars. It is also possible to erase the objects on the canvas (in order to do so for lines one needs to erase one of the lines' ends) and to save the drawn image as a PNG file by clicking on the "Download" button.

## Mathematics (helpful links and references)
General information about hyperbolic geometry and the Pointcaré disk model can be found in various media, for example [here](https://en.wikipedia.org/wiki/Hyperbolic_geometry) and [here](https://en.wikipedia.org/wiki/Poincar%C3%A9_disk_model).

Geodesics can be constructed by using this [method](https://en.wikipedia.org/wiki/Poincar%C3%A9_disk_model#Compass_and_straightedge_construction).
For circle inversion, see the [instruction on wikipedia]( https://en.wikipedia.org/wiki/Inversive_geometry#Inversion_in_a_circle).

The paint brush draws circles with a constant hyperbolic radius. In order to determine the euclidean equivalent to this hyperbolic radius, one can use the method presented in the [answer](https://math.stackexchange.com/questions/1999632/construction-of-hyperbolic-circles-with-a-given-radius) by user "Blue" on November 4, 2016 at 11:32pm. It uses [hyperbolic distance in the Pointcaré disk model](https://en.wikipedia.org/wiki/Poincar%C3%A9_disk_model#Distance).

## Programming references
Various parts of the app "Hyperpaint" (see [here](https://editor.p5js.org/zokalyx/full/ESz3r4_Tu) and [here](https://www.reddit.com/r/math/comments/khiu0c/i_made_an_online_hyperbolic_paint_it_uses_the/)) by "zokalyx" were used.

Some of the app's functions involve explicit formulas, e.g. the function of drawing geodesics uses formulas derrived by using (if recalled correctly) some of the websites listed under [Mathematics](#mathematics-helpful-links-and-references).

## Possible future steps
Various features could be added to the app in the future. Here are some examples:
* a fill-in function
* a function to reflect the drawn image along hyperbolic lines
* a function to draw circles (without filling)
* functions to draw other polygons
* an opportunity to save drawn images in a way that they can be edited again with the editor
* adjustment of the line thickness in such a way that its hyperbolic size is constant (currently lines are drawn with constant Euclidean thickness)
