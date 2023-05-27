console.log( __filename );
console.log( __dirname );
function printHello1(){
    console.log( "Hello, Wod!");
    }
    // Now call above function after 2 seconds
    setTimeout(printHello1, 2000);

    function printHello2(){
        console.log( "Hello, World!");
        }
        // Now call above function after 2 seconds
        setInterval(printHello2, 2000);
        function printHello3(){
            console.log( "Hello, ");
            }
            // Now call above function after 2 seconds
            var t = setTimeout(printHello3, 2000);

            imer
clearTimeout(t);