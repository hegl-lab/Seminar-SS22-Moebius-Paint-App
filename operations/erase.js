/**
* funtion erase removes the objects from the list
* the distance from the point in the list to the cursor is decisive for the removal
*
* @authors Mouna Deubler, Yunus Sahin and Juliane Stehle
* @version 1.0
* @since   2022-08-01
*/

function erase1() {

    if (mouseIsPressed) {
        for(let i = 0; i < objectContainer.length; i++) {
            if(objectContainer[i] instanceof Lin) {
                let a = (mouseX - size)/size - objectContainer[i].a[0];
                let b = (-(mouseY - size)/size) - objectContainer[i].a[1];
                let c = (mouseX - size)/size - objectContainer[i].b[0];
                let d = (-(mouseY - size)/size) - objectContainer[i].b[1];
                let distance1 = Math.sqrt( a*a + b*b )
                let distance2 = Math.sqrt( c*c + d*d )
                if( distance1 < strokeSize/50 || distance2 < strokeSize/50 ) {
                    objectContainer.splice(i,1)
                    i--;
                }
            }

            if(objectContainer[i] instanceof Circ) {
                print(objectContainer[i].p[0])
                let a = (mouseX - size)/size - objectContainer[i].p[0];
                let b = (-(mouseY - size)/size) - objectContainer[i].p[1];
                let distance = Math.sqrt( a*a + b*b )
                if( distance < strokeSize/50) {
                    objectContainer.splice(i,1)
                    i--;
                }
            }
        }
    }
}