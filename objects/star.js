/**
* function addStar uses lines from the class lin to link lines to a star
*
*
* @authors Mouna Deubler, Yunus Sahin and Juliane Stehle
* @version 1.0
* @since   2022-08-01
*/

function addStar() {
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
                /*
                Notation of star points:
                    (1) <-> left below point of star
                    (12) <-> between (1) and (2)
                    (2) <-> right below point of star
                    (23) <-> between (2) and (3)
                    (3) <-> right middle point of star
                    (34) <-> between (3) and (4)
                    (4) <-> top point of star
                    (45) <-> between (4) and (5)
                    (5) <-> left middle point of star
                    (15) <-> between (1) and (5)
                */
                if (pmousex > mousex && pmousey > mousey) { //right below, standard coordinates -> change nothing
                } else if(pmousex < mousex && pmousey < mousey) {
                    //change the coordinates of the first and second click in order to reduce code
                    let x = pmousex 
                    let y = pmousey
                    pmousex = mousex
                    pmousey = mousey
                    mousex = x
                    mousey = y
                } else if(pmousex < mousex && pmousey > mousey) {
                    let x = pmousex
                    pmousex = mousex
                    mousex = x
                } else if (pmousex > mousex && pmousey < mousey) {
                    let y = pmousey
                    pmousey = mousey
                    mousey = y
                }
                //calculate the end points of the star 
                point_1x = ((pmousex - mousex)/5) + mousex
                point_1y = pmousey
                point_12x = ((pmousex - mousex)/2) + mousex
                point_12y = ((pmousey - mousey)*(3/4)) + mousey
                point_2x =   pmousex -((pmousex - mousex)/5)
                point_2y = pmousey
                point_23x = ((pmousex - mousex)*(3/5)) + mousex
                point_23y = ((pmousey - mousey)*(3/5)) + mousey
                point_3x = pmousex
                point_3y = ((pmousey - mousey)*(2/5)) + mousey
                point_34x = ((pmousex - mousex)*(3/5)) + mousex
                point_34y = ((pmousey - mousey)*(2/5)) + mousey
                point_4x = ((pmousex  - mousex)/2) + mousex
                point_4y = mousey
                point_45x = ((pmousex - mousex)*(2/5)) + mousex
                point_45y = ((pmousey - mousey)*(2/5)) + mousey
                point_5x = mousex
                point_5y = ((pmousey - mousey)*(2/5)) + mousey
                point_15x = ((pmousex - mousex)*(2/5)) + mousex
                point_15y = ((pmousey - mousey)*(3/5)) + mousey


                // use a smaller area of circle for stars to avoid deformations -> here size -30
                if((sq(abs(point_1x - size)) + sq(abs(point_1y - size)) < sq(size-30))  &&
                    (sq(abs(point_2x - size)) + sq(abs(point_2y - size)) < sq(size-30)) && 
                    (sq(abs(point_3x - size)) + sq(abs(point_3y - size)) < sq(size-30)) &&
                    (sq(abs(point_4x - size)) + sq(abs(point_4y - size)) < sq(size-30)) &&
                    (sq(abs(point_5x - size)) + sq(abs(point_5y - size)) < sq(size-30)))
                    {
                        objectContainer.push(new Lin((point_1x - size) /size, - ((point_1y - size)/ size),(point_12x - size) /size, - ((point_12y - size)/ size),currentColor,strokeSize))    
                        objectContainer.push(new Lin((point_2x - size) /size, - ((point_2y - size)/ size),(point_12x - size) /size, - ((point_12y - size)/ size),currentColor,strokeSize))    
                        objectContainer.push(new Lin((point_2x - size) /size, - ((point_2y - size)/ size),(point_23x - size) /size, - ((point_23y - size)/ size),currentColor,strokeSize))    
                        objectContainer.push(new Lin((point_3x - size) /size, - ((point_3y - size)/ size),(point_23x - size) /size, - ((point_23y - size)/ size),currentColor,strokeSize))    
                        objectContainer.push(new Lin((point_3x - size) /size, - ((point_3y - size)/ size),(point_34x - size) /size, - ((point_34y - size+1)/ size),currentColor,strokeSize))    
                        objectContainer.push(new Lin((point_4x - size) /size, - ((point_4y - size)/ size),(point_34x - size) /size, - ((point_34y - size)/ size),currentColor,strokeSize))    
                        objectContainer.push(new Lin((point_4x - size) /size, - ((point_4y - size)/ size),(point_45x - size) /size, - ((point_45y - size)/ size),currentColor,strokeSize))    
                        objectContainer.push(new Lin((point_5x - size) /size, - ((point_5y - size)/ size),(point_45x - size) /size, - ((point_45y - size+1)/ size),currentColor,strokeSize))    
                        objectContainer.push(new Lin((point_5x - size) /size, - ((point_5y - size)/ size),(point_15x - size) /size, - ((point_15y - size)/ size),currentColor,strokeSize))    
                        objectContainer.push(new Lin((point_1x - size) /size, - ((point_1y - size)/ size),(point_15x - size) /size, - ((point_15y - size)/ size),currentColor,strokeSize))    
                    } else {
                    firstClick = false
                } 
            } else {
                firstClick = false
            }  
        }
    }
}