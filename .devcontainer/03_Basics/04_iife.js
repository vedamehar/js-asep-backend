// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

// (function aurcode() {
//     console.log("DB Connected Two");
// })()

((name) => {
    console.log(`DB Connected Two ${name}`);
})("Vedant")