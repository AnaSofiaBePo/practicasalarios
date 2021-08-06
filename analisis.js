
  
  function mediaaritmetica(lista){
        const sumaLista = lista.reduce(
            function(acumulador = 0, valorActual){
                return parseInt(acumulador+valorActual);
            }
            );
            const promedio = sumaLista / lista.length;
            console.group(promedio);
            return promedio
        };
        
        console.group("Salario con map");
        const salariomonto = empleados.map( 
            function(employ){
                return employ.salario}
            );
            console.log(salariomonto)
        console.groupEnd();

        console.group("Salario ordenado sort")
            const salarioordenado = salariomonto.sort(
                function(salaryA, salaryB){
                   return parseInt(salaryA - salaryB)
                }
            );
            console.log(salarioordenado);
     console.groupEnd();
        
        function esPar(numero){
            return( numero % 2 ===0 );
        }
        
        function medianasalary(lista){
            
            const mitad = (lista.lenght /2);
            console.log(mitad);//// en consola me devuelve NaN;
            if(esPar(lista.lenght)){
                const employA = lista[mitad-1];
                const employB = lista[mitad];
                console.log(`${employA} y ${employB}`);
                
                console.log(employA)
            const proMed= mediaaritmetica( [
                employA,employB,
            ]); 

            return proMed;
        
            }
            else{
               const employIm = lista[mitad];
                return employIm;
            }
        };
        console.log(medianasalary(salarioordenado));
     
        
        