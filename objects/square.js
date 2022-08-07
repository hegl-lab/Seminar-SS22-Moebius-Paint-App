/**
* function addSquare uses lines from the class lin to link lines to a square
*
*
* @authors Mouna Deubler, Yunus Sahin and Juliane Stehle
* @version 1.0
* @since   2022-08-01
*/

function addSquare() {
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
                
                rightAboveX = pmouseX
                rightAboveY =  mousey
                leftAboveX = mousex
                leftAboveY =  pmouseY
                // 4 lines are inserted here
                if((sq(abs(rightAboveX - size)) + sq(abs(rightAboveY - size)) < sq(size))  &&
                 (sq(abs(leftAboveX - size)) + sq(abs(leftAboveY - size)) < sq(size))) {

                    objectContainer.push(new Lin((mousex - size) /size, - ((mousey - size)/ size),(rightAboveX - size) /size, - ((rightAboveY - size+1)/ size),currentColor,strokeSize))    
                    objectContainer.push(new Lin((pmousex - size) /size, - ((pmousey - size)/ size),(rightAboveX - size) /size, - ((rightAboveY - size+1)/ size),currentColor,strokeSize))      
                    objectContainer.push(new Lin((mousex - size) /size, - ((mousey - size)/ size),(leftAboveX - size) /size, - ((leftAboveY - size)/ size),currentColor,strokeSize))
                    objectContainer.push(new Lin((pmousex - size) /size, - ((pmousey - size)/ size),(leftAboveX - size) /size, - ((leftAboveY - size+1)/ size),currentColor,strokeSize))
            
                } else {
                    firstClick = false
                } 
            } else {
                firstClick = false
            }
        }
    }
}