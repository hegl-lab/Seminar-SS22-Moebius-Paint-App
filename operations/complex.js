/**
* complex functions are used to calculate the moebius transformation
*
*
* @authors Mouna Deubler, Yunus Sahin and Juliane Stehle
* @version 1.0
* @since   2022-08-01
*/


function arg(a) {
    let mult = 0;
    if(a[0] <0) {
        mult = 1;
    }
    return atan(a[1]/a[0]) + mult * PI;
}
function arg2(a) {
    let mult = 0;
    if(a[0] <0) {
        mult = 1;
        return mult * PI - atan(-a[1]/a[0]);
    }
    return atan(a[1]/a[0]);
}

function div(a, b) {
    let ans = mul(a, con(b))
    return [ans[0] / mog(b), ans[1] / mog(b)]
}

function con(a) {
    return [a[0], -a[1]]
}

function sub(a,b) {
    return [a[0] - b[0], a[1] - b[1]]
}

function add(a,b) {
    return [a[0] + b[0], a[1] + b[1]]
}

function mog(a) {
    return sq(a[0]) + sq(a[1])
}

function car(a) {
    return [a[0] * cos(a[1]), a[0] * sin(a[1])]
}

function mul(a,b) {
    return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]]
}
