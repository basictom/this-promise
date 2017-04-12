$(document).ready(function(){


  $("#button").on("click", function(e){
    alert("hello");
    console.log("event", e);
    console.log("this", $(this));
    console.log("event target", e.target);
  });


});

// =================== EXAMPLE 1

// this.a = 100;
// console.log(window.a);
//
// var fubar = "1235";
// function baz(){
//   console.log("baz");
//   bax();
// }
// function bax(){
//   console.log("bax");
//   bac();
// }
// function bac(){
//   console.log("bac");
//   var fubar = "12354656";
//   console.log("this", this); //this will be the "target" element - object
//   console.log("fubar", this.fubar); //
// }
//
// baz();


// =================== EXAMPLE 2

// var a = 3;
// function foo(){
//   console.log("this", this);
//   console.log("a", this.a);
// }
//
// var obj = {
//   a: 2,
//   monkey: foo
// };
//
//
// obj.monkey();
//
//
// console.log(monkey)


// =================== EXAMPLE 3

//
// function foo(){
//   console.log("this", this);
//   console.log("a", this.a);
// }
//
// var obj2 = {
//   a: 24,
//   foo: foo
// };
//
// var obj1 = {
//   a: 4;
//   obj2:obj2
// };
//
// obj1.obj2.foo()




// =================== EXAMPLE 4

//
// function foo(){
//   console.log("this", this);
//   console.log("a", this.a);
// }
//
// var obj2 = {
//   a: 2493,
//   foo: foo
// };
//
//
// var bar = obj.foo;
// var a = "global warming";
// obj.foo();



// =================== EXAMPLE 5

function foo(){
  console.log("this", this);
  console.log("a", this.a);
}

function doFoo(fn){
  return fn();
}

var obj = {
  a: 2493,
  foo: foo
};



var a = "global";

doFoo(obj.foo);
