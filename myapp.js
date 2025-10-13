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

var car = { //object
  color : "red", //property
  speed : 200,
  drive : function() { return "drive";} //method
};

var shoppinglist = [ //array
  "Apple",
  "Orange",
  "Pear"
];


var car = { 
  make: "volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petrol",
    pistons: [ {maker: "BMW"}, {maker: "BMW"} ]
  },
  drive: function() { return "drive"; }
};

var array = [
  "string",
  100,
  [ "embed", 200 ],
  { car:"ford" },
  function() { return "drive"; }
];

console.log(car.make);


array.splice //splice command for adding and deleting udemy javascript essentials chapter 18



//callable objects, object inside object
function name ( fullname )
{

  return fullname.lastname + "MR.";
}

name( {firstname:"Lawrence", lastname:"Turton"} );  

console.log(name( {firstname:"Lawrence", lastname:"Turton"} )
);


console.log(myName, printName());

var myName = "Lawrence";

function printName() {
  return "John Doe";
}

//console.log (this);

var object = {
  prop: this,
  method: function() { return this; }
};

var array = [ 
  this,
  function() {return this; }
];

function global () { 
  return this;
}

global.call (object);


//constructor functions

function Apple ( x, y, color, shape )
{

  this.x = x;
  this.y = y;
  this.color = color;
  this.shape = shape;

}

// new Apple(10, 20, "red", 200 ); //new so that it doesnt direct to window

var apple1 = new Apple(10, 20, "red", 200 );
var apple2 = new Apple(20, 100, "green", 300 );  
var apple3 = new Apple(20, 200, "pink", 10);


//prototypes

function Apple (color, weight)
{
  this.color = color;
  this.weight = weight;
}

Apple.prototype = {
  eat: function() { return "eat the apple";},
  throw: function() { return "throw the apple"; }
};

var apple1 = new Apple ("red", 200);
var apple2 = new Apple ("green", 300);
var apple3 = new Apple ("pink", 100);

Apple.prototype.eat = function() { return "new apple eaten!!!!"}; //to change the prototype method


//comparison operators
== //equal
=== //strictly equal
!= //not equal
!== //strictly not equal
