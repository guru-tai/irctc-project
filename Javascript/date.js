function testScope() 
{
   let x = 5; if (true)
     { let x = 10; console.log("Inside if block:", x);