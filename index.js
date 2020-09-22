var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("solving rectable with l=" +l +" and b =" +b);
    if(l<=0 || b <= 0) {
        console.log("dimension should be greater then zero l="+l+"b="+b);
    } else {
        console.log("The area of rectable is" + rect.area(l, b));
        console.log("The Perimeter of the rectable is "+ rect.perimeter(l,b));
    }

}

solveRect(4,8);
solveRect(-3, 30);