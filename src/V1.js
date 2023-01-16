let X = 5;
let Y = 5;
let pX =0;
let pY = 0;
let grid = Array();


let directions = ["N", "E", "S", "W"];
let facing = 0



var xArray = new Array(X);


function Start (){
        for (var i = 0; i < Y; i++) {
            xArray[i] = "  "; 
        }
        for (var i = 0; i < Y; i++) {
            grid[i] = xArray.slice(0);
        }
    
        // lo comente por que creo que aun no es neceario 
        // parte con con la posicion 0.0
        /*
        for (var i = 0; i < X; i++) {
        for (var j = 0; j < Y; j++) {
            if ( i === Z && j === Q ) {
                grid[i][j] = "🡣 ";
                }
            }
        }
        */
}

    function grilla (){
    for (var i = 0; i < Y; i++) {
        xArray[i] = "  "; 
    }
    for (var i = 0; i < Y; i++) {
        grid[i] = xArray.slice(0);
        }
        
    }

                                                    
// 🡢🡠🡡



ruta = "MLR"

    for (var i = 0; i <= ruta.length; i++) {
        var command = ruta[i];


        if (command == "M") {
            pX=pX+1
            moveForward(command, pX,pY);
        } else if (command == "L" || command == "R") {
           turn(command, pX,pY);
        }
    }
    


   function turn(command,pX,pY) {
    var cardinalIndex = directions.indexOf();
    if (command == "L") {
        cardinalIndex = (cardinalIndex + 4 - 1) % 4;
        moveForward(command,pX,pY)
    } else if (command == "R") {
        cardinalIndex = (cardinalIndex + 1) % 4;
        moveForward(command,pX,pY)
    }
    facing = directions[cardinalIndex];
}






 function   moveForward(command,pX,pY) {
        if (command == "M") {
           
           grilla();
           grid[pX][pY] = "🡣";
        if (facing == "N") {
                pY++;
                grilla();
                grid[pX][pY] = "🡣";
            } 
        }


        if (command == "L") {

            if (facing == "E") {
                pX++;
                grilla();
                grid[pX][pY] = "🡢";
             }else{ (facing == "W") 
                pX++;
                grilla();
                grid[pX][pY] = "🡠";
            }
        }
        
        if (command == "R") {

           if (facing == "S") {
                    pY++;
                    grilla();
                grid[pX][pY] = "🡡";
            }
        }

        

        
    }

   
    


console.log(grid);
