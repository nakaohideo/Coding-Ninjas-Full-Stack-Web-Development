/* var a = (function(){
    return typeof arguments;
 })();
 console.log(a); */


/* var add = (function ()
{
    var counter = 0;
    return function () 
    { 
        counter += 1; return counter }
})();
console.log(add());
console.log(add());
console.log(add()); */



/* arrow functions */
/* var multiply=(x, y)=>
{
    return x*y;
}
console.log(multiply(2, 3));


 */
var double=x=>2*x;
console.log(double(5));

/* "use strict";
function person(name)
{
  this.name=name;
  console.log(this);
  
  setTimeout(()=>console.log(this), 1000)
}
var obj=new person("parikshit") */

