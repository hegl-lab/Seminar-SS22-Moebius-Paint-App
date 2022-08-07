/**
* class main is used to combine the graphical user interface with the moebius transform functions 
*
*
* @authors Mouna Deubler, Yunus Sahin and Juliane Stehle
* @version 1.0
* @since   2022-08-01
*/

let opacit = 50
let currentElement, currentColor
let size = 310
let objectContainer = []
let strokeSize = 3
let firstClick = false
let el = document.getElementsByName('radio-type')
let img, img2
let imgEraser
let counter = 0


//check the radio values
function checkRadioValue() {
    for(i = 0; i < el.length; i++) {
        if(el[i].checked) {
            currentElement = el[i].value
        }
    }
}

//download painted image 
const download = document.getElementById('download')
download.addEventListener('click',
function(e) {
    if(counter>200) {
        background('#ffe4c4')
        scale(1,-1)
        noStroke()
        fill(250)
        ellipse(0,0,size*2)
        for(var j = 0; j < objectContainer.length; j++) {
            objectContainer[j].show(); 
        }
        for(i = 0; i < el.length; i++) {
            if(el[i].checked) {
                currentElement = el[i].value
            }
        }
        const link = document.createElement('a')
        link.download = "download.png"
        link.href = canvas.toDataURL()
        link.click()
        link.delete;
    }
});



function setup() {
    angleMode(RADIANS);
    noFill()
    createCanvas(size*2,size*2)
    currentColor = color("red"); 
    img = loadImage('pictures/eraser.png');
    imageMode(CENTER)
    img.resize(5,5)
    img2 = loadImage('pictures/group_picture.jpeg');
}

//change the color of pen
const selectColor = (elem) => {
    currentColor = color(elem.getAttribute("data-color"))
}

const favColor = (elem) => {
    currentColor = color(elem.value)
}

function penSizeChange(pensize){
    strokeSize = pensize
}

function draw() {
    
    if(counter>200) {
        noFill()
        noSmooth()
        checkRadioValue()
        move1()
        //check which radio value is active
        if(currentElement === "line") {
            addLines()
        }
        if(currentElement === "brush") {
            addCircle()
        }
        if(currentElement === "square") {
            addSquare()
        }
        if(currentElement === "triangle") {
            addTriangle()
        }
        if(currentElement === "star") {
            addStar()
        }
        if(currentElement === "eraser") {
            imgEraser = true
            erase1()
            noCursor()
        } else {
            imgEraser = false
            cursor()
        }
        background('#ffe4c4')

        noStroke()
        translate(size,size)
        scale(1,-1)

        fill(250)
        ellipse(0,0,size*2)
        for(var j = 0; j < objectContainer.length; j++) {
            objectContainer[j].show(); 
        }
        noStroke()
        textSize(15);
        scale(1,-1)
        fill(0,0,0);
        text("Move: W | A | S | D", -290,290);

        let x = "Rotate: "+ '\u2190' + " "+ '\u2192'
        text(x, -290, 270);
        
        if(imgEraser){
            img.resize(40,40)
            image(img,(mouseX-size),(mouseY-size))
        }
    } else {
        counter += 1
        image(img2, size, size, size*2, size*2);
    }
}

function addCircle() {
    if(mouseIsPressed) { 
        if(sq(abs(mouseX - size)) + sq(abs(mouseY - size)) < sq(size)) {
            objectContainer.push(new Circ((mouseX - size) /size, - ((mouseY - size)/ size), 0.03*strokeSize, currentColor))
            objectContainer[objectContainer.length - 1].c.setAlpha(opacit*255/100)   
        }
    }
}

function addLines() {
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
                objectContainer.push(new Lin((mousex - size) /size, - ((mousey - size)/ size),
                (pmousex - size) /size, - ((pmousey - size)/ size),currentColor,strokeSize))
            } else {
                firstClick = false
            }
        }
    }
}

