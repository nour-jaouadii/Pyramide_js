
    while(true) {
        var rows = prompt(" STP, entrer un nbre inferieur à 25");

           if(rows > 25 || rows < 0) 
           {
            console.log( ' le nbre est supérieur à 25');
           }
            if(rows <= 25 && rows > 0) {
               break ;     
            }
    }// fin while

    for (var i = 1; i <= rows; i++) { //5
        for (var j = 1; j <=(rows-i) ; j++) //  i=1  j = 1 (rows-i) = 4
         {                                          // j = 1 (rows-i) = 4

            document.write('&nbsp') ;   //  i=1  j = 1  (rows-i) = 4
                                       //  i=2  j = 1 (rows-i) = 3
        }
        for (var k = 1; k <=i ; k++)          
         {  
            document.write('*')  ;  // i=1 k=1 k <= 1   '*'
                                    // i=2 k=1 k <= 2     '*'
        }
        
        document.write('<br/>') ;   
    }

