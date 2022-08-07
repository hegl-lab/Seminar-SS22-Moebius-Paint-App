/**
* function addTriangle uses lines from the class lin to link lines to a triangle
*
*
* @authors Mouna Deubler, Yunus Sahin and Juliane Stehle
* @version 1.0
* @since   2022-08-01
*/

function addTriangle() {
    if (mouseIsPressed === true) {
        if(firstClick === false) {
            if(sq(abs(mouseX - size)) + sq(abs(mouseY - size)) < sq(size)) {
                mousex = mouseX
                mousey = mouseY
                firstClick = true
            }
        }
      } else {
        if (firstClick) {
            if(sq(abs(mouseX - size)) + sq(abs(mouseY - size)) < sq(size)) {
                pmousex = pmouseX
                pmousey = pmouseY
                firstClick = false
                //4 cases
                //1.case : second click is below the first one
                //1.1 right below of the first click
                if (pmousex >= mousex && pmousey >= mousey) {
                    topx = mousex
                    topy = mousey
                    rightx = pmousex
                    righty = pmouseY
                    leftx = mousex - abs(pmousex - mousex)
                    lefty = pmouseY
                }
                else if(pmousex <= mousex && pmousey >= mousey) { //left below
                    topx = mousex
                    topy = mousey
                    leftx = pmousex
                    lefty = pmouseY
                    rightx = mousex + abs(mousex - pmousex)
                    righty = pmouseY
                } else if(pmousex <= mousex && pmousey <= mousey) { //left above
                    topx = mousex - (abs(pmousex - mousex))/2 
                    topy = pmousey
                    rightx = pmousex 
                    righty = mousey
                    leftx = mousex
                    lefty = mousey
                } else if(pmousex >= mousex && pmousey <= mousey) { //right above
                    topx = mousex + (abs(pmousex - mousex))/2
                    topy = pmousey
                    leftx = pmousex 
                    lefty = mousey
                    rightx = mousex
                    righty = mousey
                }

                //three lines are inserted here
                if((sq(abs(rightx - size)) + sq(abs(righty - size)) < sq(size))  &&
                 (sq(abs(leftx - size)) + sq(abs(lefty - size)) < sq(size)) && 
                 (sq(abs(topx - size)) + sq(abs(topy - size)) < sq(size))
                 ) {
                    objectContainer.push(new Lin((topx - size) /size, - ((topy - size)/ size),(leftx - size) /size, - ((lefty - size)/ size),currentColor,strokeSize))
                    objectContainer.push(new Lin((rightx - size) /size, - ((righty - size)/ size),(leftx - size) /size, - ((lefty - size+1)/ size),currentColor,strokeSize))
                    objectContainer.push(new Lin((topx - size) /size, - ((topy - size)/ size),(rightx - size) /size, - ((righty - size)/ size),currentColor,strokeSize))
                    
            } else {
                    firstClick = false
                } 
            } else {
                firstClick = false
            }
        }
    }
}