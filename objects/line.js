/**
* class lin is used to generate moebius lines
*
*
* @authors Mouna Deubler, Yunus Sahin and Juliane Stehle
* @version 1.0
* @since   2022-08-01
*/

class Lin {

    constructor(firstPosX, firstPosY,secondPosX,secondPosY,color,strokeLine) {
        this.a = [firstPosX,firstPosY]
        this.b = [secondPosX,secondPosY]
        this.c = color
        this.sl = strokeLine
    }

    show() {
        // use line to normal lines to avoid deformations of lines
        if((this.a[0] === 0 && this.b[0] === 0) || (this.a[1] === 0 && this.b[1] === 0) ||  (sqrt(sq(this.a[0]-this.b[0])+ sq(this.a[1]-this.b[1]) < 0.001))) {
            noFill()
            stroke(this.c)
            strokeWeight(this.sl)
            line(this.a[0]*size, this.a[1]*size, this.b[0]*size, this.b[1]*size);
            return 
        }
        if((this.a[0]/this.a[1]) === (this.b[0]/this.b[1])) {
            noFill()
            stroke(this.c)
            strokeWeight(this.sl)
            line(this.a[0]*size, this.a[1]*size, this.b[0]*size, this.b[1]*size);
        }
        if(this.a[1] === this.b[1]) {
            this.a[1] = this.a[1] + 0.01 
        }

        let p = 1/(sqrt(mog(this.a)))
        let psi = arg2(this.a)
        let z = [p,psi]
        let na = car(z)
        let m = (this.a[0]-this.b[0]) / (this.b[1]-this.a[1])
        let m_ = (this.a[0]-na[0])/ (na[1]-this.a[1])
        let d = (this.a[0]+this.b[0])/2
        let d_ = (na[0] + this.a[0])/2
        let f = (this.a[1] + this.b[1])/2
        let f_ = (na[1] + this.a[1])/2
        let x = ((m*d) - f - (m_ * d_) +f_)/ (m - m_)
        let y = m * (x - d) + f
        let dd = 2 * sqrt((sq(x - this.a[0]) + sq(y - this.a[1])))
        let angle = acos(((this.a[0]*size)-(x*size))/sqrt(sq((this.a[0]*size)-(x*size)) + sq((this.a[1]*size)-(y*size))))
        let angleP =  acos(((this.b[0]*size)-(x*size))/sqrt(sq((this.b[0]*size)-(x*size)) + sq((this.b[1]*size)-(y*size))))

        if(this.a[1] < y) {
            angle = PI + (PI-angle)
        }
    

        if(this.b[1] < y) {
            angleP = PI + (PI-angleP)
        }

    
      if(x>=0) { //check if circle is right of the center of the canvas
        if(angle < angleP) {
            noFill()
            stroke(this.c)
            strokeWeight(this.sl)
            arc(x*size,y*size, dd*size,dd*size,angle,angleP)
        } else {
            noFill()
            stroke(this.c)
            strokeWeight(this.sl)
            arc(x*size,y*size, dd*size,dd*size,angleP,angle)
        }
      } else {
            // 3 cases for the decision of the arc line 
            if(this.a[1] <= y && this.b[1] <= y) {
                if(angle <= angleP) {
                    noFill()
                    stroke(this.c)
                    strokeWeight(this.sl)
                    arc(x*size,y*size, dd*size,dd*size,angle,angleP)
                } else { 
                    noFill()
                    stroke(this.c)
                    strokeWeight(this.sl)
                    arc(x*size,y*size, dd*size,dd*size,angleP,angle)
                }
            } else if((this.a[1] <= y && this.b[1] >= y) || (this.a[1] >= y && this.b[1] <= y) ) {
                if(angle <= angleP) {
                    noFill()
                    stroke(this.c)
                    strokeWeight(this.sl)
                    arc(x*size,y*size, dd*size,dd*size,angleP,angle)
                } else { 
                    noFill()
                    stroke(this.c)
                    strokeWeight(this.sl)
                    arc(x*size,y*size, dd*size,dd*size,angle,angleP)
                }
            } else if(this.a[1] >= y && this.b[1] >= y) {
                if(angle <= angleP) {
                    noFill()
                    stroke(this.c)
                    strokeWeight(this.sl)
                    arc(x*size,y*size, dd*size,dd*size,angle,angleP)
                } else { 
                    noFill()
                    stroke(this.c)
                    strokeWeight(this.sl)
                    arc(x*size,y*size, dd*size,dd*size,angleP,angle)
                }
            }
      }
  }
}