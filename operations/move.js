/**
* funtion move rotates and moves the objects inside the circle
*
*
* @authors Mouna Deubler, Yunus Sahin and Juliane Stehle
* @version 1.0
* @since   2022-08-01
*/

function move1() {
    let shift = 0.01
    let moveCanvas = false
    let phase = 0
    let teta = 0
    let znullkreis = 0

    //Tasten: w=87, a=65, s=83, d=68
    if(keyIsDown( 87 )) {
        znullkreis = [0, - shift]; //znullkreis ist der Punkt, der durch die Transformation auf den Mittelpunkt der Canvas verschoben wird
        teta = 0; //teta ist der Drehwinkel
        phase = [cos(teta), sin(teta)]; //phase ist der Faktor fuer die Drehung
        moveCanvas = true
    }
    if(keyIsDown( 83 )) {
        znullkreis = [0, shift];
        teta = 0;
        phase = [cos(teta), sin(teta)];
        moveCanvas = true
    }

    if(keyIsDown( 65 )) {
        znullkreis = [shift, 0];
        teta = 0; 
        phase = [cos(teta), sin(teta)]; 
        moveCanvas = true
    }

    if(keyIsDown( 68 )) {
        znullkreis = [- shift, 0];
        teta = 0; 
        phase = [cos(teta), sin(teta)]; 
        moveCanvas = true
    }

    if(keyIsDown( RIGHT_ARROW )) {
        znullkreis = [ 0, 0];
        teta = - 2 * shift; 
        phase = [cos(teta), sin(teta)]; 
        moveCanvas = true
    }

    if(keyIsDown( LEFT_ARROW )) {
        znullkreis = [ 0, 0];
        teta = 2 * shift; 
        phase = [cos(teta), sin(teta)]; 
        moveCanvas = true
    }
    
    if(moveCanvas) {
        for(let i = 0; i < objectContainer.length; i++) {
            if(objectContainer[i] instanceof Lin) {

                objectContainer[i].a = mul( phase, div( sub(objectContainer[i].a, znullkreis), sub([1,0], mul(con(znullkreis), objectContainer[i].a))))
                objectContainer[i].b = mul( phase, div( sub(objectContainer[i].b, znullkreis), sub([1,0], mul(con(znullkreis), objectContainer[i].b))))
            }
            if(objectContainer[i] instanceof Circ) {
                objectContainer[i].p = mul( phase, div( sub(objectContainer[i].p, znullkreis), sub([1,0], mul(con(znullkreis), objectContainer[i].p))))
            }
        }
    }
}



