/**
* class circle is used to generate cirlce objects for the list in order to represent the paintbrush
*
*
* @authors Mouna Deubler, Yunus Sahin and Juliane Stehle
* @version 1.0
* @since   2022-08-01
*/

class Circ {
    
    constructor(posX, posY, radius, color) {
        this.p = [posX,posY]
        this.r = radius
        this.c = color
        this.pStart = [posX,posY]
    }
    
    show() {

        let a = sqrt(mog(this.p))
        let angle = arg(this.p)
        let pm = ((1+a) * exp(this.r) - (1-a)) / ((1 + a) * exp(this.r) + (1 - a))
        let p_koordinate = car([pm,angle])
        let qm = ((1+ a) - (1 - a)*exp(this.r)) / ((1 + a) + (1 - a) * exp(this.r))
        let q_koordinate = car([qm,angle])
        let b = mul(add(p_koordinate,q_koordinate), [0.5, 0])
        let l = 0.5 * sqrt(mog(sub(p_koordinate,q_koordinate)))
        fill(this.c)
        noStroke()
        ellipse(b[0] * size, b[1] * size, size * 2 * l);        
    }
}
