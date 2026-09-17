// Immediately Invoked Function Expressions (IIFE)

// (IIFE)---> It helps us to protect from golbal variables so that we immediately execute it.

// function datasource()
// {
//     console.log("DS connected")
// }

// datasource()
(function datasource()
{
    // This is named IIFE
    console.log("DS connected")
})();  // Don't forget to write semicolon at the end because invoked function does not stop directly.


(() =>
{
    console.log("DS connected two")
})(); 
(() => console.log("DS connected two")
)(); 

((name) =>
{
    // This is unnamed IIFE
    console.log(`DS connected ${name}`)
})("Muhammad Sheharyar"); 
