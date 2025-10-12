console.log("My App is running");
console.log (200);
console.log (true);
console.log (null);

var num = 10;
console.log(num);
console.log("string", 10.11, true, false, null, num);


/*learning functions or subroutines*/

function makecoffee(sugar, milk) 
{
    var instructions = "Boil water";
    instructions += "Pour into cup";
    instructions += "Add coffee granules";
    instructions += "Add " + sugar + " spoons of sugar";
    instructions += "Add " + milk + "% milk";
    return instructions;
}
console.log(makecoffee(2, 50));


/*learning objects and arrays*/
var car = {
  color : "red", //property
  speed : 200,
  drive : function() { return "drive";} //method
};
