var rect = require('./rectangle');
const rectangle = require('./rectangle');

function solveRect(l, b) {
    console.log("solving rectable with l=" +l +" and b =" +b);

    rect(l,b, (err, rectangle) => {
        if(err){
            console.log("Error: ", err.message);
        }else{
            console.log("The area of the rectable of dimensions l ="+l+" and b= " + b+ "is" + rectangle.area());
            console.log("The area of the rectable of dimensions l ="+l+" and b= " + b+ "is" + rectangle.perimeter());
        }
    });
    console.log("this statement after the call to rect()");

}

solveRect(4,8);
solveRect(-3, 30);