// to solve the square equation

var a = Number(prompt('Please, input \'a\':'));
var b = Number(prompt('Please, input \'b\':'));
var c = Number(prompt('Please, input \'c\':'));
var quadEquStr = "The equation looks like this: " + a + "x^2 + " + b +"x + " + c + "=0";
alert(quadEquStr);


function xOne(a, b, c) {
    var resx1 = b * b - 4 * a * c;
    var squaredx1 = Math.abs(resx1);
    squaredx1 = Math.sqrt(squaredx1);
    if (resx1 < 0) {
        squaredx1 = -squaredx1;
    } else {
        squaredx1 = squaredx1;
    }
    resx1 = (-b + squaredx1) / (2 * a);
    return resx1;
}

function xTwo(a, b, c) {
    var resx2 = b * b - 4 * a * c;
    var squaredx2 = Math.abs(resx2);
    squaredx2 = Math.sqrt(squaredx2);
    if (resx2 < 0) {
        squaredx2 = -squaredx2;
    } else {
        squaredx2 = squaredx2;
    }
    resx2 = (-b - squaredx2) / (2 * a);
    return resx2;
}

var result = "The results: x1 = " + xOne(a, b, c) + ", x2 = " + xTwo(a, b, c) + ".";

document.write(result);